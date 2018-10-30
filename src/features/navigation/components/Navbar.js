import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Image, Header, Menu } from 'semantic-ui-react'
import Logo from '../../../images/mj64.png'
import styles from '../navbar.css'

const propTypes = {
  handleClick: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
}

function Navbar({ links, handleClick, user }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftNav}>
        <Image src={Logo} />
        <Header content="Stash." />
      </div>
      <Menu secondary stackable>
        {links.map((link, idx) => {
          if (user && (link.name === 'Login' || link.name === 'Sign up')) {
            return null
          }

          if (
            !user &&
            (link.name === 'Admin' ||
              link.name === 'My Stash' ||
              link.name === 'Profile')
          ) {
            return null
          }

          if (link.name === 'Admin' && (!user || (user && !user.isAdmin))) {
            return null
          }

          if (user && link.name === 'Profile') {
            return (
              <Dropdown item text={link.name}>
                <Dropdown.Menu direction="left">
                  <Dropdown.Item icon="edit" text="Edit Profile" />
                  <Dropdown.Item icon="settings" text="Account Settings" />
                  <Dropdown.Item icon="log out" text="Log out" />
                </Dropdown.Menu>
              </Dropdown>
            )
          }

          return (
            <Menu.Item
              className="flex content-center border-transparent border-b-2 hover:border-grey-darkest hover:border-b-2 mx-4 text-xl h-full"
              key={idx}
              name={link.name}
              onClick={() => handleClick(link.path)}
            />
          )
        })}
      </Menu>
    </div>
  )
}

Navbar.propTypes = propTypes

export default Navbar
