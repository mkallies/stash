import React from 'react'
import { Button, Input } from '../../../components'
import PropTypes from 'prop-types'

const propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
}

const inputs = ['storeName', 'storeUrl']

const Admin = ({ handleInput, handleSubmit, values }) => {
  console.log(values)
  return (
    <div>
      <h1>Add Store</h1>
      {inputs.map(input => {
        return (
          <React.Fragment key={input}>
            <label>Enter {input}</label>
            <Input
              name={input}
              onChange={handleInput}
              value={values[input] || ''}
            />
          </React.Fragment>
        )
      })}
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

Admin.propTypes = propTypes

export default Admin
