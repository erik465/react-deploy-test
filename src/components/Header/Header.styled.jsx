import styled from 'styled-components'


export const HeaderContainer = styled.header`
    background-color: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
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



export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 560px;
`;

export const SearchBar = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
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