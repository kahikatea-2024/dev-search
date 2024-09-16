interface AllReposProps {
  username: string
}

export function AllRepos({ username }: AllReposProps) {
  return (
    <div className="container mt-10 text-center">
      <a
        href={`https://github.com/${username}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View all repositories
      </a>
    </div>
  )
}
