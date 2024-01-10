import { acceptHMRUpdate, defineStore } from 'pinia'

export type SortMethod = 'id' | 'title' | 'titleEn' | 'color'
export type InputBarPos = 'bottom' | 'top'

export const useSettingStore = defineStore('settings', () => {
  const sortMethod = ref<SortMethod>('color')
  const inputBarPos = ref<InputBarPos>('bottom')
  const showBackToTop = ref<boolean>(true)

  function setSortMethod(method: SortMethod) {
    sortMethod.value = method
  }

  function setInputBarPos(pos: InputBarPos) {
    inputBarPos.value = pos
  }

  function toggleShowBackToTop() {
    showBackToTop.value = !showBackToTop.value
  }

  return {
    sortMethod,
    inputBarPos,
    setSortMethod,
    setInputBarPos,
    toggleShowBackToTop,
    showBackToTop,
  }
}, {
  persist: true,
})

// if (import.meta.hot)
//   import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
