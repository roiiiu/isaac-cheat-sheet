<script setup lang="ts">
const modelValue = defineModel<boolean>({ required: true })
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 z-99 flex items-center justify-center px4">
      <div class="absolute inset-0 bg-black opacity-60" @click="modelValue = false" />
      <div
        border="2 gray5/40"
        class="relative z-99 rounded bg-base p-4 text-wheat"
        min-w="36"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

</style>
