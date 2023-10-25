import banner3 from '../../../../assets/Images/shop/banner2.jpg'
import image1 from '../../../../assets/Images/home/featured.jpg'
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';


const SecondBanner = () => {
    return (
        <div>
            <div>
                <SectionTitle
                    heading={'From OUR MENU'}
                    subheading={'---Check It Out---'}
                />
            </div>
            <div className="relative bg-gradient-to-tr from-black to-slate-500">


                <img src={banner3} alt="Main" className="w-full h-auto mix-blend-overlay " />

                <div className="absolute top-12 md:top-32 lg:top-56 left-0 w-2/4 p-4">
                    <img src={image1} alt="Secondary" className="max-w-full h-auto" />
                </div>

                <div className="absolute top-6 md:top-32 lg:top-56 right-0 w-2/4 md:w-2/5 p-4">

                    <h1 className='text-white md:text-3xl font-serif '>March 20, 2023 <br />
                        WHERE CAN I GET SOME?</h1>

                    <p className="md:text-lg text-xs text-slate-50 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt atque non blanditiis voluptate quibusdam!</p>

                    <button className='border-b-4 border-black rounded-lg mt-3  md:mt-6 text-slate-300 md:p-2'>Read More</button>

                </div>

            </div>
        </div>
    );
};

export default SecondBanner;