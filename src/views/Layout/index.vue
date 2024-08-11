<script setup xmlns:style="http://www.w3.org/1999/xhtml">
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

import {useCategoryStore} from '@/stores/categoryStore.js'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore();

onMounted(() => {categoryStore.getCategory()})

</script>

<template>
  <layout-fixed></layout-fixed>
  <LayoutNav></LayoutNav>
  <layout-header></layout-header>
  <RouterView></RouterView>
  <layout-footer></layout-footer>
</template>