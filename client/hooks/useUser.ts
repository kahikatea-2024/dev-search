import { useQuery } from '@tanstack/react-query'
import { getUser } from '../apis/userApi.ts'
import { fetchPinnedRepos } from '../apis/repoApi.ts'

export function useUser(name: string) {
  const query = useQuery({ queryKey: ['user'], queryFn: () => getUser(name) })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useUserRepos(githubToken: string | undefined) {
  // If the token is undefined, skip fetching and return a placeholder state
  const query = useQuery({
    queryKey: ['username'],
    queryFn: () => {
      if (!githubToken) {
        throw new Error('GitHub token is missing')
      }
      return fetchPinnedRepos(githubToken)
    },
    enabled: !!githubToken, // Only run the query if the token exists
  })

  return {
    ...query,
    // Extra queries can be added here
  }
}
