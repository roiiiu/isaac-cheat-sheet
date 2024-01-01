<script setup lang="ts">
const emit = defineEmits<{
  search: [value: string]
}>()
const inputRef = ref<HTMLInputElement | null>(null)
const input = ref('')
const settingModalVisible = ref(false)

watchDebounced(input, () => {
  emit('search', input.value)
}, {
  debounce: 300,
})
</script>

<template>
  <Teleport to="body">
    <div
      translate-x="-1/2"
      left="1/2"
      flex="~ items-center" bg="base" outline="~ 2 gray5/80" fixed bottom-0 z-2 mb-2 of-visible rounded-full pl-3 shadow="~ inner black"
    >
      <div i-ph-magnifying-glass-duotone text="gray3/60" mr-2 />
      <input
        ref="inputRef"
        v-model="input"
        placeholder="中，英文名，描述"
        appearance-none bg-transparent py-2 text-white outline-none
        @keyup.enter="inputRef!.blur()"
      >
      <button
        id="settingBtn"
        text=" gray3 op80 lg"
        hover="text-op-100"
        px-3
        @click="settingModalVisible = !settingModalVisible"
      >
        <div i-ph-gear-duotone />
      </button>

      <SettingModal v-model="settingModalVisible" />
    </div>
  </Teleport>
</template>

<style scoped>

</style>
