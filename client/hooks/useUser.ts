import {
  useQuery,
} from '@tanstack/react-query'
import { getUser } from '../apis/userApi.ts'

export function useUser(name: string) {
  const query = useQuery({ queryKey: ['user'], queryFn: ()=> getUser(name) })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}