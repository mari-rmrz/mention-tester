import React, { useState } from 'react'
import { Mention } from 'primereact/mention'

const PrimeReactExample: React.FC = () => {
  const [value, setValue] = useState("")

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const mockUsers = [
    { display: 'Alice', id: 'alice@mail.com' },
    { display: 'Bob', id: 'bob@mail.com' },
    { display: 'Carlos', id: 'carlos@mail.com' },
  ]

  const handleSend = () => {
    alert(`message: ${value} !`)
    setValue('')
  }

  return (
    <div>
      <h3>Input using primereact library</h3>
      <Mention
        value={value}
        onChange={handleChange}
        suggestions={mockUsers}
        field="textarea"
        placeholder='Enter @ to mention people'
        rows={5}
        cols={40}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default PrimeReactExample