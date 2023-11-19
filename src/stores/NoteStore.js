import { defineStore } from 'pinia';

export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    notes: [],
    lastNoteId: '',
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
  },
});
