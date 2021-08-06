import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
  flex-wrap: wrap;
  position: sticky;
  background-color: white;
  top: 0;
  z-index: 100;
  box-shadow: ${({ navbar }) => (navbar ? "0 10px 20px 0 rgba(0,0,0,.05);" : "")};
  @media (max-width: 885px) {
    justify-content: space-between;
  }
`;

export const HamburgerMenu = styled.div`
  font-size: 20px;
  display: none;
  cursor: pointer;
  @media (max-width: 885px) {
    display: flex;
  }
`;
export const AccountLink = styled.span``;

export const LogoContainer = styled.img`
  height: 2.3rem;
  padding: 1.2rem 0;
  @media (max-width: 885px) {
    height: 2rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 885px) {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ listOpen }) => (listOpen ? "380px" : "0")};
    transition: max-height 0.3s ease-in;
    z-index: 1;
    /* position: absolute; */
  }
`;

export const MenuLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in;
  &:hover {
    color: orange;
  }
  @media (max-width: 885px) {
    font-size: 0.9rem;
  }
`;
