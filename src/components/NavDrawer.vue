<template>
  <q-drawer v-model="navDrawerOpen" class="drawer" side="left">
    <q-list
      style="float: left; border-right: 1px solid rgb(46, 46, 46); height: 100%"
    >
      <q-item to="/" :exact="true" v-ripple>
        <q-item-section>
          <q-icon name="o_home" size="xs" />
        </q-item-section>
      </q-item>

      <q-item to="/launches" v-ripple>
        <q-item-section>
          <q-icon name="o_rocket_launch" size="xs" />
        </q-item-section>
      </q-item>

      <q-item to="/rockets" v-ripple>
        <q-item-section>
          <q-icon name="o_rocket" size="xs" />
        </q-item-section>
      </q-item>

      <q-item to="/cores" v-ripple>
        <q-item-section>
          <q-icon name="o_hub" size="xs" />
        </q-item-section>
      </q-item>

      <q-item to="/dragons" v-ripple>
        <q-item-section>
          <q-icon name="las la-dragon" size="xs" />
        </q-item-section>
      </q-item>

      <q-item to="/capsules" v-ripple>
        <q-item-section>
          <q-icon name="las la-capsules" size="xs" />
        </q-item-section>
      </q-item>

      <!--
      <q-item to="/payloads" v-ripple>
        <q-item-section>
          <q-icon name="o_launch" size="xs" />
        </q-item-section>
      </q-item>

      <q-item to="/launchpads" v-ripple>
        <q-item-section>
          <q-icon name="o_file_upload" size="xs" />
        </q-item-section>
      </q-item>

      <q-item to="/landpads" v-ripple>
        <q-item-section>
          <q-icon name="o_file_download" size="xs" />
        </q-item-section>
      </q-item>

      <q-item to="/ships" v-ripple>
        <q-item-section>
          <q-icon name="o_directions_boat" size="xs" />
        </q-item-section>
      </q-item>
    -->
    </q-list>

    <div class="navbox" id="layout-navbox"></div>
  </q-drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/ui';

const { navDrawerOpen } = storeToRefs(useUiStore());
</script>

<style lang="scss">
.navbox {
  white-space: nowrap;
  overflow: hidden;
  height: 100%;
  //background-color: #222222;
  font-size: 0.8125rem;
  font-weight: 600;
}
</style>
