<template>
  <q-page padding>
    <q-infinite-scroll @load="onLoad">
      <capsule-deck :capsules="capsules" />
    </q-infinite-scroll>
    <Teleport to="#layout-navbox">
      <CapsulesNavbox />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue';
import { Capsule, GetCapsulesDocument } from 'src/types';
import CapsuleDeck from 'components/capsule/CapsuleDeck.vue';
import CapsulesNavbox from './CapsulesNavbox.vue';

let offset = $ref(0);
const limit = 10;
const result = await useQuery({
  query: GetCapsulesDocument,
  variables: { offset: $$(offset), limit },
});
let capsules: Array<Capsule> = $ref([]);

function onLoad(index: number, done: CallableFunction) {
  setTimeout(() => {
    const { data } = result.executeQuery({
      variables: { offset: $$(offset), limit },
    });
    const data_capsules = data.value?.capsules as [];
    for (let node of data_capsules) {
      capsules.push(node as Capsule);
    }
    offset += limit;
    done(data_capsules.length < limit);
  });
}
</script>
