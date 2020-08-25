<template>
    <div class="appbar flex">
        <div class="appbar__title flex">
            <h3>Schedule</h3>
            <h1>Editor</h1>
        </div>

        <div class="spacer"></div>

        <img
            class="appbar__logo"
            :src="this.$store.state.profile.avatar_url"
            width="50px"
            height="50px"
        />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.appbar {
    border-bottom: 1px solid #ececec;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    &__title {
        h3 {
            align-self: flex-end;
        }
    }
    &__logo {
        border-radius: 50%;
    }
}
</style>
