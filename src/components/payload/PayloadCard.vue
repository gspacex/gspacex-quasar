<template>
  <q-card>
    <q-card-section>
      <router-link class="text-h6" :to="`/payloads/${name}`">{{
        name
      }}</router-link>
    </q-card-section>
    <q-card-section>
      <PayloadTable :payload="payload" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import PayloadTable from './PayloadTable.vue';
import { Payload } from 'src/types';
const props = defineProps<{
  payload: Payload;
}>();
const { payload } = $(props);
const name = payload?.id;
</script>
