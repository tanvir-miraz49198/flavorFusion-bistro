import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../../assets/Images/home/slide1.jpg'
import slide2 from '../../../../assets/Images/home/slide2.jpg'
import slide3 from '../../../../assets/Images/home/slide3.jpg'
import slide4 from '../../../../assets/Images/home/slide4.jpg'
import slide5 from '../../../../assets/Images/home/slide5.jpg'
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';


const Catalogue = () => {
    return (
        <div>
            <section>

                <SectionTitle
                    heading={'ORDER ONLINE'}
                    subheading={'---From 11:00am to 10:00pm---'}
                />

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-8"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h1 className='text-3xl uppercase text-center font-mono text-white -mt-12 font-bold'>salad</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h1 className='text-3xl uppercase text-center font-mono text-white -mt-12 font-bold'>soups</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h1 className='text-3xl uppercase text-center font-mono text-white -mt-12 font-bold'>pizzas</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h1 className='text-3xl uppercase text-center font-mono text-white -mt-12 font-bold'>desserts</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h1 className='text-3xl uppercase text-center font-mono text-white -mt-12 font-bold'>salad</h1>
                    </SwiperSlide>

                </Swiper>


            </section>

        </div>
    );
};

export default Catalogue;