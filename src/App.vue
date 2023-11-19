<template>
  <div class="notes-wrapper">
    <Topbar />
    <div class="content-wrapper">
      <ListView />
    </div>
  </div>
</template>

<script setup>
import Topbar from '@/components/common/Topbar.vue';
import ListView from '@/components/list/ListView.vue';
</script>
