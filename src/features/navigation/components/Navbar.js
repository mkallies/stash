import React from 'react'
import PropTypes from 'prop-types'
import { Image, Header } from 'semantic-ui-react'
import { Button } from '../../../components/Button'
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
      <ul className={styles.linkGroup}>
        {links.map((link, idx) => {
          if (user && link.name === 'Login') return null

          if (user && link.name === 'Sign up') return null

          if (!user && link.name === 'My Stash') return null

          if (link.name === 'Admin' && (!user || (user && !user.isAdmin))) {
            return null
          }

          return (
            <Button
              className="flex content-center border-transparent border-b-2 hover:border-grey-darkest hover:border-b-2 mx-4 text-xl h-full"
              key={idx}
              onClick={() => handleClick(link.path)}
            >
              <div>{link.name}</div>
            </Button>
          )
        })}
      </ul>
    </div>
  )
}

Navbar.propTypes = propTypes

export default Navbar
