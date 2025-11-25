<script setup lang="ts">
import type { FolderItem } from '@/utils/types'
import SidebarMenu from './SidebarMenu.vue'
import { PhArchive } from '@phosphor-icons/vue'

const folder: FolderItem[] = [
  {
    id: 1,
    name: 'root-A',
    type: 'folder',
    sub: [
      {
        id: 2,
        name: 'level-1',
        type: 'folder',
        sub: [
          {
            id: 3,
            name: 'level-2',
            type: 'folder',
            sub: [
              {
                id: 4,
                name: 'level-3',
                type: 'folder',
                sub: [
                  {
                    id: 5,
                    name: 'level-4',
                    type: 'folder',
                    sub: [
                      {
                        id: 6,
                        name: 'level-5',
                        type: 'folder',
                        sub: [
                          {
                            id: 7,
                            name: 'level-6',
                            type: 'folder',
                            sub: [
                              {
                                id: 8,
                                name: 'level-7',
                                type: 'folder',
                                sub: [
                                  {
                                    id: 9,
                                    name: 'level-8',
                                    type: 'folder',
                                    sub: [
                                      {
                                        id: 10,
                                        name: 'level-9',
                                        type: 'folder',
                                        sub: [
                                          {
                                            id: 11,
                                            name: 'level-10',
                                            type: 'folder',
                                            sub: [
                                              {
                                                id: 12,
                                                name: 'deep-file.txt',
                                                type: 'file',
                                              },
                                              {
                                                id: 13,
                                                name: 'final-folder',
                                                type: 'folder',
                                                sub: [
                                                  {
                                                    id: 14,
                                                    name: 'bottom-file.txt',
                                                    type: 'file',
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 20,
            name: 'side-file-L1.txt',
            type: 'file',
          },
        ],
      },
    ],
  },
  {
    id: 100,
    name: 'root-B',
    type: 'folder',
    sub: [
      {
        id: 101,
        name: 'branch-1',
        type: 'folder',
        sub: [
          {
            id: 102,
            name: 'branch-2',
            type: 'folder',
            sub: [
              {
                id: 103,
                name: 'branch-3',
                type: 'folder',
                sub: [
                  {
                    id: 104,
                    name: 'branch-4',
                    type: 'folder',
                    sub: [
                      {
                        id: 105,
                        name: 'branch-5',
                        type: 'folder',
                        sub: [
                          {
                            id: 106,
                            name: 'branch-file.txt',
                            type: 'file',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 110,
        name: 'root-B-file.txt',
        type: 'file',
      },
    ],
  },
]
</script>

<template>
  <aside class="w-80 bg-white flex flex-col">
    <div
      class="p-4 text-xl font-bold mt-5 inline-flex gap-2 items-center rounded-xl bg-accent justify-center mx-2"
    >
      <PhArchive :size="32" weight="duotone" />
      <span>FILE EXPLORER</span>
    </div>

    <nav class="flex-1 p-4 space-y-2 overflow-auto whitespace-nowrap max-w-full mt-5">
      <SidebarMenu :items="folder" />
    </nav>
  </aside>
</template>

<style scoped></style>
