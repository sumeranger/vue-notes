<template>
  <div class="topbar">
    <div class="topbar-title">
      Notes
      <span
        @click="noteStore.showAddForm"
        class="action-icon material-symbols-sharp"
      >
        edit_note
      </span>
    </div>
    <div class="action-icons">
      <span
        v-if="noteStore.lastNoteID !== ''"
        class="action-icon material-symbols-sharp"
      >
        delete
      </span>
    </div>
    <div class="action-icons justify-end">
      <span class="action-icon material-symbols-sharp"> search </span>
      <span class="action-icon material-symbols-sharp"> view_list </span>
      <span class="action-icon material-symbols-sharp"> grid_view </span>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
</script>
