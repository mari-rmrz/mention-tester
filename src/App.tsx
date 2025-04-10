/* eslint-disable  @typescript-eslint/no-explicit-any */

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
    <div>
      <h3>Input with @mention functionality</h3>

      <MentionsInput
        value={value}
        onChange={handleChange}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
        style={{ width: "100%", height: 100 }}
      >
        <Mention className="mentionSection" trigger='@' data={mockUsers} displayTransform={(_id, display) => `@${display}`} />
      </MentionsInput>
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default App
