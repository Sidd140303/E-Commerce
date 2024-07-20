import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection";

function Home() {
  return <HeroSection title="Siddharth's Store" />;
}

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;
export default Home;
