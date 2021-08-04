import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0; 
    /* box-shadow: 0 2px 4px 0 rgba(0,0,0,.2); */
`

export const HamburgerMenu = styled.div`
    font-size: 40px;
    display: none;
    cursor: pointer;
    @media (max-width: 885px){
        display: flex;
    }
`
export const AccountLink = styled.span`

`

export const LogoContainer = styled.img`
    height: 50px;
`

export const Menu = styled.div`
    padding: 1rem 0.5rem;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 885px){
        display: flex;
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({listOpen}) => (listOpen ? "380px": "0")};
        transition: max-height 0.3s ease-in;
        z-index: 1;
        overflow-x: hidden;
        /* position: absolute; */
    }
`

export const MenuLink = styled.a`
    padding: 1rem;
    color: black;
    text-decoration: none;
    font-weight: 300;
    font-size: 1.4rem;
    transition: all 0.3s ease-in;
    &:hover{
        color: orange;
    }
`