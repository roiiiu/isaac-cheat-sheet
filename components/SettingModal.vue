<script setup lang="ts">
const modelValue = defineModel<boolean>({ required: true })
const sortMethods: SortMethod[] = ['id', 'title', 'titleEn']
const inputPos: InputBarPos[] = ['bottom', 'top']
const settingStore = useSettingStore()
const elementRef = ref<HTMLDivElement | null>(null)

onClickOutside(elementRef, () => {
  modelValue.value = false
}, {
  ignore: ['#settingBtn'],
})
</script>

<template>
  <Transition>
    <div
      v-if="modelValue"
      ref="elementRef" :class="settingStore.inputBarPos === 'bottom' ? 'w-full top--19 left-0' : 'bottom--16 right-4 w-60'"
      border="2 gray5/80"
      transform-origin="bc"
      absolute z-2 rounded-md bg-back p-2 space-y-2
    >
      <div flex="~ items-center justify-between">
        <span text="gray sm">排序</span>
        <div flex="~ items-center justify-end ">
          <button
            v-for="method in sortMethods"
            :key="method"
            :disabled="method === 'color'"
            :class="settingStore.sortMethod === method ? 'text-white' : 'text-gray4/60'"
            px-2
            @click="() => {
              settingStore.setSortMethod(method)
            }"
          >
            <div v-if="method === 'title'" i-icon-park-outline-chinese />
            <div v-else-if="method === 'titleEn'" i-carbon-character-upper-case />
            <div v-else-if="method === 'color'" i-carbon-color-palette />
            <div v-else i-carbon-character-whole-number />
          </button>
        </div>
      </div>

      <div flex="~ items-center justify-between">
        <span text="gray sm">搜索框</span>
        <div flex="~ items-center justify-end ">
          <button
            v-for="pos in inputPos"
            :key="pos"
            :class="settingStore.inputBarPos === pos ? 'text-white' : 'text-gray4/60'"
            px-2
            @click="() => {
              settingStore.setInputBarPos(pos)
            }"
          >
            <div v-if="pos === 'bottom'" i-ph-align-bottom-simple />
            <div v-else-if="pos === 'top'" i-ph-align-top-simple />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
