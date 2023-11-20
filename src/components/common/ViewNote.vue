<template>
  <div class="notes-content">
    <div
      className="view-note-details"
      v-for="note in noteStore.currentNote"
      :key="note.id"
    >
      <h4 className="view-note-title">{{ note.title }}</h4>
      <div class="view-note-timestamp">
        {{ moment(note.timestamp).format('MMMM Do YYYY, h:mm:ss a') }}
      </div>
      <contenteditable
        tag="div"
        className="content-editable"
        :contenteditable="false"
        v-model="note.content"
        :no-nl="false"
        :no-html="true"
      />
      <button className="form-save-btn">
        <span className="material-symbols-sharp">edit</span>
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
