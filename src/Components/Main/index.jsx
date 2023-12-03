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
        description: 'Đà Lạt là một thành phố nằm ở cao nguyên Lâm Viên, tỉnh Lâm Đồng, Việt Nam. Thành phố nổi tiếng với khí hậu mát mẻ, nhiều khu vườn hoa, các điểm tham quan du lịch như hồ Xuân Hương, thác Prenn, đồi Robin, vườn hoa Đà Lạt, chợ Đà Lạt, v.v.'
    },

    {
        id: 2,
        imgSrc: danang,
        desTitle: 'Bà Nà Hill - Sun World Danang Wonders - Asia Park',
        location: 'Đà Nẵng',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Đà Nẵng là một thành phố ven biển nằm ở trung tâm Việt Nam. Đây là thành phố lớn thứ ba ở Việt Nam về dân số, sau Thành phố Hồ Chí Minh và Hà Nội, và là một trong năm thành phố trực thuộc trung ương thuộc loại đô thị loại một của Việt Nam.'
    },

    {
        id: 3,
        imgSrc: hanoi,
        desTitle: 'Văn Miếu Quốc Tử Giám - Hồ Gươm - Lăng Chủ Tịch Hồ Chí Minh',
        location: 'Hà Nội',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Hà Nội là thủ đô, đồng thời là thành phố đứng đầu Việt Nam về diện tích tự nhiên và đứng thứ hai về dân số, sau Thành phố Hồ Chí Minh. Hà Nội là một trong các đô thị trọng điểm của cả nước, nơi đây tập trung nhiều cơ quan hành chính, văn hóa, giáo dục, kinh tế, khoa học công nghệ, thương mại, du lịch của cả nước.'
    },

    {
        id: 4,
        imgSrc: hochiminh,
        desTitle: 'Bảo Tàng Chứng Tích Chiến Tranh - Nhà Thờ Đức Bà - Chợ Bến Thành',
        location: 'Hồ Chí Minh',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Thành phố Hồ Chí Minh, thường được gọi là Sài Gòn, là thành phố lớn nhất Việt Nam, là một trong những trung tâm kinh tế, văn hóa, giáo dục và du lịch quan trọng nhất của Việt Nam. Thành phố Hồ Chí Minh nằm bên dòng sông Sài Gòn, cách biển Đông khoảng 60 km.'
    },

    {
        id: 5,
        imgSrc: hue,
        desTitle: 'Hoàng Thành Huế - Chùa Thiên Mụ - Đại Nội Huế',
        location: 'Thừa Thiên Huế',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Huế là một thành phố nằm ở miền trung Việt Nam, là thủ phủ của tỉnh Thừa Thiên Huế. Thành phố nằm trên bờ sông Hương, cách biển Đông khoảng 110 km. Thành phố có diện tích 70,67 km², dân số năm 2019 là 2.466.238 người, mật độ dân số đạt 3.500 người/km².'
    },

    {
        id: 6,
        imgSrc: hoian,
        desTitle: 'Phố Cổ Hội An',
        location: 'Quảng Nam',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Hội An là một thành phố cổ nằm ở miền Trung Việt Nam, thuộc tỉnh Quảng Nam. Thành phố cổ Hội An được công nhận là di sản văn hóa thế giới bởi UNESCO năm 1999. Hội An còn được xem là một trong những thành phố cổ nhất và đẹp nhất Việt Nam.'
    },

    {
        id: 7,
        imgSrc: phuquoc,
        desTitle: 'Đảo Phú Quốc - Vinpearl Land Phú Quốc - Vinpearl Safari Phú Quốc',
        location: 'Kiên Giang',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Phú Quốc là một huyện đảo thuộc tỉnh Kiên Giang, Việt Nam. Huyện này được chính thức thành lập ngày 7 tháng 4 năm 2004, trước đây là một huyện thuộc tỉnh Hà Tây. Huyện Phú Quốc có diện tích 589,23 km², dân số năm 2019 là 179.480 người, mật độ dân số đạt 304 người/km².'
    },

    {
        id: 8,
        imgSrc: hagiang,
        desTitle: ' Đồi Mẫu Sơn - Núi Cấm - Chợ Tình',
        location: 'Hà Giang',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Hà Giang là một tỉnh miền núi phía bắc Việt Nam. Tỉnh này giáp biên giới với Trung Quốc. Hà Giang có diện tích 7.945,8 km², dân số năm 2019 là 853.400 người, mật độ dân số đạt 107 người/km². Tỉnh lỵ là thành phố Hà Giang. Tỉnh Hà Giang có 10 huyện, 1 thành phố và 1 thị xã.'
    },
    {
        id: 9,
        imgSrc: vungtau,
        desTitle: 'Bãi Sau - Bãi Trước - Bãi Dứa',
        location: 'Bà Rịa - Vũng Tàu',
        grade: 'Cultural Relax',
        fees: '1.000.000đ',
        description: 'Vũng Tàu là một thành phố ven biển thuộc tỉnh Bà Rịa - Vũng Tàu, Việt Nam. Thành phố này có diện tích 140,97 km², dân số năm 2019 là 327.000 người, mật độ dân số đạt 2.300 người/km². Vũng Tàu là một trong những thành phố ven biển lớn nhất Việt Nam, nơi đây có nhiều bãi biển đẹp, nhiều điểm tham quan du lịch.'
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
                    Most visited destinations
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