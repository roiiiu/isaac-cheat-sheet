<script setup lang="ts">
defineProps<{
  data: any
  title: string
}>()

defineEmits<{
  active: [item: any]
}>()

const expanded = ref(true)
</script>

<template>
  <button
    text="wheat xl"
    :class="{ 'text-op60': !expanded }"
    bg="base" flex="~ justify-between" sticky top-0 z-1 w-full py-4 font-bold transition-200 @click="expanded = !expanded"
  >
    <span>{{ title }}</span>
    <div i-carbon-chevron-right transition-transform-200 :class="[expanded ? 'rotate-90' : 'rotate-0']" />
  </button>
  <div
    v-show="expanded"
    grid="~  lg:cols-15 md:cols-10 cols-5"
  >
    <button
      v-for="item in data"
      :key="item.id"
      flex="~ items-center justify-center"
      hover="scale-120"
      transition-100
      @click="$emit('active', item)"
    >
      <div
        :class="title === '道具' ? 'collectibles' : 'trinkets'"
        m-3
        scale-200
        :style="{
          backgroundPosition: item.offset,
        }"
      />
    </button>
  </div>
</template>
