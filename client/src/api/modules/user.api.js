import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndPoint = {
    signin: "user/signin",
    signup: "user/signup",
    getInfo: "user/info",
    passwordUpdate: "user/update-password",
};

const userApi = {
    signin: async ({ username, password }) => {
        try {
            const response = await publicClient.post(
                userEndPoint.signin,
                { username, password}
            );
            return { response }
        } catch {err} { return { err };}
    },
    signup: async ({ username, password, confirmPassword, displayName}) => {
        try {
            const response = await publicClient.post(
                userEndPoint.signup,
                { username, password, confirmPassword, displayName}
            );
            return { response }
        } catch {err} { return { err };}
    },
    getInfo: async () => {
        try {
            const response = await privateClient.get(userEndPoint.getInfo);
            return { response }
        } catch {err} { return { err };}
    },
    passwordUpdate: async ({ password, newPassword, confirmPassword}) => {
        try {
            const response = await privateClient.put(
                userEndPoint.signup,
                {assword, newPassword, confirmPassword}
            );
        } catch {err} { return { err };}
    },

};
export default userApi;