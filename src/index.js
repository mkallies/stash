import React from 'react'
import ReactDOM from 'react-dom'
import Root from './features/root/containers/Root'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

ReactDOM.render(<Root />, document.getElementById('root'))
