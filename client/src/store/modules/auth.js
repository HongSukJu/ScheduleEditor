export default {
    namespaced: true,
    actions: {
        login({ rootState }) {
            rootState.axios.get(rootState.server + "auth/github").then(res => {
                const { url } = res.data;

                window.location = url;
            });
        },
        loginCallback({ rootState }, code) {
            rootState.axios.get(
                rootState.server + "auth/github/callback?code=" + code,
                {
                    withCredentials: true
                }
            );
        },
        logout({ rootState }) {
            rootState.Vue.$cookies.remove("access_token");
        }
    }
};
