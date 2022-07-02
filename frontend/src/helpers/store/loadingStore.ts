import {Action, action} from 'easy-peasy';


export interface LoadingModel {
    loading: boolean;
    setLoading: Action<LoadingModel, boolean>;
}

export const loadingStore:LoadingModel = {
    loading: false,
    setLoading: action((state, payload) => {
        state.loading = payload;
    })
} 