<template>
  <div class="notes-wrapper">
    <Topbar />
    <div class="content-wrapper">
      <ListView v-if="noteStore.listView" />
      <GridView v-if="noteStore.gridView" />
    </div>
  </div>
</template>

<script setup>
import Topbar from '@/components/common/Topbar.vue';
import ListView from '@/components/list/ListView.vue';
import GridView from '@/components/grid/GridView.vue';

import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
</script>

<style scoped>
.notes-wrapper {
  display: flex;
  flex-flow: column;
  width: 680px;
  height: 600px;
  margin: 100px auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.content-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
