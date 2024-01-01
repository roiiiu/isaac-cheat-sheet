import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSettingStore = defineStore('settings', () => {
  const sortMethod = ref('id')

  function setSortMethod(method: string) {
    sortMethod.value = method
  }

  return {
    sortMethod,
    setSortMethod,
  }
}, {
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
