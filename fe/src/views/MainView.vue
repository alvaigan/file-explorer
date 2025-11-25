<script setup lang="ts">
import type { BreadcrumbsProps } from '@/utils/types'
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { PhDotsThree, PhDotsThreeOutline } from '@phosphor-icons/vue'
import FolderLayoutGrid from '@/components/FolderLayoutGrid.vue'

const bcNav: BreadcrumbsProps[] = [
  { label: 'Home', name: 'home', url: '/' },
  { label: 'My Document', name: 'my-document', url: '/' },
  { label: 'Favourites', name: 'favourites', url: '/' },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <Breadcrumbs :data="bcNav" />

    <div class="flex flex-row justify-between mt-5">
      <h1 class="font-semibold text-3xl">My Documents</h1>
      <div class="flex flex-row gap-2">
        <button class="btn btn-primary">Add File</button>
        <div class="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" role="button" class="btn btn-square btn-primary btn-outline">
            <PhDotsThreeOutline :size="24" weight="fill" />
          </div>
          <ul
            tabindex="-1"
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li><a>Add Folder</a></li>
            <li><a>Upload File</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <FolderLayoutGrid />
  </div>
</template>

<style lang="css" scoped></style>
