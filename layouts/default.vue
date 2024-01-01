<script setup lang="ts">
useFavicon('/icon.webp')
</script>

<template>
  <main class="bg-base px-4 pb-12">
    <slot />
  </main>
</template>

<style lang="scss">
.道具,
.collectibles {
  image-rendering: pixelated;
  width: 32px;
  height: 32px;
  background-image: url('/Collectibles_sprite.png');
}

.饰品,
.trinkets {
  image-rendering: pixelated;
  width: 32px;
  height: 32px;
  background-image: url('/Trinket_sprite.png');
}

.卡牌,
.cards {
  image-rendering: pixelated;
  width: 32px;
  height: 32px;
  background-image: url('/Cards_sprite.png');
}
</style>
