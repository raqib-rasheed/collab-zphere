import { Action, action } from "easy-peasy";
import { ElementNames } from "helpers/types";

interface drawerState {
    isOpen: boolean;
    elementName: ElementNames | null;
}

export interface DefalutStoreModel {
    loading: boolean;
    setLoading: Action<DefalutStoreModel, boolean>;
    drawerState: drawerState;
    setDrawerState: Action<DefalutStoreModel, drawerState>;
}

export const defaultStore: DefalutStoreModel = {
    loading: false,
    setLoading: action((state, payload) => {
        state.loading = payload;
    }),
    drawerState: {
        isOpen: false,
        elementName: ElementNames.statusChange,
    },
    setDrawerState: action((state, payload) => {
        state.drawerState = payload;
    }),
};
