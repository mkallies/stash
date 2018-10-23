import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Input, Popup } from 'semantic-ui-react'
import 'rc-slider/assets/index.css'
import { WEIGHT_OPTIONS } from '../constants'
import styles from '../home.css'
import PriceRange from './PriceRange'
import StrainFilter from './StrainFilter'
import { Button } from '../../../components/Button'

const propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  price: PropTypes.array.isRequired,
  strainType: PropTypes.object.isRequired,
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
          trigger={(
            <Button
              className="hover:bg-grey-lightest rounded shadow"
              content="Strain type"
              withBorder
              withPadding
            />
          )}
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
              className="hover:bg-grey-lightest rounded shadow"
              content="Price"
              withBorder
              withPadding
            />
          )}
        />
      </div>

      <div className={styles.filterOption}>
        <Popup
          content={(
            <Dropdown
              defaultValue={WEIGHT_OPTIONS[0].value}
              onChange={(e, { value }) => handleFilterClick('weight', value)}
              options={WEIGHT_OPTIONS}
              placeholder="Weight"
              selection
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
              className="hover:bg-grey-lightest rounded shadow"
              content="Weight"
              withBorder
              withPadding
            />
          )}
        />
      </div>

      <Button
        className="bg-green-light text-white hover:text-white hover:bg-green rounded shadow"
        onClick={handleSearchClick}
        withBorder
        withPadding
      >
        Search
      </Button>
    </div>
  )
}

FilterBar.propTypes = propTypes
FilterBar.defaultProps = defaultProps

export default FilterBar
