import React from 'react';
import { HeaderContainer, Logo, Navbar, NavLink, SearchBarWrapper, SearchBar, SearchButton } from './Header.styled';
import { FaSearch } from 'react-icons/fa';



const Header = () => {
    return (
      <HeaderContainer>
        <Logo>Task Manager</Logo>

          <Navbar>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">Tasks</NavLink>
            <NavLink href="#about">Calendar</NavLink>
            <NavLink href="#contact">Projects</NavLink>
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
