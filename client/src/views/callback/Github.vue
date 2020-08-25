<template>
    <Loading />
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
    components: {
        Loading
    },
    created() {
        this.$store.dispatch("auth/loginCallback", this.$route.query.code);
        setTimeout(() => {
            this.$router.push("/");
        }, 3000);
    }
};
</script>

<style></style>
