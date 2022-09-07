import { createStore, createTypedHooks } from 'easy-peasy';
import {UserModel, userStore} from './userStore';
import {DefalutStoreModel, defaultStore} from './defaultStore';
import {RfStateModel, rfstateStore} from './rfStore'


export interface StoreModel {
    userStore: UserModel;
    defaultStore: DefalutStoreModel;
    rfstateStore: RfStateModel; 
}
export const model: StoreModel = {
    userStore,
    defaultStore,
    rfstateStore,
}

const typedHook = createTypedHooks<StoreModel>();

export const useActions = typedHook.useStoreActions;
export const useDispatch = typedHook.useStoreDispatch;
export const useStore = typedHook.useStore;
export const useStoreState = typedHook.useStoreState;

const store = createStore<StoreModel>(model)

export default store;