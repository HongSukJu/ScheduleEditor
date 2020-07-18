<template>
    <div class="home full-height flex-column">
        <Appbar />
        <div class="flex-row flex-grow">
            <Sidebar />
            <Calendar />
        </div>
    </div>
</template>

<script>
import Appbar from "@/components/Appbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Calendar from "@/components/Calendar.vue";

export default {
    components: {
        Appbar,
        Sidebar,
        Calendar
    }
};
</script>

<style scoped></style>
