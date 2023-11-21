<template>
  <h4
    class="list-title"
    v-if="'list' === type"
  >
    <span class="list-title__icon material-symbols-sharp"> {{ icon }} </span
    >{{ title }}
  </h4>
  <ul
    class="list"
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
        class="list__icon material-symbols-sharp"
      >
        delete
      </span>
      <span
        v-if="note.pinned"
        @click="noteStore.markedAsUnpinned(note.id)"
        class="list__icon material-symbols-sharp"
      >
        do_not_disturb_on
      </span>
      <span
        v-if="!note.pinned"
        @click="noteStore.markedAsPinned(note.id)"
        class="list__icon material-symbols-sharp"
      >
        push_pin
      </span>
    </li>
    <li
      v-if="notes < 1"
      class="notes-list-nothing-found"
    >
      <span>Not found</span>
    </li>
  </ul>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
const props = defineProps(['notes', 'title', 'icon', 'type']);

const wordLimit = 20;
</script>

<style scoped>
/* Title */
.list-title {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
}
.list-title__icon {
  margin-right: 5px;
}
/* List */
.list {
  padding: 0;
  margin: 0 0 20px 0;
  list-style: none;
}
.list li {
  position: relative;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 3px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list li::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 100%;
  background-color: #6528f7;
  top: 0;
  left: -15px;
  z-index: 1;
  transform: translateX(-20px);
  transition: all 0.3s ease-in-out;
}
.list li:hover::before {
  transform: translateX(0);
}
.list li p {
  font-size: 0.75rem;
  line-height: 20px;
  width: 80%;
}
.list__icon {
  font-size: 1rem;
  cursor: pointer;
  display: none;
}
.list li:hover .list__icon {
  display: block;
}
/* Nothing found */
li.list__not-found {
  text-align: center;
  width: 100%;
  display: flex;
  padding-top: 15px;
  border-bottom: 0;
}
li.list__not-found span {
  font-size: 1.5rem;
  line-height: 1.5rem;
  opacity: 0.3;
}
li.list__not-found:hover::before {
  display: none;
}
</style>
