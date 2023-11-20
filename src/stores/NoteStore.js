import { defineStore } from 'pinia';
import { ref } from 'vue';

export const LOCALSTORAGE_NOTES = 'notes';

export const useNoteStore = defineStore('noteStore', {
  state: () => {
    return {
      notes: localStorage.getItem(LOCALSTORAGE_NOTES)
        ? JSON.parse(localStorage.getItem(LOCALSTORAGE_NOTES))
        : [],
      lastNoteId: '',
      currentNote: ref({}),
      showEdit: ref(false),
      showNote: ref(false),
      showAdd: ref(true),
      listView: ref(true),
      gridView: ref(false),
    };
  },
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
      localStorage.setItem(LOCALSTORAGE_NOTES, JSON.stringify(newNotes));
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
      this.notes = updateNotes;
      localStorage.setItem('notes', JSON.stringify(updateNotes));
    },
    deleteNote(id) {
      const isConfirmed = confirm('Are you sure?');
      if (isConfirmed) {
        const filteredNotes = this.notes.filter((item) => item.id !== id);
        this.notes = filteredNotes;
        this.showAddForm();
        localStorage.setItem('notes', JSON.stringify(filteredNotes));
      }
    },
    markedAsPinned(id) {
      const updateNotes = this.notes.map((item) => {
        if (id === item.id) {
          item.pinned = true;
        }
        return item;
      });
      this.notes = updateNotes;
      localStorage.setItem('notes', JSON.stringify(updateNotes));
    },
    markedAsUnpinned(id) {
      const updateNotes = this.notes.map((item) => {
        if (id === item.id) {
          item.pinned = false;
        }
        return item;
      });
      this.notes = updateNotes;
      localStorage.setItem('notes', JSON.stringify(updateNotes));
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
      this.updateCurrentNote(id);
      this.lastNoteID = id;
      // state change
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
    showListView() {
      this.listView = true;
      this.gridView = false;
      this.showAdd = true;
      this.showEdit = false;
      this.showNote = false;
      this.lastNoteID = '';
    },
    showGridView() {
      this.listView = false;
      this.gridView = true;
      this.showAdd = false;
      this.showEdit = false;
      this.showNote = false;
      this.lastNoteID = '';
    },
  },
});
