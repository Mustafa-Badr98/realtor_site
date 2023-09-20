import React from "react";
import MyNavbar from "../components/MyNavBar";
import HeroSection from "../components/heroSection";
import LoginModal from "../components/logInModal";
import MyFooter from "../components/footer";
const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <LoginModal />
      <MyFooter />
    </>
  );
};

export default HomePage;
