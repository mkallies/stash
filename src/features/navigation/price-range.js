import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Range from 'rc-slider/lib/Range'
import styles from '../home.css'
import { INITIAL_PRICE_STATE } from '../home/constants'

export class PriceRange extends PureComponent {
  static propTypes = {
    priceRange: PropTypes.array.isRequired,
    setPriceRange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.priceRange,
    }
  }

  handlePriceRange = value => {
    this.setState({ value })
  }

  handleApply = () => {
    const { value } = this.state

    this.sendPrice(value, true)
  }

  handleClear = () => {
    this.setState({ value: INITIAL_PRICE_STATE })
    this.sendPrice(INITIAL_PRICE_STATE, false)
  }

  sendPrice = (data, shouldClose) => {
    const { setPriceRange } = this.props

    setPriceRange('price', data, shouldClose)
  }

  handleBlur = e => {
    e.stopPropagation()
  }

  render() {
    const { value } = this.state
    const [min, max] = value

    const showClearBtn = min !== 0 || max !== 500

    return (
      <div className={styles.rangeContainer} onClick={this.handleClick}>
        <Range
          allowCross={false}
          className={styles.rangeOverride}
          max={500}
          onBlur={this.handleBlur}
          onChange={this.handlePriceRange}
          value={value}
        />
        <div className={styles.priceDisplay}>{`$${min} CAD - $${max} CAD${
          max === 500 ? '+' : ''
        }`}</div>
        <div className={styles.priceButtonGroup}>
          {showClearBtn ? (
            <span className={styles.hoverCursor} onClick={this.handleClear}>
              Clear
            </span>
          ) : (
            <span className={styles.flex} />
          )}
          <span className={styles.hoverCursor} onClick={this.handleApply}>
            Apply
          </span>
        </div>
      </div>
    )
  }
}

export default PriceRange
