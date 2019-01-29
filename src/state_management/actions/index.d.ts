declare type signUpData = {
    email: string;
    password: string;
};
declare type SignUpAction = {
    type: string;
    payload: signUpData;
};
declare type SignUpSuccessAction = {
    type: string;
    token: string;
};
declare type SignUpFailedAction = {
    type: string;
};
export declare const signUp: (payload: signUpData) => SignUpAction;
export declare const signUpSuccess: (token: string) => SignUpSuccessAction;
export declare const signUpFailed: () => SignUpFailedAction;
declare const _default: {
    signUp: (payload: signUpData) => SignUpAction;
    signUpSuccess: (token: string) => SignUpSuccessAction;
    signUpFailed: () => SignUpFailedAction;
};
export default _default;
