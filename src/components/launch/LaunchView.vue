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
    <q-list dense padding>
      <q-item>
        <q-item-section avatar>
          <q-icon name="o_event" size="xs" />
        </q-item-section>
        <q-item-section>
          <div class="text-subtitle2">{{ date }}</div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon name="o_location_on" size="xs" />
        </q-item-section>
        <q-item-section>
          <div class="text-subtitle2">{{ site_name }}</div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-icon name="o_rocket" size="xs" />
        </q-item-section>
        <q-item-section>
          <div class="text-subtitle2">{{ rocket_name }}</div>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="q-py-md">
      {{ launch?.details }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Launch } from 'src/types';
const props = defineProps<{
  launch: Launch;
}>();
const { launch } = $(props);
const images = launch.links?.flickr?.original as Array<string>;
const slide = $ref(0);
const fullscreen = $ref(false);
const date = new Date(launch.date_utc).toString();
const site_name = launch.launchpad?.name;
const rocket_name = launch.rocket?.name;
</script>
