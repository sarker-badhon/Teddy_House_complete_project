import React from 'react';
import Slider from '../../Slider/Slider';
import TeddyBear from '../../TeddyGallery/TeddyBear';
import TabCategory from '../../TabCategory/TabCategory';
import Contacts from '../../Contacts/Contacts';
import About from '../../About/About';

const Home = () => {
    return (
        <div >
           
            <Slider></Slider>
            <About></About>
            <TeddyBear></TeddyBear>
            <TabCategory></TabCategory>
            <Contacts></Contacts>
           
        </div>
    );
};

export default Home;