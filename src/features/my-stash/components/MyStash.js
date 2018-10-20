import React from 'react'
// import PropTypes from 'prop-types'
import { Container, Message } from 'semantic-ui-react'

function MyStash() {
  return (
    <Container>
      <Message style={{ 'margin-top': '50px' }}>
        <Message.Header>Coming soon</Message.Header>
        <p>Soon you will be able to add products to your stash</p>
      </Message>
    </Container>
  )
}

MyStash.propTypes = {}

export default MyStash
