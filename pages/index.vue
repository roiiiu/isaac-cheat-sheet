<script setup lang="ts">
import data from '../data.json'
import trinkets from '../data_trinkets.json'
import cards from '../data_card.json'

type Item = typeof data[0]

const modalVisible = ref(false)
const selected = ref<Item | null>(null)
const query = ref('')
const input = ref('')
const settingStore = useSettingStore()
const settingModalVisible = ref(false)

const filteredCollectibles = computed(() => {
  return data.filter(filterFunc).sort(sortFunc)
})

const filteredTrinkets = computed(() => {
  return trinkets.filter(filterFunc).sort(sortFunc)
})

const filteredCards = computed(() => {
  return cards.filter(filterFunc).sort(sortFunc)
})

function filterFunc(item: Item) {
  if (!query.value)
    return true
  return item.title.toLowerCase().includes(query.value.toLowerCase()) || item.titleEn.toLowerCase().includes(query.value.toLowerCase()) || item.quoteEn.toLowerCase().includes(query.value.toLowerCase())
}

function sortFunc(a: Item, b: Item) {
  if (settingStore.sortMethod === 'id')
    return Number.parseInt(a.id) - Number.parseInt(b.id)
  else if (settingStore.sortMethod === 'title')
    return a.title.localeCompare(b.title)
  else
    return a.titleEn.localeCompare(b.titleEn)
}

function search(input: string) {
  query.value = input
}

function toggleDetailsModal(item: any) {
  modalVisible.value = true
  selected.value = item
}

watchDebounced(input, () => {
  search(input.value)
}, {
  debounce: 300,
})
</script>

<template>
  <div
    v-if="settingStore.inputBarPos === 'top'"
    flex="~ items-center gap-2"
    relative of-visible px-4
    border="b wheat/8"
  >
    <div i-ph-magnifying-glass-duotone text="gray3/60" mr-2 />
    <input
      v-model="input"
      type="text" placeholder="中、英文名，描述" flex-1 bg-transparent py-4 text-wheat outline-none
    >
    <button
      id="settingBtn"
      text=" gray3 op80 lg"
      hover="text-op-100"
      @click="settingModalVisible = !settingModalVisible"
    >
      <div i-ph-gear-duotone />
    </button>
    <SettingModal v-model="settingModalVisible" />
  </div>

  <Group :data="filteredCollectibles" title="道具" @active="toggleDetailsModal" />
  <Group :data="filteredTrinkets" title="饰品" @active="toggleDetailsModal" />
  <Group :data="filteredCards" title="卡牌" @active="toggleDetailsModal" />

  <DetailsModal v-model="modalVisible">
    <div
      mb-2 scale-150
      :class="selected?.type"
      :style="{
        backgroundPosition: selected?.offset,
      }"
    />
    <div flex="~ items-center gap-2">
      <p text-lg font-bold>
        {{ selected?.title }}
      </p>
      <div v-if="selected?.charge" flex="~ items-center gap-1" border="~ #02F917" rounded px-1 py-0 text-xs bg="#02F917/20">
        <div i-ph-battery-high-fill text-green />
        <span>{{ selected.charge.startsWith('0') ? '0' : selected.charge }}</span>
      </div>
    </div>
    <p text-sm text="gray4/80">
      {{ selected?.titleEn }}
    </p>
    <span text-sm>
      {{ selected?.effect }}
    </span>
  </DetailsModal>

  <InputBar v-if="settingStore.inputBarPos === 'bottom'" @search="search" />
</template>
