<script setup lang="ts">
import type { FolderItem } from '@/utils/types'
import { PhCaretCircleDown, PhCaretCircleLeft, PhFile, PhFolder } from '@phosphor-icons/vue'
import SidebarMenu from './SidebarMenu.vue'
import { onMounted, ref } from 'vue'

const props = defineProps<{ item: FolderItem }>()

const isOpenChildren = ref<boolean>(false)

const toggleShowChildrenHandler = () => {
  if (props.item.sub && props.item.sub?.length > 0) {
    isOpenChildren.value = !isOpenChildren.value
  }
}

const openHandler = () => {
  console.log('hellow')
}

onMounted(() => {
  console.log(props)
})

const style =
  'font-semibold inline-flex gap-2 items-center w-full hover:bg-primary cursor-pointer p-2 rounded-lg'
</script>

<template>
  <li class="max-w-full w-full">
    <div :class="style" @click="toggleShowChildrenHandler" @dblclick="openHandler">
      <PhFolder v-if="item.type == 'folder'" :size="24" weight="duotone" />
      <PhFile v-else :size="24" weight="duotone" />
      <div class="flex-1">{{ item.name }}</div>
      <PhCaretCircleLeft v-if="item.sub && item.sub.length && !isOpenChildren" :size="20" weight="duotone" />
      <PhCaretCircleDown v-if="item.sub && item.sub.length && isOpenChildren" :size="20" weight="fill" />
    </div>

    <ul v-if="item.sub && item.sub.length" :class="!isOpenChildren ? 'sr-only' : ''" class="pl-4">
      <SidebarMenu v-if="item.sub" :items="item.sub" />
    </ul>
  </li>
</template>
