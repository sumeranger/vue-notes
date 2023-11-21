<template>
  <div class="grid-wrapper">
    <div
      class="grid"
      v-if="
        !noteStore.showAdd &&
        !noteStore.showNote &&
        !noteStore.showEdit &&
        noteStore.pinnedNotes.length > 0
      "
    >
      <GridItem
        :notes="noteStore.pinnedNotes"
        :title="`Pinned Notes`"
        :icon="`push_pin`"
        :type="`grid`"
      />
    </div>
    <div
      class="grid"
      v-if="!noteStore.showAdd && !noteStore.showNote && !noteStore.showEdit"
    >
      <GridItem
        :notes="noteStore.allNotes"
        :title="`All Notes`"
        :icon="`notes`"
        :type="`grid`"
      />
    </div>
    <AddNote v-if="noteStore.showAdd" />
    <UpdateNote v-if="noteStore.showEdit" />
    <ViewNote v-if="noteStore.showNote" />
  </div>
</template>

<script setup>
import AddNote from '@/components/common/AddNote.vue';
import UpdateNote from '@/components/common/UpdateNote.vue';
import ViewNote from '@/components/common/ViewNote.vue';
import GridItem from '../partials/GridItem.vue';
import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
</script>

<style scoped>
.grid-wrapper {
  display: flex;
  width: 100%;
  flex-flow: column;
  padding: 15px 20px;
  width: 100%;
  background-color: #f4f2de;
  overflow-y: scroll;
  font-size: 0.825rem;
  line-height: 1.25rem;
}
.grid {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-flow: column;
}
.grid-wrapper .notes-content {
  width: 100%;
  height: 100%;
}
</style>
