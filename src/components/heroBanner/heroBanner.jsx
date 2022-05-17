import React from "react";
import { Carousel } from "react-bootstrap";
import "./HeroBanner.css";

import Slide1 from "../assets/bannerBg.jpg";

const HeroBanner = ({ bnr }) => {
  const data = bnr?.allContentfulHeroBanner?.nodes[0];
  console.log("bnr", data);

  return (
    <div className="hero-bnr">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data?.heroImage?.file?.url}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data?.heroHeading}</h3>
            <p>{data?.heroDiscription}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data?.heroImage?.file?.url}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data?.heroHeading}</h3>
            <p>{data?.heroDiscription}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
