import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { palette } from '../../constants/theme'

import { SceneContainer } from '../../containers/Scene'

export const App = () => (
  <>
    <GlobalStyle />
    <SceneContainer />
  </>
)

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }
  body {
    min-height: 100vh;
    background-color: #010101;
    color: ${palette.white};
    word-wrap: break-word;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, 'メイリオ', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
  }
  input, button, textarea {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: inherit;
    color: inherit;
  }
`
