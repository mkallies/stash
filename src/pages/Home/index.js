import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExperiences } from '../../features/search/actions'
import PropTypes from 'prop-types'
import { getEntity } from '../../entities/selectors'
import { isLoading } from '../../common/selectors'
import Results from '../../features/search/components/Results'

const mapState = state => ({
  experiences: getEntity(state, 'experiences'),
  isLoading: isLoading(state, 'experiences'),
})

export class Home extends Component {
  static propTypes = {
    fetchExperiences: PropTypes.func.isRequired,
    experiences: PropTypes.array,
  }

  static defaultProps = {
    experiences: undefined,
  }

  componentDidMount() {
    const { fetchExperiences } = this.props

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
  { fetchExperiences }
)(Home)
