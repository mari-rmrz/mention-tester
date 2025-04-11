import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ReactMentionExample from './ReactMention/ReactMentionExample.tsx'
import RCMentionsExample from './RCMention/RCMentionsExample.tsx'
import PrimeReactExample from './PrimeReact/PrimeReactExample.tsx'

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
