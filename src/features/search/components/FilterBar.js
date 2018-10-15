import React from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown, Input } from 'semantic-ui-react'
import Range from 'rc-slider/lib/Range'
import 'rc-slider/assets/index.css'
import { TYPE_OPTIONS, WEIGHT_OPTIONS } from '../constants'
import styles from '../search.css'

const propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
  handlePriceRange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
}

const FilterBar = ({
  handleFilterClick,
  handlePriceRange,
  handleSearchClick,
}) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterOption}>
        <Input
          icon="search"
          iconPosition="left"
          onChange={(e, { value }) => handleFilterClick('query', value)}
          placeholder={"Try 'Sour Diesel'"}
          size="medium"
        />
      </div>

      <div className={styles.filterOption}>
        <label>Strain</label>
        <Dropdown
          defaultValue={TYPE_OPTIONS[0].value}
          onChange={(e, { value }) => handleFilterClick('strainType', value)}
          options={TYPE_OPTIONS}
          placeholder="Strain Type"
          selection
        />
      </div>

      <div className={styles.filterOption}>
        Price range
        <Range
          allowCross={false}
          defaultValue={[0, 100]}
          max={1500}
          onChange={handlePriceRange}
        />
      </div>

      <div className={styles.filterOption}>
        <label>Weight</label>
        <Dropdown
          defaultValue={WEIGHT_OPTIONS[0].value}
          onChange={(e, { value }) => handleFilterClick('weight', value)}
          options={WEIGHT_OPTIONS}
          placeholder="Weight"
          selection
        />
      </div>

      <Button onClick={handleSearchClick}>Search</Button>
    </div>
  )
}

FilterBar.propTypes = propTypes

export default FilterBar
