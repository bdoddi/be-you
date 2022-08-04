import Link from 'next/link';
import React from 'react'
import { HeaderContainer, LogoWrapper, Navtab } from './style';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoWrapper>
               <Link href='/'>Be You</Link> 
            </LogoWrapper>

            <Navtab>
                <Link href='/events'> Events </Link>
            </Navtab>

            <Navtab>
                WishList
            </Navtab>

            <Navtab>
                About Us
            </Navtab>

            <Navtab>
                Contact Us
            </Navtab>

            <Navtab>
                Profile
            </Navtab>
        </HeaderContainer>
    )
}

export default Header;