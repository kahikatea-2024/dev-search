import request from 'superagent'

import type { User } from '../../models/user'

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export function getUser(name: string): Promise<User> {
  return request    
    .get(`https://api.github.com/users/${name}`)
    .set('Authorization', `token ${GITHUB_TOKEN}`)  // Set the GitHub token in the Authorization header
    .then((res) => {
      return res.body
    })
}
