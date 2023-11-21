<template>
  <h4
    class="grid-title"
    v-if="'grid' === type"
  >
    <span class="grid-title__icon material-symbols-sharp">{{ icon }}</span>
    {{ title }}
  </h4>
  <div
    class="card-wrapper"
    v-if="'grid' === type"
  >
    <div
      class="card"
      v-for="note in notes"
      :key="note.id"
    >
      <h4
        @click="noteStore.showSelectedNote(note.id)"
        class="card__title"
      >
        {{ note.title.substring(0, wordLimit) }}
        {{ note.title.length > wordLimit ? '...' : '' }}
      </h4>
      <span
        @click="noteStore.deleteNote(note.id)"
        class="card__delete-icon card__icon material-symbols-sharp"
      >
        delete
      </span>
      <span
        v-if="note.pinned"
        @click="noteStore.markedAsUnpinned(note.id)"
        class="card__icon material-symbols-sharp"
        >do_not_disturb_on</span
      >
      <span
        v-if="!note.pinned"
        @click="noteStore.markedAsPinned(note.id)"
        class="card__icon material-symbols-sharp"
        >push_pin</span
      >
      <p>
        {{ note.content.substring(0, wordLimit) }}
        {{ note.content.length > wordLimit ? '...' : '' }}
      </p>
    </div>
  </div>
  <div
    v-if="notes < 1 && 'grid' === type"
    class="grid-nothing-found"
  >
    <span>Not found</span>
  </div>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
const props = defineProps(['notes', 'title', 'icon', 'type']);

const wordLimit = 9;
</script>

<style scoped>
h4.grid-title {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
}
.grid-title__icon {
  margin-right: 5px;
}
.card-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 10px;
}
.card {
  width: calc(25% - 8px);
  padding: 7px 8px;
  background-color: #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  position: relative;
  z-index: 0;
}
.card:hover {
  cursor: pointer;
  background-color: #f4e0b9;
}
h4.card__title {
  font-size: 0.75rem;
  margin-bottom: 10px;
}
.card__icon {
  position: absolute;
  top: 10px;
  right: 5px;
  font-size: 1rem;
  z-index: 10;
  display: none;
}
.card:hover .card__icon {
  display: block;
}
.card__delete-icon {
  right: 25px;
}
.grid-nothing-found {
  text-align: center;
  width: 200px;
  display: flex;
  padding-top: 30px;
  border-bottom: 0;
  font-size: 4rem;
  margin: 0 auto;
  line-height: 4rem;
  opacity: 0.5;
  font-weight: 700;
}
</style>
