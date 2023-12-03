import './style.scss'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import footerVideo from '../../assets/footerVideo.mp4'

import { IoMdSend } from "react-icons/io";
import { SiYourtraveldottv } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={footerVideo} autoPlay loop muted />
            </div>

            <div data-aos="fade-up" className="sectionContent">
                <div className="contactDiv">
                    <div className="text">
                        <small>Nhận Ưu Đãi</small>
                        <h2>Đăng Ký Ngay</h2>
                    </div>

                    <div data-aos="fade-up" className="inputDiv flex">
                        <input type="text" placeholder='Nhập địa chỉ Email của bạn' />
                        <button className="btn flex" type='submit'>
                            Gửi
                            <IoMdSend className='icon' />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div data-aos="fade-up" className="logoDiv">
                            <a href="" className="logo">
                                <SiYourtraveldottv className='icon' /> TravelTrip.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione quis earum voluptates enim aperiam quos officia. Iste, laboriosam consequatur!
                        </div>

                        <div data-aos="fade-up" className="footerSocial">
                            <FaFacebookSquare className='icon' />
                            <FaYoutube className='icon' />
                            <FaTiktok className='icon' />
                        </div>
                    </div>

                    <div data-aos="fade-up" className="footerLink grid">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">About us</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Contact us</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Careers</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Press</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Blog</a>
                            </li>
                        </div>

                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">About us</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Contact us</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Careers</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Press</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Blog</a>
                            </li>
                        </div>

                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">About us</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Contact us</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Careers</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Press</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Blog</a>
                            </li>
                        </div>

                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">About us</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Contact us</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Careers</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Press</a>
                            </li>

                            <li className="footerList flex">
                                <FaChevronRight className='icon' />
                                <a href="#">Blog</a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer