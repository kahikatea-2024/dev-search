import { log } from "console";
import { InputHTMLAttributes, useState } from "react";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>

interface SearchBarProps {
  setUsername: (username: string) => void; // Prop to update the username
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className=""
        size={50}
        name="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}
