<template>
    <div class="login flex-column">
        <button @click="handleClick">Login with Github</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick: function() {
            this.$http
                .get(this.$store.state.serverAddress + "auth/github")
                .then(res => {
                    window.location.href = res.data.url;
                });
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
