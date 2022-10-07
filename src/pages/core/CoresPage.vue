<template>
  <q-page padding>
    <q-infinite-scroll @load="onLoad">
      <core-deck :cores="cores" />
    </q-infinite-scroll>
    <Teleport to="#layout-navbox">
      <CoresNavbox />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue';
import { Core, GetCoresDocument } from 'src/types';
import CoreDeck from 'components/core/CoreDeck.vue';
import CoresNavbox from './CoresNavbox.vue';

let offset = $ref(0);
const limit = 10;
const result = await useQuery({
  query: GetCoresDocument,
  variables: { offset: $$(offset), limit },
});
let cores: Array<Core> = $ref([]);

function onLoad(index: number, done: CallableFunction) {
  setTimeout(() => {
    const { data } = result.executeQuery({
      variables: { offset: $$(offset), limit },
    });
    const data_cores = data.value?.cores as [];
    for (let node of data_cores) {
      cores.push(node as Core);
    }
    offset += limit;
    done(data_cores.length < limit);
  });
}
</script>
