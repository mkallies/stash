import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveStore } from '../actions'
import { Button } from 'semantic-ui-react'
import AddStoreContainer from './AddStoreContainer'
import ScrapeStoreContainer from './ScrapeStoreContainer'

export class AdminContainer extends Component {
  state = {
    currentAction: '',
  }

  setAction = action => {
    this.setState({
      currentAction: action,
    })
  }

  renderCurrentAction = action => {
    if (action === 'addStore') {
      return <AddStoreContainer />
    } else if (action === 'scrapeStore') {
      return <ScrapeStoreContainer />
    }
  }

  render() {
    const { currentAction } = this.state

    return (
      <div>
        <Button onClick={() => this.setAction('addStore')}>Add Store</Button>
        <Button onClick={() => this.setAction('scrapeStore')}>
          Scrape a store
        </Button>
        <div>{this.renderCurrentAction(currentAction)}</div>
      </div>
    )
  }
}

export default connect(
  null,
  { saveStore }
)(AdminContainer)
