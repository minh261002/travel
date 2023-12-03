import './style.scss'
import { IoLocationOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";
import Aos from 'aos';
import 'aos/dist/aos.css'

import dalat from '../../assets/dalat.jpg'
import danang from '../../assets/danang.jpg'
import hanoi from '../../assets/hanoi.jpg'
import hochiminh from '../../assets/hochiminh.jpg'
import hue from '../../assets/hue.jpeg'
import hoian from '../../assets/hoian.jpg'
import phuquoc from '../../assets/phuquoc.jpg'
import hagiang from '../../assets/hagiang.jpeg'
import vungtau from '../../assets/vungtau.jpg'
import { useEffect } from 'react';


const Data = [
    {
        id: 1,
        imgSrc: dalat,
        desTitle: 'Thác Datanla - Vườn Thú ZooDoo - Núi Langbiang',
        location: 'Đà Lạt - Lâm Đồng',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Facere animi velit blanditiis, tenetur perferendis fuga adipisci explicabo qui?'

    },

    {
        id: 2,
        imgSrc: danang,
        desTitle: 'Bà Nà Hill - Sun World Danang Wonders - Asia Park',
        location: 'Đà Nẵng',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Facere animi velit blanditiis, tenetur perferendis fuga adipisci explicabo qui?'
    },

    {
        id: 3,
        imgSrc: hanoi,
        desTitle: 'Văn Miếu - Hồ Gươm - Lăng Chủ Tịch Hồ Chí Minh',
        location: 'Hà Nội',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Facere animi velit blanditiis, tenetur perferendis fuga adipisci explicabo qui?'
    },

    {
        id: 4,
        imgSrc: hochiminh,
        desTitle: 'Vinhone Central Park - Nhà Thờ Đức Bà - Chợ Bến Thành',
        location: 'Hồ Chí Minh',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Facere animi velit blanditiis, tenetur perferendis fuga adipisci explicabo qui?'
    },

    {
        id: 5,
        imgSrc: hue,
        desTitle: 'Hoàng Thành Huế - Chùa Thiên Mụ - Đại Nội Huế',
        location: 'Thừa Thiên Huế',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Facere animi velit blanditiis, tenetur perferendis fuga adipisci explicabo qui?'
    },

    {
        id: 6,
        imgSrc: hoian,
        desTitle: 'Phố Cổ Hội An',
        location: 'Quảng Nam',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Facere animi velit blanditiis, tenetur perferendis fuga adipisci explicabo qui?'
    },

    {
        id: 7,
        imgSrc: phuquoc,
        desTitle: 'Đảo Phú Quốc - Vinpearl Land Phú Quốc - Vinpearl Safari Phú Quốc',
        location: 'Kiên Giang',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Facere animi velit blanditiis, tenetur perferendis fuga adipisci explicabo qui?'
    },

    {
        id: 8,
        imgSrc: hagiang,
        desTitle: ' Đồi Mẫu Sơn - Núi Cấm - Chợ Tình',
        location: 'Hà Giang',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Facere animi velit blanditiis, tenetur perferendis fuga adipisci explicabo qui?'
    },
    {
        id: 9,
        imgSrc: vungtau,
        desTitle: 'Bãi Sau - Bãi Trước - Bãi Dứa',
        location: 'Bà Rịa - Vũng Tàu',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, modi. Facere animi velit blanditiis, tenetur perferendis fuga adipisci explicabo qui?'
    },
]

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="main container section">
            <div data-aos="fade-up" className="secTitle">
                <h3 className='title'>
                    Một số điểm đến nổi bật
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, desTitle, location, grade, fees, description }) => {
                        return (
                            <div data-aos="fade-up" key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="desTile">
                                        {desTitle}
                                    </h4>

                                    <span className="contient flex">
                                        <IoLocationOutline className='icon' />
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>

                                        <div className="price">
                                            <span>{fees}</span>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        Chi Tiết <LuClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Main;