import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    notes: [],
    lastNoteId: '',
    currentNote: ref({}),
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
    addNote(newNote) {
      const newNotes = [newNote, ...this.notes];
      this.notes = newNotes;
      console.log('newNotes: ', newNotes);
    },
    updateNote(changedNote) {
      const others = this.notes.filter((note) => note.id !== changedNote.id);
      const updateNotes = [
        {
          id: changedNote.id,
          title: changedNote.title,
          content: changedNote.content,
          timestamp: Date.now(),
          pinned: changedNote.pinned,
        },
        ...others,
      ];
      console.log('updateNotes: ', updateNotes);
      this.notes = updateNotes;
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
    updateCurrentNote(id) {
      const currentNote = this.notes.find((note) => note.id == id);
      this.currentNote = currentNote;
    },
    resetLastNoteID() {
      this.lastNoteID = '';
    },
    showAddForm() {
      this.resetLastNoteID();
      // state change
      this.showAdd = true;
      this.showEdit = false;
      this.showNote = false;
    },
    showSelectedNote(id) {
      console.log('id: ', id);
      this.updateCurrentNote(id);
      this.lastNoteID = id;
      console.log('lastNoteID: ', this.lastNoteID);
      // state change
      this.test();
      // this.showAdd = false;
      // this.showEdit = false;
      // this.showNote = true;
    },
    test() {
      this.showAdd = false;
      this.showEdit = false;
      this.showNote = true;
    },
    showUpdateForm(id) {
      this.updateCurrentNote(id);
      this.lastNoteID = id;
      // state change
      this.showAdd = false;
      this.showEdit = true;
      this.showNote = false;
    },
  },
});
