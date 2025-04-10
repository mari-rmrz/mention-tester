import React, { useState } from 'react'
import Mentions from '@rc-component/mentions'

const RCMentionsExample: React.FC = () => {

  const mockUsers = [
    { value: 'Alyson', label: 'Alyson', email: 'alyson@mail.com' },
    { value: 'Barry', label: 'Barry', email: 'barry@mail.com' },
    { value: 'Carol', label: 'Carol', email: 'carol@mail.com' },
  ]

  const [value, setValue] = useState("")
  const [email, setEmail] = useState("")

  const handleChange = (e: any) => {
    console.log('e?', e)
    setValue(e.target.value)
  }

  const handleSend = () => {
    alert(`message ${value} sent to ${email} !`)
    setValue('')
  }

  const handleSelect = (option: any) => {
    console.log('opt?', option)
    setEmail(option.email)
  }

  return (
    <div>
      <h3>Input using rc-mentions library</h3>
      <Mentions
        autoFocus
        rows={3}
        onChange={handleChange}
        options={mockUsers}
        onSelect={handleSelect}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default RCMentionsExample