<template>
  <q-page padding>
    <q-infinite-scroll @load="onLoad">
      <dragon-deck :dragons="dragons" />
    </q-infinite-scroll>
    <Teleport to="#layout-navbox">
      <DragonsNavbox />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useQuery } from '@urql/vue';
import { Dragon, GetDragonsDocument } from 'src/types';
import DragonDeck from 'components/dragon/DragonDeck.vue';
import DragonsNavbox from './DragonsNavbox.vue';

let offset = $ref(0);
const limit = 10;
const result = await useQuery({
  query: GetDragonsDocument,
  variables: { offset: $$(offset), limit },
});

let dragons: Array<Dragon> = $ref([]);

function onLoad(index: number, done: CallableFunction) {
  setTimeout(() => {
    const { data } = result.executeQuery({
      variables: { offset: $$(offset), limit },
    });
    const data_dragons = data.value?.dragons as [];
    for (let node of data_dragons) {
      dragons.push(node as Dragon);
    }
    offset += limit;
    done(data_dragons.length < limit);
  });
}
</script>
