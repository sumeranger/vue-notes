<template>
  <h4
    class="sidebar-title"
    v-if="'list' === type"
  >
    <span class="sidebar-title-note-icon material-symbols-sharp">
      {{ icon }} </span
    >{{ title }}
  </h4>
  <ul
    class="note-list"
    v-if="'list' === type"
  >
    <li
      v-for="note in notes"
      :key="note.id"
    >
      <p @click="noteStore.showSelectedNote(note.id)">
        {{ note.title.substring(0, wordLimit) }}
        {{ note.title.length > wordLimit ? '...' : '' }}
      </p>
      <span
        @click="noteStore.deleteNote(note.id)"
        class="note-list-icon material-symbols-sharp"
      >
        delete
      </span>
      <span
        v-if="note.pinned"
        @click="noteStore.markedAsUnpinned(note.id)"
        class="note-list-icon material-symbols-sharp"
      >
        do_not_disturb_on
      </span>
      <span
        v-if="!note.pinned"
        @click="noteStore.markedAsPinned(note.id)"
        class="note-list-icon material-symbols-sharp"
      >
        push_pin
      </span>
    </li>
    <li
      v-if="notes < 1"
      className="note-list-nothing-found"
    >
      <span>No found</span>
    </li>
  </ul>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
const props = defineProps(['notes', 'title', 'icon', 'type']);

const wordLimit = 20;
</script>
