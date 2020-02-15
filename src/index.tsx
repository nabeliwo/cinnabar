import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './components/App'

const render = (AppComponent: typeof App) => {
  ReactDOM.render(<AppComponent />, document.getElementById('root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const { App: AppComponent }: { App: typeof App } = require('./components/App')
    render(AppComponent)
  })
}
