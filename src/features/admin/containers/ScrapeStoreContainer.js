import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStores, scrapeStores } from '../actions'
import PropTypes from 'prop-types'
import { getEntities } from '../../../entities/selectors'
import { isLoading } from '../../../common/selectors'
import ScrapeStore from '../components/ScrapeStore'
import { toast } from 'react-toastify'

const mapState = state => ({
  isLoading: isLoading(state, 'stores'),
  stores: getEntities(state, 'stores'),
})

export class ScrapeStoreContainer extends Component {
  static propTypes = {
    getStores: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    scrapeStores: PropTypes.func.isRequired,
    stores: PropTypes.array,
  }

  static defaultProps = {
    stores: [],
  }

  state = {
    storesToScrape: [],
  }

  componentDidMount() {
    const { getStores } = this.props

    getStores()
  }

  addStore = store => {
    const { storesToScrape } = this.state

    this.setState({
      storesToScrape: storesToScrape.concat(store),
    })
  }

  removeStore = store => {
    const { storesToScrape } = this.state

    this.setState({
      storesToScrape: storesToScrape.filter(s => s._id !== store._id),
    })
  }

  startScrape = () => {
    const { scrapeStores } = this.props
    const { storesToScrape } = this.state

    scrapeStores(storesToScrape)

    toast.success('Scraping stores!')
    this.setState({ storesToScrape: [] })
  }

  render() {
    const { storesToScrape } = this.state
    const { isLoading, stores } = this.props

    if (!stores || !stores.length) {
      return <div>No Stores</div>
    } else if (isLoading) {
      return <div>LOADING</div>
    } else {
      return (
        <ScrapeStore
          addStore={this.addStore}
          handleStart={this.startScrape}
          removeStore={this.removeStore}
          stores={stores}
          storesToScrape={storesToScrape}
        />
      )
    }
  }
}

export default connect(
  mapState,
  { getStores, scrapeStores }
)(ScrapeStoreContainer)
