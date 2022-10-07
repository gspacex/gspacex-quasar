<template>
  <div class="fit">
    <q-list>
      <q-item-label header> Launches </q-item-label>
      <q-item to="/launches" exact> Index </q-item>
      <q-item to="/launches/upcoming" exact> Upcoming </q-item>
      <q-item to="/launches/past" exact> Past </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts"></script>
