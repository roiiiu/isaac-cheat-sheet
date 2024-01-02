<script setup lang="ts">
useFavicon('/icon.webp')
</script>

<template>
  <main class="bg-base pb-12">
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

.符文,
.runes {
  image-rendering: pixelated;
  width: 32px;
  height: 32px;
  background-image: url('/Runes_sprite.png');
  background-size: 288px, 32px;
}
</style>
