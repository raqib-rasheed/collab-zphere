import { FC, useEffect, useState } from "react";
import { useNodes, useEdges, Node } from "react-flow-renderer";
import {DrawerState} from 'helpers/types';
import EqualToForm from "routes/BotsWorkspace/Drawer/Forms/EqualTo";

type Props = {
    drawerState: DrawerState;
};

const EqualTo: FC<Props> = ({ drawerState }) => {
    const nodes = useNodes();
    const edges = useEdges();
    const [targetNode, setTargetNode] = useState<Node | null>(null);

    useEffect(() => {
        const edge = edges.find((edge) => edge.source === drawerState.nodeId);
        if (edge) {
            const targetNode = nodes.find((node) => node.id === edge?.target);
            setTargetNode(targetNode);
        } else {
            setTargetNode(null);
        } // if the edge is deleted
    }, [nodes, edges]);

    return (
        <div className="contents">
            {targetNode ? <EqualToForm drawerState={drawerState} /> : <h3>You need connect the node to see the form!</h3>}
        </div>
    );
};

export default EqualTo;
