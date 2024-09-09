export interface User {
  name: string
  login?: string
  location: string
  avatar_url: string
  bio: string
  followers: number
  following: number
}

export interface UserRepos {
  name: string 
  description: string
  license: string
  forks: number
  stargazers_count: number
  updated_at: string
}