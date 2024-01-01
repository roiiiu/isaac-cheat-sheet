<script setup lang="ts">
const modelValue = defineModel<boolean>({ required: true })
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 z-99 flex items-center justify-center px4">
      <div class="absolute inset-0 bg-black opacity-50" @click="modelValue = false" />
      <div
        class="bg-base text-wheat relative z-99 rounded p-4"
        min-w="36"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

</style>
