import { Helmet } from 'react-helmet-async';
import img from '../../../../assets/Images/menu/banner3.jpg'
import TitleBanner from '../../../Shared/TitleBanner/TitleBanner';
import UseMenu from '../../../../Hooks/UseMenu';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import DishCategory from '../DishCategory/DishCategory';
import dessertImg from '../../../../assets/Images/menu/dessert-bg.jpeg'
import pizzaImg from '../../../../assets/Images/menu/pizza-bg.jpg'
import saladImg from '../../../../assets/Images/menu/salad-bg.jpg'
import soupImg from '../../../../assets/Images/menu/soup-bg.jpg'

const Dishes1 = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup    = menu.filter(item => item.category === 'soup')
    const salad   = menu.filter(item => item.category === 'salad')
    const pizza   = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        // Helmet
        <div>
            <Helmet>
                <title>Flavor Fusion | Menu</title>
            </Helmet>

            {/* title banner */}

            <TitleBanner
                img={img}
                title={"OUR MENU"}
                description={" WOULD YOU LIKE TO TRY A DISH"}
            >
            </TitleBanner>

            <SectionTitle
                subheading={"---Don't Miss---"}
                heading={"TODAY'S OFFER"}
            />
          
        <DishCategory
        items ={offered}
        />
        <DishCategory
        items ={dessert}
        title="Dessert"
        img={dessertImg}
        />
        <DishCategory
        items ={pizza}
        title="Pizza"
        img={pizzaImg}
        />
        <DishCategory
        items ={salad}
        title="Salad"
        img={saladImg}
        />
        <DishCategory
        items ={soup}
        title="Soup"
        img={soupImg}
        />

        </div>
    );
};

export default Dishes1;