export default {
    namespaced: true,
    state: {
        _id: "",
        name: "",
        email: "",
        avatar_url: ""
    },
    mutations: {
        setProfile(state, { name, email, avatar_url }) {
            state.name = name;
            state.email = email;
            state.avatar_url = avatar_url;
        },
        setId(state, { _id }) {
            state._id = _id;
        }
    },
    actions: {
        getProfile({ commit, dispatch, rootState }) {
            rootState.axios
                .get(
                    rootState.server +
                        "auth/github/user?access_token=" +
                        rootState.Vue.$cookies.get("access_token")
                )
                .then(res => {
                    const { name, email, avatar_url } = res.data;
                    commit("setProfile", { name, email, avatar_url });
                    dispatch("sendProfile");
                });
        },
        sendProfile({ commit, state, rootState }) {
            const { name, email, avatar_url } = state;

            rootState.axios
                .post(rootState.server + "db/user/", {
                    name,
                    email,
                    avatar_url
                })
                .then(res => {
                    commit("setId", { _id: res.data.user._id });
                });
        }
    }
};
