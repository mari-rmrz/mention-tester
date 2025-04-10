import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactMentionExample from './ReactMentionExample.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactMentionExample />
  </StrictMode>,
)
