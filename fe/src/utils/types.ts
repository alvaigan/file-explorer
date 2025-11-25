export interface FolderItem {
  id: number
  name: string
  type: string
  sub?: FolderItem[]
}

export interface BreadcrumbsProps {
  label: string
  name: string
  url: string
}
