<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <LayoutNav></LayoutNav>
  <layout-header></layout-header>
  <RouterView></RouterView>
  <layout-footer></layout-footer>
</template>