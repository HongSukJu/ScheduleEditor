<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style>
@import url("assets/css/flex.css");
@import url("assets/css/feature.css");

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background-color: transparent;
    box-sizing: border-box;
}
html,
body,
#app {
    height: 100%;
}
* {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
*::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
i {
    vertical-align: super;
}
</style>
