<script setup lang="ts">
import type { FolderItem } from '@/utils/types'
import SidebarMenuItem from './SidebarMenuItem.vue'

const props = defineProps<{ items: FolderItem[] }>()
</script>

<template>
  <ul class="relative">
    <SidebarMenuItem v-for="item in props.items" :key="item.id" :item="item" />
  </ul>
</template>

<style scoped></style>
