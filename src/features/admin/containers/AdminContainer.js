import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveStore } from '../actions'
import AddStoreContainer from './AddStoreContainer'
import ScrapeStoreContainer from './ScrapeStoreContainer'
import { Grid, Container } from 'semantic-ui-react'
import Sidebar from '../components/Sidebar'
import { Switch, Route } from 'react-router-dom'

export class AdminContainer extends Component {
  render() {
    return (
      <Container fluid>
        <Grid>
          <Grid.Column width={3}>
            <Sidebar />
          </Grid.Column>

          <Grid.Column width={13}>
            <Switch>
              <Route component={ScrapeStoreContainer} path="/admin/scrape" />
              <Route component={AddStoreContainer} path="/admin/add" />
            </Switch>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default connect(
  null,
  { saveStore }
)(AdminContainer)
