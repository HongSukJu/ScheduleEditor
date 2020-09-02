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

export default {
    components: {
        Navbar,
        Sidebar,
        Calendar
    }
};
</script>

<style scoped></style>
