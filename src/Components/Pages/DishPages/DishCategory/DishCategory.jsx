import React from 'react';
import PopularMenu from '../../../Shared/MenuItems/PopularMenu';
import TitleBanner from '../../../Shared/TitleBanner/TitleBanner';
import { Link } from 'react-router-dom';

const DishCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <TitleBanner img={img} title={title} />}
            <div className='grid md:grid-cols-2 gap-8 my-20 p-4'>
                {
                    items.map(item => <PopularMenu
                        key={item._id}
                        items={item}
                    />)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className='border-b-4 border-black rounded-lg mt-3  md:mt-6  p-2 bg-slate-300 hover:bg-gray-700 mb-3 ml-3'>Order Now</button>
            </Link>
        </div>
    );
};

export default DishCategory;