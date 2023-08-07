import React from 'react';
import { HeaderContainer, Logo, Navbar, NavLink, SearchBarWrapper, SearchBar, SearchButton } from './Header.styled';
import { FaSearch } from 'react-icons/fa';



const Header = () => {
    return (
      <HeaderContainer>
        <Logo>My Logo</Logo>

          <Navbar>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Navbar>
          <SearchBarWrapper>
            <SearchBar type="text" placeholder="Search..." />
            <SearchButton>
              <FaSearch />
            </SearchButton>
          </SearchBarWrapper>
      </HeaderContainer>
    );
};

export default Header;
