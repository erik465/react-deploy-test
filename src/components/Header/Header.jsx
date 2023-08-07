import React from 'react';
import { HeaderContainer, Logo, Navbar, SearchBar } from './Header.styled';

const Header = () => {
    return (
      <HeaderContainer>
        <Navbar>
          <Logo>My Logo</Logo>
          <SearchBar type="text" placeholder="Search..." />
        </Navbar>
      </HeaderContainer>
    );
};

export default Header;
