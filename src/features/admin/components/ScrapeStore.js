import React from 'react'
import { Button, Grid, Header, List } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const ScrapeStore = ({
  handleStart,
  stores,
  storesToScrape,
  addStore,
  removeStore,
}) => {
  // display stores + add

  return (
    <Grid divided>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header>Current stores:</Header>
          <List divided selection>
            {stores.map(store => {
              return (
                <List.Item key={store._id} onClick={() => addStore(store)}>
                  <List.Content>
                    <List.Header>{store.name}</List.Header>
                    <List.Content>
                      <span>
                        Last updated at:{' '}
                        {new Date(store.updatedAt).toLocaleString()}
                      </span>
                    </List.Content>
                  </List.Content>
                </List.Item>
              )
            })}
          </List>
        </Grid.Column>

        <Grid.Column>
          <Header>Stores to scrape:</Header>
          <List divided selection>
            {storesToScrape.map(store => {
              return (
                <List.Item key={store._id} onClick={() => removeStore(store)}>
                  <List.Content>
                    <List.Header>{store.name}</List.Header>
                    <List.Content>
                      <span>
                        Last updated at:{' '}
                        {new Date(store.updatedAt).toLocaleString()}
                      </span>
                    </List.Content>
                  </List.Content>
                </List.Item>
              )
            })}
          </List>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Button disabled={!storesToScrape.length} onClick={handleStart}>
          Start
        </Button>
      </Grid.Row>
    </Grid>
  )

  // display selected + remove
}

ScrapeStore.propTypes = {
  addStore: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  removeStore: PropTypes.func.isRequired,
  stores: PropTypes.array.isRequired,
  storesToScrape: PropTypes.array.isRequired,
}

export default ScrapeStore
