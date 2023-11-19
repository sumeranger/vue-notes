<template>
  <Sidebar />
  <AddNote v-if="noteStore.showAdd" />
  <ViewNote v-if="noteStore.showNote" />
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import AddNote from '@/components/common/AddNote.vue';
import ViewNote from '../common/ViewNote.vue';
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
</script>
