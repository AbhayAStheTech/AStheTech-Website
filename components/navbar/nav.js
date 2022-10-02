import React, { useState } from "react";
import tw from "twin.macro";
import Image from 'next/image';
import logo from "../../images/logo/logo_black.png";
// import { useUserContext } from "../../services/userContext";
import { useRouter } from "next/router";

const CompanyLogoImg = tw.div`w-48`;
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;
export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export default function NavBar() {
    const [active, setActive] = useState(false);

    // const { user, logOutUser } = useUserContext();
    const router = useRouter();

    // const redirectToLogin = () => {
    //     window.localStorage.clear();
    //     logOutUser(router);
    // }

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className='flex items-center flex-wrap p-3 sm:px-10'>

            <a href='/' className='inline-flex items-center p-2 mr-4 '>
                <CompanyLogoImg>
                    <Image src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                </CompanyLogoImg>
            </a>
            <button
                className=' inline-flex p-3 hover:bg-secondary-500 rounded lg:hidden ml-auto hover:text-white outline-none'
                onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
                className={`${active ? '' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
                <div
                    className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-center flex flex-col lg:h-auto">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="/pricing">Pricing</NavLink>
                    <NavLink href="/contact">Contact Us</NavLink>
                    {/* <NavLink href="/login" tw="lg:ml-12!">
                        Login
                    </NavLink>
                    <PrimaryLink css={tw`rounded-full`} href="/#">Sign Up</PrimaryLink> */}
                    {
                        active && <div className="w-full h-[0.5px] bg-gray-500"></div>
                    }
                    {/* {user ?
                            <>
                                <a href='/profile' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-center text-primary-500 font-bold items-center justify-center hover:bg-primary-500 hover:text-primary-500 '>
                                    Profile
                                </a>
                                <button onClick={() => redirectToLogin()}>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-center text-primary-500 font-bold items-center justify-center hover:bg-primary-500 hover:text-primary-500 '>
                                        Logout
                                    </a>
                                </button>
                            </>
                            :
                            <a href='/login' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-center text-white font-bold items-center justify-center hover:bg-primary-500 hover:text-white '>
                                Login
                            </a>
                        } */}
                </div>
            </div>
        </nav>
    );
};