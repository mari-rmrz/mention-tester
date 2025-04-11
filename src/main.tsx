import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import RCMentionsExample from './RCMention/RCMentionsExample.tsx'

import './styles/index.css'
import SingleLineExample from './ReactMention/SingleLineExample.tsx'
import TextAreaExample from './ReactMention/TextAreaExample.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SingleLineExample />
    <TextAreaExample />
    <RCMentionsExample />
  </StrictMode>,
)
