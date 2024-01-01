<script setup lang="ts">
import data from '../data.json'
import trinkets from '../data_trinkets.json'
import cards from '../data_card.json'

type Item = typeof data[0]
const modalVisible = ref(false)
const selected = ref<Item | null>(null)
const query = ref('')

const filteredCollectibles = computed(() => {
  if (!query.value)
    return data
  return data.filter(filterFunc)
})

const filteredTrinkets = computed(() => {
  if (!query.value)
    return trinkets
  return trinkets.filter(filterFunc)
})

const filteredCards = computed(() => {
  if (!query.value)
    return cards
  return cards.filter(filterFunc)
})

function filterFunc(item: any) {
  return item.title.toLowerCase().includes(query.value.toLowerCase()) || item.titleEn.toLowerCase().includes(query.value.toLowerCase()) || item.quoteEn.toLowerCase().includes(query.value.toLowerCase())
}

function search(input: string) {
  query.value = input
}

function toggleDetailsModal(item: any) {
  modalVisible.value = true
  selected.value = item
}
</script>

<template>
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
        <div i-carbon-battery-full text-green />
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

  <InputBar @search="search" />
</template>
