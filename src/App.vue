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
