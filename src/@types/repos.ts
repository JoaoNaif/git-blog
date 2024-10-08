export interface Repos {
  name: string
  id: number
  html_url: string
  description: string
  url: string
  visibility: string
  language: string
  created_at: string
  watchers: number
  owner: {
    login: string
    id: number
  }
}
