import { useQuery } from '@tanstack/react-query'
import { getUser } from '../apis/userApi.ts'
import { fetchPinnedRepos } from '../apis/repoApi.ts'

export function useUser(name: string) {
  const query = useQuery({ 
    queryKey: ['user', name], 
    queryFn: () => getUser(name),
    enabled: !!name,
    retry: false, 
  })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useUserRepos(name: string) {
  
  // If the token is undefined, skip fetching and return a placeholder state
  const query = useQuery({
    queryKey: ['repos', name],
    queryFn: () => fetchPinnedRepos(name),
    enabled: !!name, // Only run the query if the token exists
    
    
  })
  
  return {
      ...query,
      // Extra queries can be added here
  }

  }

