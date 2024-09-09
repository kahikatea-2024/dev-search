import { UserRepos } from '../../models/user'

import superagent from 'superagent'

// GitHub GraphQL API endpoint
const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql'

// Replace with your GitHub token
const GITHUB_TOKEN = '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'

// GraphQL query for pinned repositories
const query = `
  {
  user(login: "robert-hall-24") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          licenseInfo {
           name
          }
          forkCount 
          stargazers {
           totalCount
          }
          updatedAt
          url
        }
      }
    }
  }
} 
`

interface PinnedRepoResponse {
  name: string
  description: string | null
  licenseInfo: {
    name: string | null
  } | null
  forkCount: number
  stargazers: {
    totalCount: number
  }
  updatedAt: string
}

export async function fetchPinnedRepos() {
  try {
    const response = await superagent
      .post(GITHUB_GRAPHQL_API)
      .send({ query })
      .set('Authorization', `Bearer ${GITHUB_TOKEN}`)
      .set('Accept', 'application/json')

    const repos = response.body.data.user.pinnedItems
      .nodes as PinnedRepoResponse[]

    // Map GraphQL response to UserRepos interface
    const mappedRepos: UserRepos[] = repos.map((repo) => ({
      name: repo.name,
      description: repo.description || '',
      license: repo.licenseInfo?.name || 'No license',
      forks: repo.forkCount,
      stargazers_count: repo.stargazers.totalCount,
      updated_at: repo.updatedAt,
    }))

    console.log(mappedRepos)
    return mappedRepos
  } catch (error) {
    console.error('Error fetching pinned repos:', error)
  }
}

fetchPinnedRepos()
