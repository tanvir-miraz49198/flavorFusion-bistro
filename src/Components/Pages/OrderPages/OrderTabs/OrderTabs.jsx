import React from 'react';
import OrderCards from '../Order/OrderCards/OrderCards';

const OrderTabs =({item}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 md:p-0 md:mt-6'>
        {
             item.map(item => <OrderCards
             key={item._id}
             item={item}
             ></OrderCards>)
         }
        </div>
    );
};

export default OrderTabs;