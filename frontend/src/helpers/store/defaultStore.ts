import { Action, action } from "easy-peasy";
import { ElementNames, Bot, DrawerState, NodeData } from "helpers/types";

export interface DefalutStoreModel {
    loading: boolean;
    setLoading: Action<DefalutStoreModel, boolean>;
    drawerState: DrawerState;
    setDrawerState: Action<DefalutStoreModel, DrawerState>;
    bots: Bot[];
    setBots: Action<DefalutStoreModel, Bot[]>;
    nodeDatas: NodeData[];
    setNodeDatas: Action<DefalutStoreModel, NodeData[]>;
    setData: Action<DefalutStoreModel, NodeData>;
    updateData: Action<DefalutStoreModel, NodeData>;
    deleteDatas: Action<DefalutStoreModel, Array<string>>;
}

export const defaultStore: DefalutStoreModel = {
    loading: false,
    setLoading: action((state, payload) => {
        state.loading = payload;
    }),
    drawerState: {
        isOpen: false,
        elementName: ElementNames.statusChange,
        nodeId: null,
    },
    setDrawerState: action((state, payload) => {
        state.drawerState = payload;
    }),
    bots: [],
    setBots: action((state, payload) => {
        state.bots = payload;
    }),
    nodeDatas: [],
    setNodeDatas: action((state, payload) => {
        state.nodeDatas = payload;
    }),
    setData: action((state, payload) => {
        // this it to push datas only
        state.nodeDatas.push(payload);
    }),
    updateData: action((state, payload) => {
        const newDatas = state.nodeDatas.reduce((result, current) => {
            if (current.nodeId === payload.nodeId) {
                current.data = payload.data;
            }
            result.push(current);
            return result;
        }, [] as NodeData[]);
    }),
    deleteDatas: action((state, payload) => {
        const newDatas = state.nodeDatas.reduce((result, current) => {
            if (!payload.includes(current.nodeId)) result.push(current);
            return result;
        }, [] as NodeData[]);
        state.nodeDatas = newDatas;
    }),
};
