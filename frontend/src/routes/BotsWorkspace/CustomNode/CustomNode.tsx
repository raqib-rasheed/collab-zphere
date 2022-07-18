import { FC, memo } from "react";
import { Node, Edge, Handle, Position, useEdges, useNodes } from "react-flow-renderer";
import { getIconUrl } from "helpers/assets/Images";
import { deleteNode } from "routes/BotsWorkspace/utils";
import { useStoreState, useActions } from "helpers/store";
import { ElementNames } from "helpers/types";

const CustomNode: FC<Node> = ({ id, data }) => {
    const edges = useEdges();
    const nodes = useNodes();
    // const drawerState = useStoreState((state) => state.defaultStore.drawerState);

    const setNodes = useStoreState((state) => state.rfstateStore.setNodes);
    const setEdges = useStoreState((state) => state.rfstateStore.setEdges);

    const setDrawerState = useActions((actions) => actions.defaultStore.setDrawerState);
    const deleteDatas = useActions((actions) => actions.defaultStore.deleteDatas);

    const editClickHander = (elementName: ElementNames, nodeId: string) => {
        setDrawerState({
            isOpen: true,
            elementName: elementName,
            nodeId,
        });
    };

    const onDeleteHandler = (nodes: Node[], edges: Edge[]) => {
        deleteNode(nodes, edges, setNodes, setEdges, deleteDatas);
    };

    return (
        <div className="dragable-element custom-node">
            <div className="icon-container" style={{ backgroundColor: data.color }}>
                <img src={getIconUrl(data.iconName)} alt="bell icon" draggable={false} />
                {/* if draggable is not set we can drag the icons from flow space   */}
            </div>
            <p>{data.label}</p>
            <div className="node-buttons">
                <div className="node-button">
                    <span className="fas fa-trash" onClick={() => onDeleteHandler(nodes, edges)}></span>
                </div>
                <div className="node-button">
                    {data.componentType === "triggers" ? (
                        <span
                            className="fas fa-info"
                            title="Know more..."
                            onClick={() => {
                                editClickHander(data.label, id);
                            }}
                        ></span>
                    ) : (
                        <span
                            className="fas fa-edit"
                            onClick={() => {
                                editClickHander(data.label, id);
                            }}
                        ></span>
                    )}
                </div>
            </div>
            <Handle type="target" id="right" position={Position.Right} />
            <Handle type="source" id="left" position={Position.Left} />
        </div>
    );
};

export default memo(CustomNode);
