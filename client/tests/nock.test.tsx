// @vitest-environment jsdom
import { setupApp } from './setup.tsx'
import { beforeAll, describe, it, expect } from 'vitest'
import nock from 'nock'

beforeAll(() => {
  nock.disableNetConnect()
})

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

// //TEST DATA
const username = 'octocat'
const MOCK_USER = {
  name: 'Octocat',
  login: 'octocat',
  location: 'San Francisco, CA',
  avatar_url: 'https://github.com/images/mona-lisa.png',
  bio: 'A friendly GitHub mascot.',
  followers: 1000,
  following: 100,
}

describe("the app and it's data", () => {
  it('should render the landing page', async () => {
    const screen = setupApp('/')
    const heading = await screen.findByRole('heading')
    expect(heading).toBeVisible()
  })

  it('should search the user', async () => {
    // ARRANGE
    const scope = nock('https://api.github.com')
      .get(`/users/${username}`)
      .matchHeader('Authorization', `token ${GITHUB_TOKEN}`)
      .reply(200, MOCK_USER)
      .on('request', (req) => {
        console.log('Intercepted GET /users/octocat request:', req.headers)
      })

    const { user, ...screen } = setupApp('/')

    // ACT
    const search = await screen.findByRole('textbox')
    await user.type(search, `${username}`)
    console.log('Input typed')

    const button = await screen.findByRole('button', { name: 'Search' })
    await user.click(button)
    console.log('Search button clicked')

    // ASSERT

    await new Promise((resolve) => setTimeout(resolve, 1000))

    expect(screen.getByText('Octocat')).toBeInTheDocument()
    expect(scope.isDone()).toBe(true)
  })
})
