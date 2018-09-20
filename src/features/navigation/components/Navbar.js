import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image, Input } from 'semantic-ui-react'
import { Button } from '../../../components/Button'
import Logo from '../../../images/mj64.png'
import styles from '../navbar.css'

const propTypes = {
  handleClick: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
}

const LinkGroup = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
`

const NavLink = styled(Button)`
  line-height: 90px;
  display: inline-block;
  width: 130px;
`

const WithHoverBottom = styled.div`
  height: 100%;

  border-bottom: ${({ isActive }) =>
    isActive && '2px solid rgb(118, 118, 118)'};

  &:hover {
    border-bottom: 2px solid rgb(118, 118, 118);
  }
`

const Navbar = ({ links, handleClick, user }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftNav}>
        <Image src={Logo} />
        <Input
          className={styles.searchBar}
          icon="search"
          placeholder={"Try 'I want to fall asleep...'"}
        />
      </div>
      <LinkGroup>
        {links.map((link, idx) => (
          <NavLink
            fontSize={18}
            fontWeight={600}
            key={idx}
            onClick={() => handleClick(link.path)}
          >
            <WithHoverBottom>{link.name}</WithHoverBottom>
          </NavLink>
        ))}
      </LinkGroup>
    </div>
  )
}

Navbar.propTypes = propTypes

export default Navbar
