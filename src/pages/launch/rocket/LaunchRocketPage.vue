<template>
  <q-page>
    <RocketView :rocket="rocket" />
    <Teleport to="#layout-navbox">
      <LaunchRocketNavbox :launch="launch" />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Launch, Rocket } from 'src/types';
import { useQuery } from '@urql/vue';
import { GetLaunchRocketDocument } from 'src/types';
import RocketView from 'components/rocket/RocketView.vue';
import LaunchRocketNavbox from './LaunchRocketNavbox.vue';

const route = useRoute();

const id = route.params.id as string;

const { data } = await useQuery({
  query: GetLaunchRocketDocument,
  variables: { id },
});
const launch = data.value?.launch as Launch;
const rocket = launch?.rocket?.rocket as Rocket;
</script>
