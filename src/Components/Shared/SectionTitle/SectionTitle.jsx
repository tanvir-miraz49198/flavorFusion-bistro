import React from 'react';

const SectionTitle = ({ heading, subheading }) => {

    return (

        <div>
            <div className='mx-auto text-center my-14  w-3/4 md:w-4/12'>
                <p className='text-orange-500 mb-3'>{subheading}</p>
                <h1 className='text-4xl font-serif font-semibold border-y-4 py-2'>{heading}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;