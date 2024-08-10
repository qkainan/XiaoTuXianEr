import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout.js'

export const useCounterStore = defineStore('counter', () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const categoryList =  ref([])

  const getCategory = async () => {
    const  res = await getCategoryAPI();
    categoryList.value = res.result;
  }

  return { categoryList, getCategory }
})