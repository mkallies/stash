import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { TYPE_OPTIONS, WEIGHT_OPTIONS } from '../constants'

const propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
  price: PropTypes.array.isRequired,
  strainType: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
}

const FilterBar = ({ handleFilterClick, strainType, price, weight }) => {
  return (
    <div>
      <Dropdown
        onChange={(e, { value }) => handleFilterClick('strainType', value)}
        options={TYPE_OPTIONS}
        placeholder="Strain Type"
        selection
      />

      <div>
        Price range
        <Range allowCross={false} defaultValue={[0, 100]} max={1500} />
      </div>

      <Dropdown
        onChange={(e, { value }) => handleFilterClick('weight', value)}
        options={WEIGHT_OPTIONS}
        placeholder="Weight"
        selection
      />
    </div>
  )
}

FilterBar.propTypes = propTypes

export default FilterBar
