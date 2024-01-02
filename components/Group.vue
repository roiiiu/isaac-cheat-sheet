<script setup lang="ts">
defineProps<{
  data: any
  title: string
}>()

defineEmits<{
  active: [item: any]
}>()

const expanded = ref(true)
const settingStore = useSettingStore()
</script>

<template>
  <div>
    <button
      text="wheat xl"
      :class="[!expanded ? 'text-op60' : '', settingStore.inputBarPos === 'top' && !expanded && title === '道具' ? 'mt-12' : '', settingStore.inputBarPos === 'top' ? 'top-12' : 'top-0']"
      flex="~ items-center justify-between"
      sticky z-1 w-full bg-base p-4 font-bold @click="() => {
        expanded = !expanded
      }"
    >
      <span>{{ title }}</span>
      <div i-carbon-chevron-right transition-transform-200 :class="[expanded ? 'rotate-90' : 'rotate-0']" />
    </button>

    <div
      v-show="expanded"
      :class="[title === '道具' && settingStore.inputBarPos === 'top' ? 'pt-12' : '']"
      of-auto px-2 pb-2
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
          :class="item.type === '卡牌' && parseInt(item.id) < 40 && 31 < parseInt(item.id) ? 'runes' : title"
          m-3
          scale-200
          :style="{
            backgroundPosition: item.offset,
          }"
        />
      </button>
    </div>
  </div>
</template>
