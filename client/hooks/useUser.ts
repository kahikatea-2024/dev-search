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

export function useUserRepos() {
  const query = useQuery({
    queryKey: ['username'],
    queryFn: () => fetchPinnedRepos(),
  })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}
