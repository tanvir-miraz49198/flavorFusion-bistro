import React from 'react';



const TitleBanner = ({img, title, description}) => {
    return (
        <div>
        <div className="flex items-center justify-center bg-gray-100 my-10">
            <div className="relative ">
                <img
                    src={img}
                    alt="Your Image"
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className='bg-black bg-opacity-50  md:p-6 w-2/3  md:w-3/5 '>
                        <h1 className="text-gray-300 text-center text-xl md:text-4xl lg:text-6xl xl:text-7xl font-serif">
                            {title}
                        </h1>
                        <p className='text-center px-2 text-gray-200 mt-4 text-xs md:text-lg '>
                          {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TitleBanner;