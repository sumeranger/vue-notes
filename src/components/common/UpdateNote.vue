<template>
  <div class="notes-content">
    <form @submit.prevent="handleUpdateForm">
      <input
        type="text"
        class="input-title"
        placeholder="New title"
        v-model="title"
      />
      <contenteditable
        tag="div"
        className="content-editable"
        :contenteditable="true"
        v-model="content"
        :no-nl="false"
        :no-html="true"
      />
      <button
        type="submit"
        class="form-save-btn"
      >
        <span class="material-symbols-sharp">save</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import contenteditable from 'vue-contenteditable';
import { useNoteStore } from '@/stores/NoteStore';

const noteStore = useNoteStore();
const title = ref('');
const content = ref('');

// Update form with latest values.
title.value = noteStore.currentNote.title;
content.value = noteStore.currentNote.content;

const handleUpdateForm = (e) => {
  let insertId = noteStore.lastNoteID;

  if (title.value.length > 0 && insertId !== '') {
    noteStore.updateNote({
      id: insertId,
      title: title.value,
      content: content.value,
      timestamp: Date.now(),
    });
    noteStore.showSelectedNote(insertId);
  } else {
    alert("Title can't be blank");
  }
};
</script>
