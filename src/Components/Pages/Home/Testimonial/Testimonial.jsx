import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { GoCodeReview } from "react-icons/go";

const Testimonial = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    })

    return (
        <div className='my-20'>
            <SectionTitle
                heading={'TESTIMONIALS'}
                subheading={'---What Our Clients Say---'}
            />


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='flex flex-col items-center m-24 '>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <GoCodeReview className='text-7xl text-zinc-700 my-5'/>
                            <p className='text-center my-3'>{review.details}</p>
                            <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonial;