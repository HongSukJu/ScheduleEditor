<template>
    <div class="full-height flex-column align-center justify-center">
        <button class="button is-black" @click="login">
            Login with Github
        </button>
    </div>
</template>

<script>
import { useActions } from "@u3u/vue-hooks";

export default {
    setup() {
        const actions = {
            ...useActions("auth", ["login"])
        };

        return {
            ...actions
        };
    }
};
</script>
