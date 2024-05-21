<template>
    <div class="header__navbar row
    justify-content-between align-items-center" style="width: 450px">
        <!-- Component SearchMenu -->
        <search-menu></search-menu>
        <!-- Component SignupMenu -->
        <!-- <sign-up-menu></sign-up-menu> -->
        <component :is="components[menuComponent]"></component>
    </div>
</template>
<script setup>
import SearchMenu from './SearchMenu.vue';
import SignUpMenu from './SignUpMenu.vue';
import ProfileMenu from "./ProfileMenu.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
const menuComponent = ref("signup-menu");
const store = useStore();
const components = {
    'sign-up-menu': SignUpMenu,
    'profile-menu': ProfileMenu
}
const getToken = computed(() => {
    return store.state.auth.token;
});

if (!getToken.value) {
    menuComponent.value = "sign-up-menu";
} else {
    menuComponent.value = "profile-menu";
}

watch(getToken, (newValue, oldValue) => {
    if (!newValue) {
        menuComponent.value = "sign-up-menu";
    } else {
        menuComponent.value = "profile-menu";
    }
});
</script>