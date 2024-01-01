<script setup lang="ts">
const emit = defineEmits<{
  search: [value: string]
}>()
const inputRef = ref<HTMLInputElement | null>(null)
const input = ref('')
const settingModalVisible = ref(false)

watchDebounced(input, () => {
  emit('search', input.value)
})
</script>

<template>
  <Teleport to="body">
    <div
      translate-x="-1/2"
      left="1/2"
      flex="~ items-center" bg="base" outline="~ 2 gray5/80" fixed bottom-0 z-2 mb-2 of-visible rounded-full px-2 py-1 shadow="~ inner black"
    >
      <div i-carbon-search text="gray3/60" mr-2 />
      <input
        ref="inputRef"
        v-model="input"
        placeholder="中，英文名，描述"
        type="search"
        bg-transparent
        text-white
        outline-none
        @keyup.enter="inputRef!.blur()"
      >
      <button
        text=" gray3/80"
        @click="settingModalVisible = !settingModalVisible"
      >
        <div i-carbon-settings />
      </button>

      <SettingModal v-model="settingModalVisible" />
    </div>
  </Teleport>
</template>

<style scoped>

</style>
