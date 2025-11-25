<script setup lang="ts">
import type { BreadcrumbsProps } from '@/utils/types'
import { PhFolderOpen, PhFolderSimple } from '@phosphor-icons/vue'

const props = defineProps<{
  data: BreadcrumbsProps[]
}>()
</script>

<template>
  <div>
    <div class="breadcrumbs text-sm">
      <ul>
        <li v-for="(item, i) in props.data" :key="item.name">
          <a>
            <PhFolderOpen v-if="i == props.data.length - 1" />
            <PhFolderSimple v-else />
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
