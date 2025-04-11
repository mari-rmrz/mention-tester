import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ReactMentionExample from './ReactMentionExample.tsx'
import RCMentionsExample from './RCMentionsExample.tsx'
import PrimeReactExample from './PrimeReactExample.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactMentionExample />
    <hr className="dotted" />
    <RCMentionsExample />
    <hr className="dotted" />
    <PrimeReactExample />
  </StrictMode>,
)
