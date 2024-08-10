/*
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

import { getCategoryAPI } from '@/stores/categoryStore.js'


export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()

  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData = res.result
  }

  onMounted(getCategory)

}*/
