import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./heroBanner.css";

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
          <Container>
            <Carousel.Caption>
              <h3>{data?.heroHeading}</h3>
              <p>{data?.heroDiscription}</p>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={data?.heroImage?.file?.url}
            alt="First slide"
          />
          <Container>
            <Carousel.Caption>
              <h3>{data?.heroHeading}</h3>
              <p>{data?.heroDiscription}</p>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
