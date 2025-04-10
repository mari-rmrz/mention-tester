import React, { useState } from 'react'
import { MentionsInput, Mention } from 'react-mentions'

import './index.css'

const App: React.FC = () => {
  const [value, setValue] = useState("")

  const handleChange = (e: any) => {
    console.log('e=', e.target.value)
    setValue(e.target.value)
  }

  const mockUsers = [
    { display: 'Alice', id: 'alice@mail.com' },
    { display: 'Bob', id: 'bob@mail.com' },
    { display: 'Carlos', id: 'carlos@mail.com' },
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
        className="mentionSection"
      >
        <Mention trigger='@' data={mockUsers} displayTransform={(_id, display) => `@${display}`} />
      </MentionsInput>
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default App
