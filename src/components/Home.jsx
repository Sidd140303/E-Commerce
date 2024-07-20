import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";

function Home() {
  return (
    <>
      <HeroSection title="Siddharth's Store" />
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
