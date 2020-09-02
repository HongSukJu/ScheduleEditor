<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item title" href="/">
                Schedule Editor
            </a>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <button
                    class="button is-danger has-text-weight-semibold"
                    @click="logoutAndRouteLoginPage"
                >
                    Logout
                </button>
            </div>
            <figure class="image is-64x64 px-2 py-2">
                <img class="is-rounded" :src="state.avatar_url" />
            </figure>
            <div class="flex-column justify-center ml-2 mr-3">
                <span class="title-6 has-text-weight-semibold">
                    {{ state.name }}
                </span>
                <span class="subtitle-6 has-text-grey">
                    {{ state.email }}
                </span>
            </div>
        </div>
    </nav>
</template>

<script>
import { useState, useActions, useRouter } from "@u3u/vue-hooks";
import { reactive } from "@vue/composition-api";

export default {
    setup() {
        const { router } = useRouter();

        const state = reactive({
            ...useState("profile", ["name", "email", "avatar_url"])
        });

        const actions = {
            ...useActions("auth", ["logout"])
        };

        const logoutAndRouteLoginPage = () => {
            actions.logout().then(() => {
                router.push("/login");
            });
        };

        return {
            state,
            ...actions,
            logoutAndRouteLoginPage
        };
    }
};
</script>
