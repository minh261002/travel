import './style.scss'
import { SiYourtraveldottv } from "react-icons/si";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";

import { useState } from 'react';

const Navbar = () => {

    const styleLink = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px'
    };


    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    const removeNavbar = () => {
        setActive('navBar')
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className='logo flex'>
                        <h1><SiYourtraveldottv className='icon' />TravelTrip.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="" className='navLink'>Trang Chủ</a>
                        </li>
                        <li className="navItem">
                            <a href="" className='navLink'>Tour Du Lịch</a>
                        </li>
                        <li className="navItem">
                            <a href="" className='navLink'>Giới Thiệu</a>
                        </li>
                        <li className="navItem">
                            <a href="" className='navLink'>Liên Hệ</a>
                        </li>
                        <li className="navItem">
                            <a href="" className='navLink'>Tin Tức</a>
                        </li>

                        <button className='btn'>
                            <a href="" className='navLink' style={styleLink}>Tài Khoản <FaChevronDown /></a>
                        </button>

                        <button className='btn-outline'>
                            <a href="" className='navLink'>Booking Now</a>
                        </button>

                        <div onClick={removeNavbar} className="closeNavbar">
                            <IoCloseCircleOutline className='icon' />
                        </div>
                    </ul>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className='icon' />
                </div>
            </header>
        </section>
    )
}

export default Navbar