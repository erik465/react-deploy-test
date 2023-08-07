import styled from 'styled-components'


export const HeaderContainer = styled.header`
    background-color: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 80px;
`

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  transition: 1s ease-in-out;

  &:hover {
    letter-spacing: 5px;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 1rem;
  transition: 1s;

  &:hover {
    color: #ff9800; /* Yellow-orangeish color */
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 560px;
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const SearchBar = styled.input`
  padding: 3px 5px;
  border: none;
  border-radius: 5px 0 0 5px;
  width: 150px;
  border: none;
  outline: none; 
`;

export const SearchButton = styled.button`
  height: 36px; 
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #ff9800; /* Yellow-orangeish color */
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;

  svg{
    fill: currentColor;
    transition: 1s;
  }

  :hover {
    color: #212020;
  }
`;

