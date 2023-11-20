<template>
  <div class="topbar">
    <div class="topbar-title">Notes</div>
    <div class="action-icons justify-end">
      <span
        @click="noteStore.showAddForm"
        class="action-icon material-symbols-sharp"
      >
        edit_note
      </span>
      <span class="action-icon material-symbols-sharp"> view_list </span>
      <span class="action-icon material-symbols-sharp"> grid_view </span>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
</script>
