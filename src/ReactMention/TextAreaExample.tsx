import React, { useState } from 'react'
import { MentionsInput, Mention } from 'react-mentions'

import defaultStyle from './defaultStyle'

const TextAreaExample: React.FC = () => {
  const [value, setValue] = useState("")

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const mockUsers = [
    { display: 'Alice', id: 'alice@mail.com' },
    { display: 'Bob', id: 'bob@mail.com' },
    { display: 'Carlos', id: 'carlos@mail.com' },
  ]

  const extractMentionedEmails = () => {
    const regex = /@\[([^\]]+)\]\(([^)]+)\)/g;
    const matches = [...value.matchAll(regex)];
    return matches.map((m) => m[2]); // m[2] is the ID (email)
  };

  const handleSend = () => {
    const mentionedEmails = extractMentionedEmails();

    alert(`message: ${value} sent to ${mentionedEmails} !`)
    setValue('')
  }

  return (
    <div>
      <h3>Input using react-mention library ✅</h3>
      <p>text area</p>
      <MentionsInput
        value={value}
        onChange={handleChange}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
        style={defaultStyle}
      >
        <Mention trigger='@' data={mockUsers} displayTransform={(_id, display) => `@${display}`} />
      </MentionsInput>
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default TextAreaExample
