<template>
  <div class="notes-content">
    <div class="view-notes-details">
      <h4 class="view-notes-title">{{ noteStore.currentNote.title }}</h4>
      <div class="view-notes-timestamp">
        {{
          moment(noteStore.currentNote.timestamp).format(
            'MMMM Do YYYY, h:mm:ss a'
          )
        }}
      </div>
      <contenteditable
        tag="div"
        class="content-editable"
        :contenteditable="false"
        v-model="noteStore.currentNote.content"
        :no-nl="false"
        :no-html="true"
      />
      <button
        @click="noteStore.showUpdateForm(noteStore.currentNote.id)"
        class="form-save-btn"
      >
        <span class="material-symbols-sharp">edit</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore';
import contenteditable from 'vue-contenteditable';
import moment from 'moment';

const noteStore = useNoteStore();
</script>

<style scoped>
.view-notes-title {
  margin-bottom: 10px;
  text-transform: capitalize;
  font-size: 1rem;
  line-height: 1.5rem;
}
.view-notes-timestamp {
  margin-bottom: 15px;
  text-transform: capitalize;
  font-size: 1rem;
  line-height: 1rem;
  color: #bbb;
}
.view-notes-details {
  font-size: 0.825rem;
  line-height: 1.25rem;
}
</style>
