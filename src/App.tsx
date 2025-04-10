import React, { useState } from 'react'
import { MentionsInput, Mention } from 'react-mentions'

const App: React.FC = () => {
  const [value, setValue] = useState("")

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const mockUsers = [
    { id: '1', display: 'Alice' },
    { id: '2', display: 'Bob' },
    { id: '3', display: 'Carlos' },
  ]

  return (
    <div className="single-line">
      <h3>Single line input</h3>

      <MentionsInput
        singleLine
        value={value}
        onChange={handleChange}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
      >
        <Mention trigger='@' data={mockUsers} />
      </MentionsInput>
    </div>
  )
}

export default App
