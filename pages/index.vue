<script setup lang="ts">
import data from '../data.json'

type Collectible = typeof data[0]

const modalVisible = ref(false)
const selectedCollectible = ref<Collectible | null>(null)
</script>

<template>
  <div
    grid="~ gap-2 sm:gap-4 lg:cols-20 md:cols-10 cols-5"
  >
    <button
      v-for="item in data"
      :key="item.id"
      flex="~ items-center justify-center"
      @click="() => {
        modalVisible = true
        selectedCollectible = item
      }"
    >
      <div
        class="collectibles"
        :style="{
          backgroundPosition: item.offset,
        }"
      />
    </button>

    <DetailsModal v-model="modalVisible">
      <div
        class="collectibles"
        :style="{
          backgroundPosition: selectedCollectible?.offset,
        }"
      />
      <p text-lg text-black font-bold>
        {{ selectedCollectible?.title }}
      </p>
      <span>
        {{ selectedCollectible?.effect }}
      </span>
    </DetailsModal>
  </div>
</template>

<style scoped lang="scss">
.collectibles {
  image-rendering: pixelated;
  width: 32px;
  height: 32px;
  transform: scale(1.5);
  background-image: url('/Collectibles_sprite.png');
}
</style>
