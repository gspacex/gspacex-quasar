<template>
  <q-page>
    <RocketView :rocket="rocket" />
    <Teleport to="#layout-navbox">
      <RocketNavbox :rocket="rocket" />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Rocket } from 'src/types';
import { useQuery } from '@urql/vue';
import { GetRocketDocument } from 'src/types';
import RocketView from 'components/rocket/RocketView.vue';
import RocketNavbox from './RocketNavbox.vue';

const route = useRoute();

const id = route.params.id as string;

const { data } = await useQuery({
  query: GetRocketDocument,
  variables: { id },
});
const rocket = data.value?.rocket as Rocket;
</script>
