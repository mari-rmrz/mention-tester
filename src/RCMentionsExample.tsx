import React, { useState } from 'react'
import Mentions from '@rc-component/mentions'

const RCMentionsExample: React.FC = () => {

  const mockUsers = [
    { value: 'alice@mail.com', label: 'Alice' },
    { value: 'bob@mail.com', label: 'Bob' },
    { value: 'carlos@mail.com', label: 'Carlos' },
  ]

  const [value, setValue] = useState("")

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const extractMentionedEmails = () => {
    const regex = /@\[([^\]]+)\]\(([^)]+)\)/g;
    const matches = [...value.matchAll(regex)];
    return matches.map((m) => m[2]); // m[2] is the ID (email)
  };

  const handleSend = () => {
    const mentionedEmails = extractMentionedEmails();

    alert(`message ${value} sent to ${mentionedEmails} !`)
    setValue('')
  }

  return (
    <div>
      <h3>Input using rc-mentions library</h3>
      <Mentions
        autoFocus
        rows={3}
        onChange={handleChange}
        options={mockUsers}
      // style={{ 'width': '100%', 'padding': '9px' }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default RCMentionsExample