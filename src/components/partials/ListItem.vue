<template>
  <h4
    class="sidebar-title"
    v-if="'list' === type"
  >
    <span class="sidebar-title-note-icon material-symbols-outlined">
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
      <p>{{ note.title }}</p>
      <span
        v-if="note.pinned"
        @click="noteStore.markedAsUnpinned(note.id)"
        class="note-list-icon material-symbols-outlined"
      >
        {{ icon }}
      </span>
      <span
        v-if="!note.pinned"
        @click="noteStore.markedAsPinned(note.id)"
        class="note-list-icon material-symbols-outlined"
      >
        {{ icon }}
      </span>
    </li>
  </ul>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
const props = defineProps(['notes', 'title', 'icon', 'type']);
</script>
