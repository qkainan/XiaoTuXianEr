<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <LayoutNav></LayoutNav>
  <RouterView></RouterView>
  <layout-header></layout-header>
  <layout-footer></layout-footer>

</template>