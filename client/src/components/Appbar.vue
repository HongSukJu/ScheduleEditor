<template>
    <div class="appbar flex">
        <div class="appbar__title flex">
            <h3>Schedule</h3>
            <h1>Editor</h1>
        </div>

        <div class="spacer"></div>

        <div class="appbar__profile">
            <img
                class="appbar__profile__img"
                :src="this.$store.state.profile.avatar_url"
                width="50px"
                height="50px"
                @click="showProfileBox = true"
            />
            <transition name="fade">
                <div class="appbar__profile-box flex" v-show="showProfileBox">
                    <img
                        class="appbar__profile-box__img"
                        :src="this.$store.state.profile.avatar_url"
                        width="80px"
                        height="80px"
                    />
                    <div class="appbar__profile-box__content flex-column">
                        <div class="appbar__profile-box__content__name">
                            {{ this.$store.state.profile.name }}
                        </div>
                        <div class="appbar__profile-box__content__email">
                            {{ this.$store.state.profile.email }}
                        </div>
                        <button
                            class="appbar__profile-box__content__logout-btn"
                            @click="logout"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </transition>

            <transition name="fade">
                <div
                    class="global-mask"
                    @click="showProfileBox = false"
                    v-show="showProfileBox"
                ></div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        showProfileBox: false
    }),
    methods: {
        logout() {
            this.$store.dispatch("auth/logout").then(() => {
                this.$router.push("/login");
            })
        }
    }
};
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
    &__profile {
        &__img {
            border-radius: 50%;
        }
        &-box {
            position: absolute;
            right: 15px;
            z-index: 101;
            padding: 20px 40px 20px 20px;
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                0 10px 10px rgba(0, 0, 0, 0.22);
            background-color: white;
            &__img {
                border-radius: 50%;
                margin-right: 30px;
            }
            &__content {
                justify-content: center;
                &__name {
                    font-size: 18px;
                    font-weight: bold;
                }
                &__email {
                    font-size: 13px;
                    color: gray;
                }
                &__logout-btn {
                    margin-top: 10px;
                    align-self: flex-start;
                    background-color: dodgerblue;
                    color: white;
                    padding: 4px 8px;
                }
            }
        }
    }
}

.global-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: gray;
    opacity: 0.1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
