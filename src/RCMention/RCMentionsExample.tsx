import React, { useState } from 'react'
import Mentions from '@rc-component/mentions'

const RCMentionsExample: React.FC = () => {

  const mockUsers = [
    { value: 'Alyson', label: 'Alyson', email: 'alyson@mail.com' },
    { value: 'Barry', label: 'Barry', email: 'barry@mail.com' },
    { value: 'Carol', label: 'Carol', email: 'carol@mail.com' },
  ]

  const [value, setValue] = useState("")

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleSend = () => {
    alert(`message sent to ${value} !`)
    setValue('')
  }

  return (
    <div>
      <h3>Input using rc-mentions library 🚫</h3>
      <ul>
        <li>❌no keyboard control</li>
        <li>❌value not getting set</li>
        <li>❌dropdown sometimes stays on while still typing</li>
      </ul>
      <Mentions
        autoFocus
        rows={3}
        onChange={handleChange}
        options={mockUsers}
        placeholder={"Mention people using '@'"}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default RCMentionsExample