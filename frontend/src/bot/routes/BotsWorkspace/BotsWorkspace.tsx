import { DragEvent, useState, FC, memo, useEffect } from "react";
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
import { Drawer } from "@mantine/core";
import { useParams } from "react-router-dom";
import Sidebar from "bot/routes/BotsWorkspace/sidebar";
import CustomNode from "bot/routes/BotsWorkspace/CustomNode/CustomNode";
import { getAxiosInstance } from "bot/helpers/AxiosInstance";
import { useActions, useStoreState } from "bot/helpers/store";
import { DefaultDrawerState } from "bot/helpers/store/defaultStore";
import { getDrawerContent } from "bot/routes/BotsWorkspace/utils";
import OnDropListener from "./OnDropListener";
import "styles/css/index.css";

const nodeTypes = {
    customNode: CustomNode,
};

const BotsWorkspace: FC = () => {
    const axiosInstance = getAxiosInstance();
    const params = useParams();
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>();
    const [droppedNode, setDroppedNode] = useState<{ nodeId: string | null; componentName: string | null }>({
        nodeId: null,
        componentName: null,
    });

    const drawerState = useStoreState((state) => state.defaultStore.drawerState);
    // rfstate actions
    const initNodeSetFunction = useActions((actions) => actions.rfstateStore.initNodeSetFunction);
    const initEdgeSetFunction = useActions((actions) => actions.rfstateStore.initEdgeSetFunction);
    // default state actions
    const setDrawerState = useActions((actions) => actions.defaultStore.setDrawerState);
    const setDatas = useActions((actions) => actions.defaultStore.setNodeDatas);

    // just for debugging
    // useStoreApi().subscribe((store) => {
    //     console.log(store);
    // })
    const onConnect = (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds));

    const onInit = async (_reactFlowInstance: ReactFlowInstance) => {
        await axiosInstance
            .get(`/workspace/${params["botId"]}/`)
            .then((res) => {
                const savedNodes = res.data.nodes;
                const savedEdges = res.data.edges;
                const datas = res.data.datas;
                setNodes(savedNodes);
                setEdges(savedEdges);
                setDatas(datas);
            })
            .catch((err) => console.log(err));
        setReactFlowInstance(_reactFlowInstance);
    };

    const onDrop = (event: DragEvent) => {
        event.preventDefault();
        let id;
        if (nodes.length === 0) id = "1";
        else id = `${Math.random()}`;

        if (reactFlowInstance) {
            const name = event.dataTransfer.getData("nodeName");
            const componentType = event.dataTransfer.getData("componentType");
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
                    componentType,
                    color,
                    icon,
                    iconName,
                },
            };
            setNodes([...nodes, newNode]);
            setDroppedNode({
                nodeId: newNode.id,
                componentName: newNode.data.label,
            });
        }
    };

    const onDragOver = (event: DragEvent) => {
        event.preventDefault();
    };

    useEffect(() => {
        // store setEdges and setNodes in state because the only way to update nodes in this view is by calling this function
        // so storing this in the store makes task much easy
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
                // connectionMode={ConnectionMode.Loose}
                fitView
                attributionPosition="top-right"
            >
                <Controls />
                <Background color="#aaa" gap={16} />
            </ReactFlow>
            <Sidebar />
            <Drawer
                opened={drawerState.isOpen}
                onClose={() => setDrawerState(DefaultDrawerState)}
                title={drawerState.elementName}
                size={drawerState.size}
            >
                {getDrawerContent(drawerState)}
            </Drawer>
            <OnDropListener droppedNode={droppedNode} />
        </div>
    );
};

export default memo(BotsWorkspace);
