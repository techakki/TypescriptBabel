declare module "state_management/reducers/index" {
    export default function reducer(state: any[] | undefined, action: {
        type: string;
    }): any[];
}
declare module "state_management/constants" {
    export const SIGN_UP: string;
    export const SIGN_UP_SUCCESS: string;
    export const SIGN_UP_FAIL: string;
}
declare module "state_management/actions/index" {
    type signUpData = {
        email: string;
        password: string;
    };
    type SignUpAction = {
        type: string;
        payload: signUpData;
    };
    type SignUpSuccessAction = {
        type: string;
        token: string;
    };
    type SignUpFailedAction = {
        type: string;
    };
    export const signUp: (payload: signUpData) => SignUpAction;
    export const signUpSuccess: (token: string) => SignUpSuccessAction;
    export const signUpFailed: () => SignUpFailedAction;
    const _default: {
        signUp: (payload: signUpData) => SignUpAction;
        signUpSuccess: (token: string) => SignUpSuccessAction;
        signUpFailed: () => SignUpFailedAction;
    };
    export default _default;
}
declare module "API/sign_up" {
    type signUpData = {
        email: string;
        password: string;
    };
    export const signUp: (payload: signUpData) => Promise<string>;
    export const dummyRequest: (token: string) => Promise<void>;
    const _default_1: {
        signUp: (payload: signUpData) => Promise<string>;
        dummyRequest: (token: string) => Promise<void>;
    };
    export default _default_1;
}
declare module "state_management/middlewares/redux_saga/index" {
    export default function rootSaga(): {};
}
declare module "index" {
    export { default as reducer } from "state_management/reducers/index";
    export { default as actions } from "state_management/actions/index";
    export { default as rootSaga } from "state_management/middlewares/redux_saga/index";
    export { default as signUpAPI } from "API/sign_up";
}
