import React from "react";
import MyNavbar from "../components/MyNavBar";
import HeroSection from "../components/heroSection";
import LoginModal from "../components/logInModal";
const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <LoginModal />
    </>
  );
};

export default HomePage;
