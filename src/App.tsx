import React, { FC } from 'react'

import { Message } from './Message'

export const App: FC<{ title: string }> = ({ title }) => (
  <>
    <h1>{title}</h1>
    <Message />
    <img src="/assets/img/icon.png" alt="" />
  </>
)
