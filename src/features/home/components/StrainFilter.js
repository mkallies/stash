import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react'
import styles from '../home.css'
import { INITIAL_STRAIN_STATE } from '../constants'

export class StrainFilter extends Component {
  static propTypes = {
    currentStrainSelection: PropTypes.object.isRequired,
    setStrainType: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    const { currentStrainSelection } = props

    this.state = {
      ...currentStrainSelection,
    }
  }

  handleToggle = (e, { name }) => {
    const { [name]: prevState } = this.state
    this.setState({ [name]: !prevState })
  }

  handleApply = () => {
    this.sendStrain(this.state)
  }

  handleClear = () => {
    this.setState({
      ...INITIAL_STRAIN_STATE,
    })
    this.sendStrain(INITIAL_STRAIN_STATE)
  }

  sendStrain = data => {
    const { setStrainType } = this.props

    setStrainType('strainType', data)
  }

  render() {
    const { indica, sativa, hybrid } = this.state

    const showClearBtn = indica || sativa || hybrid

    return (
      <div className={styles.strainTypeContainer}>
        <div className={styles.strainOption}>
          <Checkbox
            checked={indica}
            label="Indica"
            name="indica"
            onChange={this.handleToggle}
          />
          <div className={styles.strainDescription}>
            Indica strains are believed to be physically sedating, perfect for
            relaxing with a movie or as a nightcap before bed.
          </div>
        </div>

        <div className={styles.strainOption}>
          <Checkbox
            checked={sativa}
            label="Sativa"
            name="sativa"
            onChange={this.handleToggle}
          />
          <div className={styles.strainDescription}>
            Sativas tend to provide more invigorating, uplifting cerebral
            effects that pair well with physical activity, social gatherings,
            and creative projects.
          </div>
        </div>

        <div className={styles.strainOption}>
          <Checkbox
            checked={hybrid}
            label="Hybrid"
            name="hybrid"
            onChange={this.handleToggle}
          />
          <div className={styles.strainDescription}>
            Hybrid strains contain a mix of sativa and indica genetics and,
            depending on their lineage, can take on characteristics from both
            strain families.
          </div>
        </div>

        <div className={styles.priceButtonGroup}>
          {showClearBtn ? (
            <span onClick={this.handleClear}>Clear</span>
          ) : (
            <span className={styles.flex} />
          )}
          <span onClick={this.handleApply}>Apply</span>
        </div>
      </div>
    )
  }
}

export default StrainFilter
