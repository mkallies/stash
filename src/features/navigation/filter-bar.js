import React from 'react'
import PropTypes from 'prop-types'
import { Button, Dropdown, Input, Popup } from 'semantic-ui-react'
import 'rc-slider/assets/index.css'
import { WEIGHT_OPTIONS } from '../home/constants'
import styles from '../home.css'
import PriceRange from './PriceRange'
import StrainFilter from './StrainFilter'
import capitalize from 'lodash/capitalize'

const getStrainBtnTitle = strains => {
  if (!strains.length) {
    return 'Strain type'
  } else if (strains.length === 1) {
    return capitalize(strains[0])
  } else {
    return strains.length
  }
}

const propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  price: PropTypes.array.isRequired,
  selectedStrains: PropTypes.array.isRequired,
  strainType: PropTypes.object.isRequired,
  weight: PropTypes.string.isRequired,
  currentPopover: PropTypes.string,
}

const defaultProps = {
  currentPopover: undefined,
}

const FilterBar = ({
  currentPopover,
  handleClose,
  handleFilterClick,
  handleOpen,
  handleSearchClick,
  price,
  strainType,
  weight,
  selectedStrains,
}) => {
  const [min, max] = price

  const showPrice = min !== 0 || max !== 500

  const strainTitle = getStrainBtnTitle(selectedStrains)

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
        <Popup
          content={(
            <StrainFilter
              currentStrainSelection={strainType}
              setStrainType={handleFilterClick}
            />
          )}
          name="strainType"
          on="click"
          onClose={handleClose}
          onOpen={handleOpen}
          open={currentPopover === 'strainType'}
          position="bottom center"
          trigger={
            <Button className={styles.filterButton} content={strainTitle} />
          }
        />
      </div>

      <div className={styles.filterOption}>
        <Popup
          content={
            <PriceRange priceRange={price} setPriceRange={handleFilterClick} />
          }
          name="price"
          on="click"
          onClose={handleClose}
          onOpen={handleOpen}
          open={currentPopover === 'price'}
          position="bottom center"
          trigger={(
            <Button
              className={styles.filterButton}
              content={
                showPrice
                  ? `$${min} - $${max}${max === 500 ? '+' : ''}`
                  : 'Price'
              }
            />
          )}
        />
      </div>

      <div className={styles.filterOption}>
        <Popup
          content={(
            <Dropdown
              onChange={(e, { value }) => handleFilterClick('weight', value)}
              options={WEIGHT_OPTIONS}
              placeholder="Weight"
              selection
              value={weight}
            />
          )}
          name="weight"
          on="click"
          onClose={handleClose}
          onOpen={handleOpen}
          open={currentPopover === 'weight'}
          position="bottom center"
          trigger={(
            <Button
              className={styles.filterButton}
              content={weight ? `${weight} g` : 'Weight'}
            />
          )}
        />
      </div>

      <Button
        className={`${styles.filterButton} ${styles.filterSearch}`}
        onClick={handleSearchClick}
      >
        Search
      </Button>
    </div>
  )
}

FilterBar.propTypes = propTypes
FilterBar.defaultProps = defaultProps

export default FilterBar
