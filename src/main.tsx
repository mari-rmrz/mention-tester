import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactMentionExample from './ReactMentionExample.tsx'
import './index.css'
import RCMentionsExample from './RCMentionsExample.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactMentionExample />
    <hr className="dotted" />
    <RCMentionsExample />
  </StrictMode>,
)
