import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { logo } from '../icons';
import { ToasterContainer } from '../toaster/Toaster';
import { HeaderContainer, HeaderListIcon, LogoWrapper, MobileHeaderContainer, Navtab } from './style';

const Header = () => {
    const [clickMenu, setClickMenu] = useState<boolean>(false)
    const [mobile, setMobile] = useState<boolean>(false)

    const handleMenuIconClick = (e: any) => {
        setClickMenu(prev => !prev)
        setMobile(!mobile)
        !mobile ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
    }

    const mobileHeaderClicked = () => {
        setClickMenu(false)
        setMobile(false)
    }

    return (
        <HeaderContainer>
            {/* <Image src={logo} alt='logo' } /> */}
            <LogoWrapper>
                <Link href='/'> Be You</Link>
            </LogoWrapper>

            <Navtab className='desktop-header'>
                <Link href='/events'> Events </Link>
            </Navtab>

            <Navtab className='desktop-header'>
                <Link href='/wishList'> WishList </Link>
            </Navtab>

            <Navtab className='desktop-header'>
                <Link href='/aboutUs'>About Us</Link>
            </Navtab>

            <Navtab className='desktop-header'>
                <Link href='/contactUs'> Contact Us </Link>
            </Navtab>

            <Navtab className='desktop-header'>
                <Link href='/profile'> Profile </Link>
            </Navtab>

            <HeaderListIcon onClick={handleMenuIconClick} click={!clickMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HeaderListIcon>

            {
                mobile ? <MobileHeaderContainer>
                    <Navtab onClick={mobileHeaderClicked}>
                        <Link href='/events'> Events </Link>
                    </Navtab>

                    <Navtab onClick={mobileHeaderClicked}>
                        <Link href='/wishList'> WishList </Link>
                    </Navtab>

                    <Navtab onClick={mobileHeaderClicked}>
                        <Link href='/aboutUs'>About Us</Link>
                    </Navtab>

                    <Navtab onClick={mobileHeaderClicked}>
                        <Link href='/contactUs'> Contact Us </Link>
                    </Navtab>

                    <Navtab onClick={mobileHeaderClicked}>
                        <Link href='/profile'> Profile </Link>
                    </Navtab>

                </MobileHeaderContainer> : <>
                </>
            }

            <ToasterContainer />

        </HeaderContainer>
    )
}

export default Header;