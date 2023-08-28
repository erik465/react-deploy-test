import React from 'react';
import { HeaderContainer, Logo, Navbar, NavLink} from './Header.styled';



const Header = ({setDarkMode, isDarkMode}) => {
    return (
      <HeaderContainer>
        <Logo>Task Manager</Logo>

          <Navbar>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">Tasks</NavLink>
            <NavLink href="#about">Calendar</NavLink>
            <NavLink href="#contact">Projects</NavLink>
          </Navbar>
          <button onClick={setDarkMode}>Set {isDarkMode ? 'light' : 'dark'} mode</button>
          
      </HeaderContainer>
    );
};

export default Header;
