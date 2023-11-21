<template>
  <div class="topbar">
    <div class="topbar__title">Notes</div>
    <div class="topbar__btn-wrapper justify-end">
      <span
        @click="noteStore.showAddForm"
        class="topbar__btn-wrapper__btn material-symbols-sharp"
      >
        edit_note
      </span>
      <span
        @click="noteStore.showListView()"
        class="topbar__btn-wrapper__btn material-symbols-sharp"
      >
        view_list
      </span>
      <span
        @click="noteStore.showGridView()"
        class="topbar__btn-wrapper__btn material-symbols-sharp"
      >
        grid_view
      </span>
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from '@/stores/NoteStore';
const noteStore = useNoteStore();
</script>

<style scoped>
.topbar {
  padding: 10px 20px;
  background-color: #f3c13a;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topbar__title {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
}
.topbar__btn-wrapper {
  display: flex;
  align-items: center;
  width: 36%;
}
.topbar__btn-wrapper__btn {
  margin-right: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}
.topbar__btn-wrapper__btn:hover {
  transform: scale(1.1);
}
.justify-end {
  justify-content: flex-end;
}
</style>
