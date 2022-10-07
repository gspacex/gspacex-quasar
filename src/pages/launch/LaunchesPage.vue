<template>
  <q-page padding>
    <q-infinite-scroll @load="onLoad">
      <launch-deck :launches="launches" />
    </q-infinite-scroll>
    <Teleport to="#layout-navbox">
      <LaunchesNavbox />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue';
import { Launch, GetLaunchesDocument } from 'src/types';
import LaunchDeck from 'components/launch/LaunchDeck.vue';
import LaunchesNavbox from './LaunchesNavbox.vue';

let offset = $ref(0);
const limit = 10;

const result = await useQuery({
  query: GetLaunchesDocument,
  variables: { offset: $$(offset), limit: 10 },
});
let launches: Array<Launch> = $ref([]);

function onLoad(index: number, done: CallableFunction) {
  setTimeout(() => {
    const { data } = $(
      result.executeQuery({
        variables: { offset: $$(offset), limit },
      })
    );
    const data_launches = data?.launches as [];
    if (data_launches) {
      for (let node of data_launches) {
        launches.push(node as Launch);
      }
    }
    offset = limit * index;
    done(data_launches.length < limit);
  });
}
</script>
