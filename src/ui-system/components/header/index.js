import styled from '@emotion/styled'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../components/logo'

const NavItem = styled.li`
  font-size: var(--text-l);

  a {
    text-decoration: none;
    transition: 0.3s;
    display: block;
    transform: translateX(0rem);
    position: relative;

    &:before {
      content: '';
      width: 1.5rem;
      height: 2px;
      display: block;
      position: absolute;
      left: -2rem;
      transform: scale(0, 1);
      top: 0;
      bottom: 0;
      margin: auto;
      transition: 0.3s;
    }
  }

  .activeMenuNav {
    color: var(--c-red);
    transform: translateX(2rem);

    &:before {
      background-color: var(--c-red);
      transform: scale(1, 1);
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = () => {
  return (
    <Wrapper>

    <nav>
      <ul>
        <NavItem>
          <NavLink activeClassName="activeMenuNav" exact to="/">home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="activeMenuNav" to="/about">about</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="activeMenuNav" to="/artists">artists</NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeClassName="activeMenuNav" to="/releases">releases</NavLink>
        </NavItem>
      </ul>
    </nav>
    <Logo color="var(--c-red)" />
    </Wrapper>
  )
}

export default Header