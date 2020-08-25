<template>
    <Loading />
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
    components: {
        Loading
    },
    created: function() {
        this.$store
            .dispatch("auth/loginCallback", this.$route.query.code)
            .then(() => {
                this.$router.push("/");
            });
    }
};
</script>

<style></style>
