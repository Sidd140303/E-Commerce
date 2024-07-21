import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import FeatureProduct from "./FeatureProduct";

function Home() {
  return (
    <>
      <HeroSection title="Siddharth's Store" />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;
export default Home;
