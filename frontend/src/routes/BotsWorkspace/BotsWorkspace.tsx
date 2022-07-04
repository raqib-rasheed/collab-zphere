import React, { DragEvent, useState, FC, memo, useEffect } from "react";
// import 'react-flow-renderer/dist/style.css';
// import 'react-flow-renderer/dist/theme-default.css';
import ReactFlow, {
    addEdge,
    Controls,
    Background,
    useNodesState,
    useStoreApi,
    useEdgesState,
    ReactFlowInstance,
    Connection,
    Edge,
    Node,
    ConnectionMode,
} from "react-flow-renderer";
import Sidebar from "routes/BotsWorkspace/sidebar";
import CustomNode from "routes/BotsWorkspace/CustomNode/CustomNode";
import { getAxiosInstance } from "helpers/AxiosInstance";
import { useActions } from "helpers/store";
import "styles/css/index.css";

const nodeTypes = {
    customNode: CustomNode,
};

const BotsWorkspace: FC = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>();

    const axiosInstance = getAxiosInstance();

    const initNodeSetFunction = useActions((actions) => actions.rfstateStore.initNodeSetFunction);
    const initEdgeSetFunction = useActions((actions) => actions.rfstateStore.initEdgeSetFunction);

    // just for debugging
    // useStoreApi().subscribe((store) => {
    //     console.log(store);
    // })

    const onConnect = (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds));

    const onInit = async (_reactFlowInstance: ReactFlowInstance) => {
        await axiosInstance
            .get("/workspace/")
            .then((res) => {
                const savedNodes = res.data.nodes;
                const savedEdges = res.data.edges;
                setNodes(savedNodes);
                setEdges(savedEdges);
            })
            .catch((err) => console.log(err));
        setReactFlowInstance(_reactFlowInstance);
    };

    console.log(nodes);

    const onDrop = (event: DragEvent) => {
        event.preventDefault();
        let id;
        if (nodes.length === 0) id = "1";
        else id = `${Math.random()}`;

        if (reactFlowInstance) {
            const name = event.dataTransfer.getData("nodeName");
            const icon = event.dataTransfer.getData("icon");
            const color = event.dataTransfer.getData("color");
            const iconName = event.dataTransfer.getData("iconName");
            const x = event.clientX;
            const y = event.clientY;
            const position = reactFlowInstance.project({ x, y });
            const newNode: Node = {
                id: id,
                position,
                type: "customNode",
                data: {
                    label: `${name}`,
                    color,
                    icon,
                    iconName,
                },
            };
            setNodes([...nodes, newNode]);
        }
    };

    const onDragOver = (event: DragEvent) => {
        event.preventDefault();
    };

    useEffect(() => {
        // store setEdges and setNodes in state because the only way to update nodes in this view is by calling this function
        // so storing this in the store makes task much easy
        console.log('udated')
        initEdgeSetFunction(setEdges);
        initNodeSetFunction(setNodes);
    }, [setEdges, setNodes]);

    return (
        <div className="botworkspace">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={onInit}
                onDrop={onDrop}
                nodeTypes={nodeTypes}
                // onLoad={onLoad}
                onDragOver={onDragOver}
                connectionMode={ConnectionMode.Loose}
                fitView
                attributionPosition="top-right"
            >
                <Controls />
                <Background color="#aaa" gap={16} />
            </ReactFlow>
            <Sidebar />
        </div>
    );
};

export default memo(BotsWorkspace);
