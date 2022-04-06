//In the Navbar.js file
import React, { useState } from 'react'
import { BiMenu, BiX } from "react-icons/bi";
// import { MenuIcon,Menu } from './Navbar.style';
import {Button} from '../../GlobalStyles';
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,Menu,MenuLink,MenuItemBtn,MenuLinkBtn,MenuItem
} from './Navbar.style';
const Navbar = () => {
//click is the initial state and setclick will be the update state
    const [click, setClick] = useState(false);

//Create a function to handle the click state of the menu icon. 
//if the menu icon was the menu bar at the beginning when clicked it will have the close icon
    const handleClick = () => setClick(!click);

    return (
        <>
            {/* <IconContext.Provider value={{ color: '#fff'}}>  */}
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            React Js
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink  to="/">Home</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink  to="/about">About</MenuLink>
                            </MenuItem>
                          
                            <MenuItemBtn>
                                {/* {button?( */}
                                    <MenuLinkBtn to="/register">
                                        <Button primary>Register</Button>
                                    </MenuLinkBtn>
                                  
                                {/* // ): ( */}
                                    {/* <MenuLinkBtn to="/order-now">
                                        <Button primary bigFont onClick={closeMenu}>Order Now</Button>
                                    </MenuLinkBtn> */}
                                {/* // ) */}
                                {/* // } */}
                            </MenuItemBtn>
                              
                            <MenuItemBtn>
                                {/* {button?( */}
                                    <MenuLinkBtn to="/login+">
                                        <Button primary>Login</Button>
                                    </MenuLinkBtn>
                                  
                                {/* // ): ( */}
                                    {/* <MenuLinkBtn to="/order-now">
                                        <Button primary bigFont onClick={closeMenu}>Order Now</Button>
                                    </MenuLinkBtn> */}
                                {/* // ) */}
                                {/* // } */}
                            </MenuItemBtn>
                        </Menu>

                    </NavbarContainer>


                </Nav>
            {/* </IconContext.Provider> */}
        </>
    )
}

export default Navbar;