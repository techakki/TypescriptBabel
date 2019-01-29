declare type signUpData = {
    email: string;
    password: string;
};
export declare const signUp: (payload: signUpData) => Promise<string>;
export declare const dummyRequest: (token: string) => Promise<void>;
declare const _default: {
    signUp: (payload: signUpData) => Promise<string>;
    dummyRequest: (token: string) => Promise<void>;
};
export default _default;
