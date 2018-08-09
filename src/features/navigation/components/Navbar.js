import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

const propTypes = {
  handleClick: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired,
}

const NavbarContainer = styled.div`
  align-content: center;
  display: flex;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid rgb(228, 228, 228);
  height: 90px;
`

const VerticalCenter = styled.div`
  display: flex;
  align-items: center;
`

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

const InputContainer = styled.div`
  height: 40px;
  width: 460px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Navbar = ({ links, handleClick }) => {
  return (
    <NavbarContainer>
      <VerticalCenter>
        <div>stash icon here</div>
        <InputContainer>
          <Input placeholder={"Try 'I want to fall asleep...'"} />
        </InputContainer>
      </VerticalCenter>
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
    </NavbarContainer>
  )
}

Navbar.propTypes = propTypes

export default Navbar
