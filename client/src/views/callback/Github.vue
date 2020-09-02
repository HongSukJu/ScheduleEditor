<template>
    <Loading />
</template>

<script>
import { useActions, useRouter } from "@u3u/vue-hooks";

import Loading from "@/components/Loading.vue";

export default {
    components: {
        Loading
    },
    setup() {
        const { router, route } = useRouter();
        const code = route.value.query.code;

        const actions = {
            ...useActions("auth", ["loginCallback"])
        };

        actions.loginCallback(code).then(() => {
            router.push("/");
        });

        return {
            ...actions
        };
    }
};
</script>

<style></style>
