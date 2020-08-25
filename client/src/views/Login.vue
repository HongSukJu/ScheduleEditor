<template>
    <div class="login flex-column">
        <button @click="login">Login with Github</button>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            this.$store.dispatch("auth/login");
        }
    }
};
</script>

<style scoped>
.login {
    height: 100%;
    align-items: center;
    justify-content: center;
}
</style>
