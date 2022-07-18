import { Dispatch, SetStateAction } from "react";
import { getConnectedEdges, Edge, Node } from "react-flow-renderer";
import { ElementNames, DrawerState } from "helpers/types";
import { StatusChange, NewClient, EqualTo } from "routes/BotsWorkspace/Drawer";

const getIds = (element: (Node | Edge)[]): string[] => {
    return element.reduce((result, current) => {
        result.push(current.id);
        return result;
    }, [] as string[]);
};

// this is to fix typescript return errors
function filterWithId(element: Node[], ids: string[]): Node[];
function filterWithId(element: Edge[], ids: string[]): Edge[];
function filterWithId(element: any[], ids: string[]) {
    return element.reduce((result, current) => {
        if (!ids.includes(current.id)) {
            result.push(current);
        }
        return result;
    }, [] as (Node | Edge)[]);
}

const isSelected = (node: Node) => node.selected === true;

const getSelectedNodes = (nodes: Node[]): Node[] => {
    return nodes.filter(isSelected);
};

// export const deleteNode = (
//     rfState: ReactFlowState,
// ) => {
//     const nodes = Array.from(rfState.nodeInternals.values()) as Node[];
//     const edges = rfState.edges;
//     const selectedNodes = getSelectedNodes(nodes);
//     if (selectedNodes) {
//         const connectedEdges = getConnectedEdges(selectedNodes, edges);
//         const connectedEdgesIds = getIds(connectedEdges);
//         const newEdges = filterWithId(edges, connectedEdgesIds);
//         const selectedNodeIds = getIds(selectedNodes);
//         const newNodes = filterWithId(nodes, selectedNodeIds);
//         rfState.setNodes(newNodes);
//         rfState.setEdges(newEdges);
//     }
// };

export const deleteNode = (
    nodes: Node[],
    edges: Edge[],
    setNodes: Dispatch<SetStateAction<Node<any>[]>>,
    setEdges: Dispatch<SetStateAction<Edge<any>[]>>,
    deleteDatas: Dispatch<SetStateAction<Array<string>>>
) => {
    const selectedNodes = getSelectedNodes(nodes);
    if (selectedNodes) {
        const connectedEdges = getConnectedEdges(selectedNodes, edges);
        const connectedEdgesIds = getIds(connectedEdges);
        const newEdges = filterWithId(edges, connectedEdgesIds);
        const selectedNodeIds = getIds(selectedNodes);
        const newNodes = filterWithId(nodes, selectedNodeIds);
        setNodes(newNodes);
        setEdges(newEdges);
        deleteDatas(selectedNodeIds);
    }
};

export const getDrawerContent = (drawerState: DrawerState) => {
    switch (drawerState.elementName) {
        case ElementNames.statusChange:
            return <StatusChange />;
        case ElementNames.newClient:
            return <NewClient />;
        case ElementNames.equalTo:
            return <EqualTo drawerState = {drawerState} />;
        default:
            return <div></div>;
    }
};
