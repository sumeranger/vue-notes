<template>
  <div className="notes-content-grid">
    <div
      className="notes-content-all-notes"
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
      className="notes-content-all-notes"
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
