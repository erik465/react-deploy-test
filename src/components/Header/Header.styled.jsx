import styled from 'styled-components'


export const HeaderContainer = styled.header`
    background-color: ${props => props.theme.headerBgColor};
    color: ${props => props.theme.headerTextColor};
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
  color: ${props => props.theme.headerTextColor};
  text-decoration: none;
  margin-left: 1rem;
  transition: 1s;

  &:hover {
    color: ${props => props.theme.headerHighlightColor}; 
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 560px;
`;


