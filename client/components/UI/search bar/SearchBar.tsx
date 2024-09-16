

// type InputAttributes = InputHTMLAttributes<HTMLInputElement>

import { useState } from "react"

interface SearchBarProps {
  setUsername: (username: string) => void // Prop to update the username
}

export default function SearchBar({ setUsername }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('') // Keep local input state

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setInputValue(event.target.value) // Update the local input state
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault() // Prevent page reload on form submit

    setUsername(inputValue) // Set the username on form submission
  }

  return (
    <div>
      <form className=" p-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="rounded-xl p-2 text-black"
          size={50}
          name="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type a GitHub User Name"
        />
        <button
          className=" ml-2 rounded-lg bg-btn p-2 text-black hover:scale-105 hover:bg-btnHover"
          type="submit"
        >
          &nbsp;Search
        </button>
      </form>
    </div>
  )
}
