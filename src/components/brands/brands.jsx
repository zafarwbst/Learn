import React from "react";
import { Container } from "react-bootstrap";
import "./brands.css";

const Brands = ({ brand }) => {
  const data = brand?.allContentfulBrands?.nodes;
  console.log("brands", data);
  return (
    <div className="brands">
      <Container>
        <div className="brand-list row">
          {data.map((zf) => {
            return (
              <div className="brand-block col">
                <img src={zf?.brandsImage?.file?.url} alt="" />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Brands;
