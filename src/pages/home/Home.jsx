import React from "react";
import BlogSection from "../../components/BlogSection/BlogSection";
import LocalCuisineSection from "../../components/LocalCuisineSection/LocalCuisineSection";
import ProductFeature from "../../components/ProductFeature/ProductFeature";
import Promotions from "../../components/Promotions/Promotions";
import Safety from "../../components/Safety/Safety";
import StaffProfiles from "../../components/StaffProfiles/StaffProfiles";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Ad from "../../components/advertise/Ad";
import HeadBanner from "../../components/banner/HeadBanner";
import Connection from "../../components/connection/Connection";
import Services from "../../components/services/Services";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <HeadBanner />
      <Services />
      <Ad />
      <ProductFeature />
      <Promotions />
      <LocalCuisineSection />
      <StaffProfiles />
      <Safety />
      <BlogSection />
      <WhyChooseUs />
      <Testimonials />
      <Connection />
    </>
  );
};

export default Home;
