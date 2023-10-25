import React, { useState } from 'react';
import OrderImg from '../../../../assets/Images/shop/banner2.jpg'
import TitleBanner from '../../../Shared/TitleBanner/TitleBanner';
import { Helmet } from 'react-helmet';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import UseMenu from '../../../../Hooks/UseMenu';
import OrderCards from './OrderCards/OrderCards';
import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    console.log(category)
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Flavor Fusion | Order</title>
            </Helmet>

            <TitleBanner
                img={OrderImg}
                title={'Order Foods'}
            >
            </TitleBanner>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList >
                    <div className='flex justify-between px-8'>
                        <Tab className="border-2 p-1 rounded-md border-green-400 hover:bg-green-800 hover:text-white cursor-pointer">Salad</Tab>
                        <Tab className="border-2 p-1 rounded-md border-green-400 hover:bg-green-800 hover:text-white cursor-pointer">Pizza</Tab>
                        <Tab className="border-2 p-1 rounded-md border-green-400 hover:bg-green-800 hover:text-white cursor-pointer">Soup</Tab>
                        <Tab className="border-2 p-1 rounded-md border-green-400 hover:bg-green-800 hover:text-white cursor-pointer">Dessert</Tab>
                        <Tab className="border-2 p-1 rounded-md border-green-400 hover:bg-green-800 hover:text-white cursor-pointer">Drinks</Tab>

                    </div>
                </TabList>
                <TabPanel>
                    <OrderTabs item={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs item={pizza} />
                </TabPanel>
                <TabPanel>

                    <OrderTabs item={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs item={dessert} />
                </TabPanel>
                <TabPanel>
                    <OrderTabs item={drinks} />
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;