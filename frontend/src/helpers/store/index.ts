import { createStore, createTypedHooks } from 'easy-peasy';
import {UserModel, userStore} from './userStore';
import {LoadingModel, loadingStore} from './loadingStore';
import {RfStateModel, rfstateStore} from './rfStore'


export interface StoreModel {
    userStore: UserModel;
    loadingStore: LoadingModel;
    rfstateStore: RfStateModel; 
}
export const model: StoreModel = {
    userStore,
    loadingStore,
    rfstateStore,
}

const typedHook = createTypedHooks<StoreModel>();

export const useActions = typedHook.useStoreActions;
export const useDispatch = typedHook.useStoreDispatch;
export const useStore = typedHook.useStore;
export const useStoreState = typedHook.useStoreState;

const store = createStore<StoreModel>(model)

export default store;