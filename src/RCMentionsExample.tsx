import React, { useState } from 'react'
import Mentions from '@rc-component/mentions'


const RCMentionsExample: React.FC = () => {
  const { Option } = Mentions;

  const mockUsers = [
    { display: 'Alice', id: 'alice@mail.com' },
    { display: 'Bob', id: 'bob@mail.com' },
    { display: 'Carlos', id: 'carlos@mail.com' },
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
      <Mentions onChange={handleChange} autoFocus>
        {mockUsers.map((item) => {
          return (
            <Option value={`${item.display}`}>{item.display}</Option>
          )
        })}
      </Mentions>
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default RCMentionsExample