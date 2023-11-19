import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    notes: [],
    lastNoteId: '',
    currentNote: ref(''),
    showEdit: ref(false),
    showNote: ref(false),
    showAdd: ref(true),
  }),
  getters: {
    allNotes: (state) => {
      return state.notes;
    },
    pinnedNotes: (state) => {
      return state.notes.filter((note) => note.pinned);
    },
  },
  actions: {
    addNote(note) {
      const newNotes = [note, ...this.notes];
      this.notes = newNotes;
    },
    markedAsPinned(id) {
      const updateNotes = this.notes.map((item) => {
        if (id === item.id) {
          item.pinned = true;
        }
        return item;
      });
      this.notes = updateNotes;
    },
    markedAsUnpinned(id) {
      const updateNotes = this.notes.map((item) => {
        if (id === item.id) {
          item.pinned = false;
        }
        return item;
      });
      this.notes = updateNotes;
    },
    viewSelectedNote(id) {
      this.updateCurrentNote(id);
      this.lastNoteID = id;
      this.showNoteDetails();
    },
    updateCurrentNote(id) {
      const currentNote = this.notes.filter((note) => note.id == id);
      this.currentNote = currentNote;
    },
    showAddForm() {
      this.showAdd = true;
      this.showEdit = false;
      this.showNote = false;
    },
    showNoteDetails() {
      this.showAdd = false;
      this.showEdit = false;
      this.showNote = true;
    },
    resetLastNoteID() {
      this.lastNoteID = '';
    },
  },
});
