<template>
  <div class="card-column">
    <CapsuleCard
      v-for="capsule in capsules"
      :key="(capsule.id as string)"
      :capsule="capsule"
    />
  </div>
</template>

<script setup lang="ts">
import CapsuleCard from './CapsuleCard.vue';
import { Capsule } from 'src/types';

const props = defineProps<{
  capsules?: Array<Capsule>;
}>();
const { capsules } = $(props);
</script>
