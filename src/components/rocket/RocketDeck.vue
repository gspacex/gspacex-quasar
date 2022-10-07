<template>
  <div class="card-column">
    <RocketCard
      v-for="rocket in rockets"
      :key="(rocket.id as string)"
      :rocket="rocket"
    />
  </div>
</template>

<script setup lang="ts">
import RocketCard from './RocketCard.vue';
import { Rocket } from 'src/types';

const props = defineProps<{
  rockets?: Array<Rocket>;
}>();
const { rockets } = $(props);
</script>
