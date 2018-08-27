import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchExperiences,
  fetchAllProducts,
} from '../../features/search/actions'
import PropTypes from 'prop-types'
import { getEntities } from '../../entities/selectors'
import { isLoading } from '../../common/selectors'
import Results from '../../features/search/components/Results'

const mapState = state => ({
  experiences: getEntities(state, 'experiences'),
  isLoading: isLoading(state, 'experiences'),
})

export class Home extends Component {
  static propTypes = {
    fetchAllProducts: PropTypes.func.isRequired,
    fetchExperiences: PropTypes.func.isRequired,
    experiences: PropTypes.array,
  }

  static defaultProps = {
    experiences: undefined,
  }

  componentDidMount() {
    const { fetchExperiences, fetchAllProducts } = this.props

    fetchAllProducts()
    fetchExperiences()
  }

  render() {
    console.log(this.props)
    const { experiences } = this.props
    return <Results items={experiences} />
  }
}

export default connect(
  mapState,
  { fetchAllProducts, fetchExperiences }
)(Home)
