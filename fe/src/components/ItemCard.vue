<script setup lang="ts">
import type { FolderItem } from '@/utils/types'
import { PhDotsThreeOutlineVertical, PhFile, PhFolder } from '@phosphor-icons/vue'
import { ref } from 'vue'

const folder = ref<HTMLElement | null>(null)
const isEditingName = ref<boolean>(false)

const props = defineProps<{
  item: FolderItem
}>()

const onKeydownHandler = (e: KeyboardEvent) => {
  if (e.isComposing) return
  if (e.key === 'Enter' || e.keyCode === 13) {
    e.preventDefault()
    setTimeout(() => {
      folder.value?.blur()
    })
  }
}

const renameHandler = () => {
  if (!isEditingName.value) isEditingName.value = true
}

const emit = defineEmits<{
  (e: 'folderOpen', value: FolderItem[]): void
}>()

const openFolderHandler = () => {
  if (props.item.sub) emit('folderOpen', props.item.sub)
}
</script>
<template>
  <div
    class="card bg-base-100 shadow-md border-2 border-transparent hover:border-primary hover:shadow-lg hover:shadow-primary cursor-pointer"
    @dblclick="openFolderHandler"
  >
    <div class="flex flex-col p-4 justify-center items-center">
      <div class="w-full inline-flex justify-end">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-sm btn-square">
            <PhDotsThreeOutlineVertical weight="fill" />
          </div>
          <ul
            tabindex="-1"
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li><a>Open</a></li>
            <li><a>Details</a></li>
            <li><a>Delete</a></li>
          </ul>
        </div>
      </div>
      <PhFolder v-if="item.type == 'folder'" :size="56" weight="fill" class="text-warning" />
      <PhFile v-if="item.type == 'file'" :size="56" weight="fill" />
      <span class="text-sm px-4 select-none">{{ item.sub ? item.sub?.length : 0 }} items</span>
      <p
        class="text-lg font-medium text-center cursor-pointer select-none"
        @keydown="onKeydownHandler"
        @click="renameHandler"
        @blur="() => (isEditingName = !isEditingName)"
        :contenteditable="isEditingName"
        ref="folder"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
