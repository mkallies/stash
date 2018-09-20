import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Segment basic className="sidebar-nav">
      <Menu size="massive" text vertical>
        <Menu.Item as={NavLink} icon="home" name="Dashboard" to="/admin" />
        <Menu.Item
          as={NavLink}
          icon="plus square outline"
          name="Add Store"
          to="/admin/add"
        />
        <Menu.Item
          as={NavLink}
          icon="file code outline"
          name="Scrape Store"
          to="/admin/scrape"
        />
      </Menu>
    </Segment>
  )
}

export default Sidebar
