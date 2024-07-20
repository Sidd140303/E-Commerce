import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

function HeroSection({ title }) {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-date">
            <p className="intro-data"> Welcome to </p>
            <h2>{title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              reprehenderit, molestias quibusdam eos hic sint quia libero ex
              tempora. Tempora consequuntur ratione similique impedit rem eius
              eos perspiciatis molestias itaque.
            </p>
            <NavLink>
              <Button>Show now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="/images/hero.jpg" alt="" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
