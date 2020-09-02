export default {
    namespaced: true,
    state: {
        id: "",
        name: "",
        email: "",
        avatar_url: ""
    },
    mutations: {
        setProfile(state, { name, email, avatar_url }) {
            state.name = name;
            state.email = email;
            state.avatar_url = avatar_url;
        }
    },
    actions: {
        getProfile({ commit, rootState }) {
            rootState.axios
                .get(
                    rootState.server +
                        "auth/github/user?access_token=" +
                        rootState.Vue.$cookies.get("access_token")
                )
                .then(res => {
                    const { name, email, avatar_url } = res.data;
                    commit("setProfile", { name, email, avatar_url });
                });
        }
    }
};
