import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import OutWork from '../OurWork/OutWork';
import ServiceProvider from '../ServiceProvider/ServiceProvider';
import SocialSection from '../SocialSection/SocialSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SocialSection></SocialSection>
            <ServiceProvider></ServiceProvider>
            <OutWork></OutWork>
            <ClientFeedback></ClientFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;