import React, { useState } from 'react'
import { MentionsInput, Mention } from 'react-mentions'

const App: React.FC = () => {
  const [value, setValue] = useState("")

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const mockUsers = [
    { id: '1', display: 'Alice', email: 'alice@mail.com' },
    { id: '2', display: 'Bob', email: 'bob@mail.com' },
    { id: '3', display: 'Carlos', email: 'carlos@mail.com' },
  ]

  const handleSend = () => {
    alert(`message sent to ${value} !`)
    setValue('')
  }

  return (
    <div className="single-line">
      <h3>Single line input</h3>

      <MentionsInput
        singleLine
        value={value}
        onChange={handleChange}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
        style={{ width: "100%", height: 100 }}
      >
        <Mention trigger='@' data={mockUsers} style={{ backgroundColor: 'darkslategrey' }} displayTransform={(display) => `@${display}`} />
      </MentionsInput>
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default App
