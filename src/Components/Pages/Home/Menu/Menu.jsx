import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import PopularMenu from '../../../Shared/MenuItems/PopularMenu';
import UseMenu from '../../../../Hooks/UseMenu';

const Menu = () => {

    const [menu] = UseMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div>
            <section>

                <SectionTitle
                    subheading={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                />

            </section>

            <div className='grid md:grid-cols-2 gap-8 my-20 p-4'>
                {
                    popular.map(item => <PopularMenu
                        key={item._id}
                        items={item}
                    />)
                }
            </div>

        </div>
    );
};

export default Menu;