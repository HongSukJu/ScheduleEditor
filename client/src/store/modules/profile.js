export default {
    namespaced: true,
    state: {
        id: "",
        name: "",
        email: "",
        avatar_url: ""
    },
    actions: {
        getProfile({ state, rootState }) {
            rootState.axios
                .get(
                    rootState.server +
                        "auth/github/user?access_token=" +
                        rootState.Vue.$cookies.get("access_token")
                )
                .then(res => {
                    const { id, name, email, avatar_url } = res.data;
                    state.id = id;
                    state.name = name;
                    state.email = email;
                    state.avatar_url = avatar_url;
                });
            console.log(state);
        }
    }
};
