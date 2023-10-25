import React from 'react';

const OrderCards = ({item}) => {
    const { name, recipe, price, image } = item;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <img className='rounded-lg'  src={image} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='absolute  top-0 bg-orange-600 text-white p-4  rounded-ee-full rounded-es-full rounded-tr-full'>$ {price}</p>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="border p-2 rounded-md border-orange-400 hover:bg-orange-600 hover:text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCards;