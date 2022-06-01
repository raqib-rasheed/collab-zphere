import React, { DragEvent, useState, FC, memo } from "react";
// import 'react-flow-renderer/dist/style.css';
// import 'react-flow-renderer/dist/theme-default.css';
import ReactFlow, {
    addEdge,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    ReactFlowInstance,
    Connection,
    Edge,
    Node,
} from "react-flow-renderer";
import Sidebar from "routes/BotsWorkspace/sidebar";
import Action from "components/Actions";
import "styles/css/index.css";

const BotsWorkspace: FC = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>();

    const onConnect = (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds));

    const onInit = async (_reactFlowInstance: ReactFlowInstance) => {
        console.log("flow loaded:", reactFlowInstance);
        // await axios
        //   .get(url)
        //   .then((res) => {
        //     const savedNodes = res.data.nodes;
        //     const savedEdges = res.data.edges;
        //     console.log(savedNodes, savedEdges);
        //     setNodes(savedNodes);
        //     setEdges(savedEdges);
        //   })
        //   .catch((err) => console.log(err));
        setReactFlowInstance(_reactFlowInstance);
    };

    const onDrop = (event: DragEvent) => {
        let id;
        if (nodes.length === 0) id = "1";
        else id = `${Math.random()}`;

        event.preventDefault();
        if (reactFlowInstance) {
            const name = event.dataTransfer.getData("nodeName");
            const icon = event.dataTransfer.getData("icon");
            const x = event.clientX;
            const y = event.clientY;
            const position = reactFlowInstance.project({ x, y });
            const newNode: Node = {
                id: id,
                position,
                data: {
                    label: `${name}`,
                    icon,
                },
            };
            setNodes([...nodes, newNode]);
        }
    };

    const onDragOver = (event: DragEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={onInit}
                onDrop={onDrop}
                // onLoad={onLoad}
                onDragOver={onDragOver}
                fitView
                attributionPosition="top-right"
            >
                <Controls />
                <Background color="#aaa" gap={16} />
            </ReactFlow>
            <Sidebar />
            <Action />
        </>
    );
};

export default memo(BotsWorkspace);
