<template>
    <div class="full-height flex-column">
        <Navbar />
        <div class="flex flex-grow">
            <Sidebar />
            <Calendar />
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Calendar from "@/components/Calendar.vue";

import { useActions } from "@u3u/vue-hooks";

export default {
    components: {
        Navbar,
        Sidebar,
        Calendar
    },
    setup() {
        const actions = {
            ...useActions("auth", ["logout"]),
            ...useActions("profile", ["getProfile"])
        };

        actions.getProfile();

        return {};
    }
};
</script>

<style scoped></style>
