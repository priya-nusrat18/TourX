import React  from 'react';
import Footer from '../../Shared/Footer/Footer';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Navbar from '../../Shared/Navbar/Navbar';
import About from '../About/About';
import AchivmentArea from '../AchivmentArea/AchivmentArea';
import Banner from '../Banner/Banner';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Contact from '../Contact/Contact';
import NewService from '../NewService/NewService';
import Review from '../Review/Review';
import MainPackage from '../Service/MainPackage';
const Home = () => {
    return (
        <div>
            <Navbar />
            <MainNavbar />
            <Banner />
            <BusinessInfo />
            <About />
            <MainPackage />
            <NewService />
            <AchivmentArea />
            <Review />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;