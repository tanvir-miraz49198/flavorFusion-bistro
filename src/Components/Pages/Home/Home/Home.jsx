import { Helmet } from "react-helmet";
import Catalogue from "../Catalogue/Catalogue";
import Menu from "../Menu/Menu";
import Testimonial from "../Testimonial/Testimonial";
import MainBanner from "../Banners/MainBanner";
import FlavorFusionBanner from "../Banners/FlavorFusionBanner";
import SecondBanner from "../Banners/SecondBanner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Flavor Fusion | Home</title>
            </Helmet>
            <MainBanner></MainBanner>
            <Catalogue></Catalogue>
            <FlavorFusionBanner></FlavorFusionBanner>
            <Menu></Menu>
            <SecondBanner></SecondBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;