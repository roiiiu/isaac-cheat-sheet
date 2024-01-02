import { acceptHMRUpdate, defineStore } from 'pinia'

export type SortMethod = 'id' | 'title' | 'titleEn' | 'color'
export type InputBarPos = 'bottom' | 'top'

export const useSettingStore = defineStore('settings', () => {
  const sortMethod = ref<SortMethod>('id')
  const inputBarPos = ref<InputBarPos>('bottom')

  function setSortMethod(method: SortMethod) {
    sortMethod.value = method
  }

  function setInputBarPos(pos: InputBarPos) {
    inputBarPos.value = pos
  }

  return {
    sortMethod,
    inputBarPos,
    setSortMethod,
    setInputBarPos,
  }
}, {
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
