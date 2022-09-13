import {action, Action, } from 'easy-peasy';

export interface User {
    username: string;
    email: string;
}

export interface UserModel {
    user: User | null;
    setUser: Action<UserModel, User>
}

export const userStore: UserModel = {
    user: null,
    setUser: action((state, payload) => {
        state.user = payload
    })
}
