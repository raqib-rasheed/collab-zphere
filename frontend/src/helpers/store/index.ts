import { createStore, createTypedHooks } from 'easy-peasy';
import {UserModel, userStore} from './userStore';
import {LoadingModel, loadingStore} from './loadingStore';


export interface StoreModel {
    userStore: UserModel;
    loadingStore: LoadingModel;
}
export const model: StoreModel = {
    userStore,
    loadingStore,
}

const typedHook = createTypedHooks<StoreModel>();

export const useActions = typedHook.useStoreActions;
export const useDispatch = typedHook.useStoreDispatch;
export const useStore = typedHook.useStore;
export const useStoreState = typedHook.useStoreState;

const store = createStore<StoreModel>(model)

export default store;