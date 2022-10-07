<template>
  <q-carousel
    v-if="images && images.length > 0"
    animated
    v-model="slide"
    v-model:fullscreen="fullscreen"
    arrows
    navigation
  >
    <q-carousel-slide
      v-for="(image, index) in images"
      :name="index"
      :key="index"
      :img-src="image"
    />
    <template v-slot:control>
      <q-carousel-control position="bottom-right" :offset="[18, 18]">
        <q-btn
          push
          round
          dense
          color="white"
          text-color="primary"
          :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="fullscreen = !fullscreen"
        />
      </q-carousel-control>
    </template>
  </q-carousel>

  <div>
    <q-card-section>
      <h1>{{ dragon?.name }}</h1>
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ dragon?.description }}
    </q-card-section>
    <q-card-section>
      <DragonTable :dragon="dragon" />
    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { Dragon } from 'src/types';
import DragonTable from './DragonTable.vue';

const props = defineProps<{
  dragon: Dragon;
}>();
const { dragon } = $(props);
const images = dragon.images;
const slide = $ref(0);
const fullscreen = $ref(false);
</script>
