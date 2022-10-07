<template>
  <div class="card-column">
    <DragonCard
      v-for="dragon in dragons"
      :key="(dragon.id as string)"
      :dragon="dragon"
    />
  </div>
</template>

<script setup lang="ts">
import DragonCard from './DragonCard.vue';
import { Dragon } from 'src/types';

const props = defineProps<{
  dragons?: Array<Dragon>;
}>();
const { dragons } = $(props);
</script>
