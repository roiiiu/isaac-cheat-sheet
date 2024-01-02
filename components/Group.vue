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
    :class="{ 'text-op60': !expanded, 'sticky': expanded }"
    flex="~ items-center justify-between"
    sticky top-0 w-full p-4 font-bold
    @click="expanded = !expanded"
  >
    <span>{{ title }}</span>
    <div i-carbon-chevron-right transition-transform-200 :class="[expanded ? 'rotate-90' : 'rotate-0']" />
  </button>

  <div
    v-show="expanded"
    px-2 py-4
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
        :class="title"
        m-3
        scale-200
        :style="{
          backgroundPosition: item.offset,
        }"
      />
    </button>
  </div>
</template>
