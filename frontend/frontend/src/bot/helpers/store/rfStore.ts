import { Dispatch, SetStateAction } from "react";
import {Node, Edge} from 'react-flow-renderer';
import {Action, action} from 'easy-peasy';


export interface RfStateModel {
    setNodes: Dispatch<SetStateAction<Node<any>[]>> | null,
    setEdges: Dispatch<SetStateAction<Edge<any>[]>> | null,
    initNodeSetFunction: Action<RfStateModel,  Dispatch<SetStateAction<Node<any>[]>>> 
    initEdgeSetFunction: Action<RfStateModel,  Dispatch<SetStateAction<Edge<any>[]>>> 
}

export const rfstateStore:RfStateModel = {
    setNodes: null,
    setEdges: null,
    initEdgeSetFunction: action((state, payload) => {
        state.setEdges = payload;
    }),
    initNodeSetFunction: action((state, payload) => {
        state.setNodes = payload;
    }),
} 