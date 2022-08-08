import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { logo } from '../icons';
import { ToasterContainer } from '../toaster/Toaster';
import { HeaderContainer, LogoWrapper, Navtab } from './style';

const Header = () => {
    return (
        <HeaderContainer>
            {/* <Image src={logo} alt='logo' } /> */}
            <LogoWrapper>
                <Link href='/'> Be You</Link>
            </LogoWrapper>

            <Navtab>
                <Link href='/events'> Events </Link>
            </Navtab>

            <Navtab>
                <Link href='/wishList'> WishList </Link>
            </Navtab>

            <Navtab>
                <Link href='/aboutUs'>About Us</Link>
            </Navtab>

            <Navtab>
                <Link href='/contactUs'> Contact Us </Link>
            </Navtab>
            
            <Navtab>
                <Link href='/profile'> Profile </Link>
            </Navtab>

            <ToasterContainer />
            
        </HeaderContainer>
    )
}

export default Header;