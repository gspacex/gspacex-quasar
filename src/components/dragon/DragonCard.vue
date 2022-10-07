<template>
  <q-card>
    <q-card-section>
      <router-link :to="`/dragons/${dragon?.id}`">
        <q-img
          class="rounded-borders"
          style="max-height: 256px"
          v-if="imgSrc"
          :src="imgSrc"
          :ratio="16 / 9"
        />
        <h2>{{ dragon?.name }}</h2>
      </router-link>
      <p>{{ dragon?.description }}</p>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Maybe, Dragon } from 'src/types';
const props = defineProps<{
  dragon: Maybe<Dragon>;
}>();
const { dragon } = $(props);
const imgSrc = dragon?.images?.at(0) as string;
</script>
