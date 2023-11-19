<template>
  <div class="notes-content">
    <form @submit.prevent="handleForm">
      <input
        type="text"
        class="input-title"
        placeholder="New note title"
        v-model="title"
      />

      <contenteditable
        tag="div"
        class="content-editable"
        :contenteditable="true"
        :no-nl="false"
        :no-html="true"
        v-model="content"
      />

      <button
        tpye="submit"
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
import { v4 as uuidv4 } from 'uuid';
const noteStore = useNoteStore();
const title = ref('');
const content = ref('');

const handleForm = (e) => {
  let insertId = noteStore.lastNoteId;

  if (title.value.length > 0 && insertId === '') {
    insertId = uuidv4();
    noteStore.addNote({
      id: insertId,
      title: title.value,
      content: content.value,
      timestamp: Date.now(),
      pinned: false,
    });

    // Reset Form
    title.value = '';
    content.value = '';
  } else {
    alert("Note title can't be blank");
  }
};
</script>
