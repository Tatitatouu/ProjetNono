import React from "react";
import Header from "../components/Header/header"
import Carousel from "../components/Carousel/carousel";
import Service from "../components/Services/services";
import Footer from "../components/Footer/footer";

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <Service />
            <Footer />
        </div>
    );
};

export default Home;