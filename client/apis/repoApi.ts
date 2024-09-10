import { UserRepos } from '../../models/user'
import superagent from 'superagent'

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN
const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql'

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

export async function fetchPinnedRepos(name: string): Promise<UserRepos[]> {
  const query = `
{
  user(login: "${name}") {
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
  try {
    const response = await superagent
      .post(GITHUB_GRAPHQL_API)
      .send({ query })
      .set('Authorization', `Bearer ${GITHUB_TOKEN}`)
      .set('Accept', 'application/json')

    // Handle case when user or pinnedItems are not found
    if (!response.body.data.user || !response.body.data.user.pinnedItems) {
      return [] // Return an empty array if no repos are found
    }

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

    return mappedRepos
  } catch (error) {
    console.error('Error fetching pinned repos:', error)
    return [] // Return an empty array in case of error
  }
}
