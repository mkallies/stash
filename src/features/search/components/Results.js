import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../../components/Card'
import { Header } from '../../../components/Header'

const propTypes = {
  items: PropTypes.array,
}

const defaultProps = {
  items: undefined,
}

const Results = ({ items }) => {
  console.log('items', items)
  if (!items) return null

  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx}>
          <Header key={idx} title={item.title} />
          {item.items.map((item, idx) => <Card key={idx}>{item.title}</Card>)}
        </div>
      ))}
    </div>
  )
}

Results.defaultProps = defaultProps
Results.propTypes = propTypes

export default Results
