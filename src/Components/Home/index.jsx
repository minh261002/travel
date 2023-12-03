import './style.scss'
import video from '../../Assets/video.mp4'
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
//react-icons
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTripadvisor } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaList } from "react-icons/fa6";
import { TbApps } from "react-icons/tb";



const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className='home'>
            <div className="overlay"></div>

            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Cảm Ơn Bạn Đã Ghé Thăm
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        Du Lịch Cùng <span className='logo'>TravelTrip.</span>
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Tìm Kiếm Điếm Đến Của Bạn:</label>
                        <div className="input flex">
                            <input type="text" placeholder='Chọn Điểm Đến' />
                            <GrLocation className='icon' />
                        </div>
                    </div>

                    <div className="dateinput">
                        <label htmlFor="date">Chọn Ngày:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Khoảng Giá</label>
                            <h3 className="total">1.000.000d</h3>
                        </div>

                        <div className="input flex">
                            <input type="range" max='5000000' min='1000000' />
                        </div>
                    </div>

                    <div className="searchOption flex">
                        <HiFilter className='icon' />
                        <span>Thêm Bộ Lọc</span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcon flex">
                    <div className="rightIcon">
                        <FiFacebook className='icon' />
                        <IoLogoInstagram className='icon' />
                        <FaTripadvisor className='icon' />
                        <SiZalo className='icon' />
                    </div>
                    <div className="leftIcon">
                        <FaList className='icon' />
                        <TbApps className='icon' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home