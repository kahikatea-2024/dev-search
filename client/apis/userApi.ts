import request from 'superagent'

import type { User } from '../../models/user'

export function getUser(name: string): Promise<User> {
  return request.get(`https://api.github.com/users/${name}`).then((res) => {
    return res.body
  })
}
