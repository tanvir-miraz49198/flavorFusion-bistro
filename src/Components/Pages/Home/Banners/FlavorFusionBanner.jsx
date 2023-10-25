import React from 'react';
import TitleBanner from '../../../Shared/TitleBanner/TitleBanner';
import img from '../../../../assets/Images/home/chef-service.jpg'

const FlavorFusionBanner = () => {
    return (
        <div>
            
            <TitleBanner
            img = {img}
            title = {"Flavor Fusion Bistro"}
            description = {"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit ipsum vitae perspiciatis reprehenderit laudantium tenetur maxime nobis ullam id."}
            >
            </TitleBanner>

        </div>
    );
};

export default FlavorFusionBanner;