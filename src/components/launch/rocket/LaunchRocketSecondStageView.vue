<template>
  <h1>Second Stage</h1>
  <h2>Payloads</h2>
  <div class="card-column">
    <PayloadCard
      v-for="(payload, index) in payloads"
      :key="index"
      :payload="payload"
    />
  </div>
</template>

<script setup lang="ts">
import { LaunchRocketSecondStage, Payload } from 'src/types';
import PayloadCard from 'components/payload/PayloadCard.vue';

const props = defineProps<{
  stage: LaunchRocketSecondStage;
}>();
const { stage } = $(props);
const payloads = stage.payloads as Array<Payload>;
</script>
