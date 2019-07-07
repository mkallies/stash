import React from 'react'
import ReactDOM from 'react-dom'
import Root from './features/root/containers/Root'

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React)
}

ReactDOM.render(<Root />, document.getElementById('root'))
