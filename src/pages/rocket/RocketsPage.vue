<template>
  <q-page padding>
    <q-infinite-scroll @load="onLoad">
      <rocket-deck :rockets="rockets" />
    </q-infinite-scroll>
    <Teleport to="#layout-navbox">
      <RocketsNavbox />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue';
import { Rocket, GetRocketsDocument } from 'src/types';
import RocketDeck from 'components/rocket/RocketDeck.vue';
import RocketsNavbox from './RocketsNavbox.vue';

let offset = $ref(0);
const limit = 10;
const result = await useQuery({
  query: GetRocketsDocument,
  variables: { offset: $$(offset), limit },
});
//const data = result.data;
let rockets: Array<Rocket> = $ref([]);

function onLoad(index: number, done: CallableFunction) {
  setTimeout(() => {
    const { data } = result.executeQuery({
      variables: { offset: $$(offset), limit },
    });
    const data_rockets = data.value?.rockets as [];
    for (let node of data_rockets) {
      rockets.push(node as Rocket);
    }
    offset += limit;
    done(data_rockets.length < limit);
  });
}
</script>
