<template>
  <div class="notes-content">
    <div className="view-note-details">
      <h4 className="view-note-title">{{ noteStore.currentNote.title }}</h4>
      <div class="view-note-timestamp">
        {{
          moment(noteStore.currentNote.timestamp).format(
            'MMMM Do YYYY, h:mm:ss a'
          )
        }}
      </div>
      <contenteditable
        tag="div"
        className="content-editable"
        :contenteditable="false"
        v-model="noteStore.currentNote.content"
        :no-nl="false"
        :no-html="true"
      />
      <button
        @click="noteStore.showUpdateForm(noteStore.currentNote.id)"
        className="form-save-btn"
      >
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
