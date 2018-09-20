import React from 'react'
import { Input } from '../../../components'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

const propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
}

const inputs = [
  { label: 'Store name', name: 'storeName', placeholder: 'Best Dispensary' },
  {
    label: 'Store URL',
    name: 'storeUrl',
    placeholder: 'https://bestdispensary.com',
  },
  {
    label: 'Product category path',
    name: 'categoryPath',
    placeholder: '/product-category/marijuana-flower/:type',
  },
  {
    label: 'Shop path for products (/shop/marijuana-flower/:flower)',
    name: 'shopPath',
    placeholder: '/shop/marijuana-flower/:type',
  },
  {
    label: 'Product container class to grab relevant products',
    name: 'containerClass',
    placeholder: '`.shop-container a` or `.product-listing a`',
  },
  {
    label: 'TODO: enter category type + url',
    name: 'categoryType',
    placeholder: 'https://boutiquecannabis.ca/cannabis-product/buds/indica',
  },
]

const AddStore = ({ handleInput, handleSubmit, values }) => {
  return (
    <div>
      <h1>Add Store</h1>
      {inputs.map(input => {
        return (
          <React.Fragment key={input.name}>
            <label>Enter {input.label}</label>
            <Input
              name={input.name}
              onChange={handleInput}
              placeholder={input.placeholder}
              value={values[input.name] || ''}
            />
          </React.Fragment>
        )
      })}
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

AddStore.propTypes = propTypes

export default AddStore
