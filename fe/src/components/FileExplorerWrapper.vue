<script setup lang="ts">
import ContentLayout from '../layouts/ContentLayout.vue'
import Sidebar from './Sidebar.vue'
</script>

<template>
  <div class="flex h-screen bg-base-100">
    <Sidebar />
    <div class="flex-1 m-5 flex flex-col gap-4">
      <ContentLayout>
        <slot />
      </ContentLayout>
    </div>
  </div>
</template>
