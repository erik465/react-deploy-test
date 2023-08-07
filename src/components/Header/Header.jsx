import React from 'react';
import { HeaderContainer, Logo, Navbar, NavLink, SearchBar } from './Header.styled';

const Header = () => {
    return (
      <HeaderContainer>
        <Logo>My Logo</Logo>

          <Navbar>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Navbar>
          <SearchBar type="text" placeholder="Search..." />
      </HeaderContainer>
    );
};

export default Header;
