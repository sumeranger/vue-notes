<template>
  <Sidebar />
  <AddNote v-if="noteStore.showAdd" />
  <ViewNote v-if="noteStore.showNote" />
  <UpdateNote v-if="noteStore.showEdit" />
</template>

<script setup>
import Sidebar from './Sidebar.vue';
import AddNote from '@/components/common/AddNote.vue';
import ViewNote from '../common/ViewNote.vue';
import { useNoteStore } from '@/stores/NoteStore';
import UpdateNote from '../common/UpdateNote.vue';
const noteStore = useNoteStore();
</script>
