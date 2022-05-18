import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/header";
import { graphql } from 'gatsby'
import HeroBanner from "../components/heroBanner/heroBanner";
import Brands from "../components/brands/brands";

const IndexPage = ({ data }) => {
  return (
    <>
      <div className='home'>
        <Header menu={data} />
        <HeroBanner bnr={data}/>
        <Brands brand={data}/>
      </div>
    </>
  );
};

export default IndexPage;


export const query = graphql`
  {
    allContentfulMenu(sort: {order: ASC, fields: createdAt}) {
      nodes {
        navBar
      }
    }
    allContentfulHeroBanner {
      nodes {
        heroImage {
          file {
            url
          }
        }
        heroDiscription
        heroHeading
      }
    }
    allContentfulBrands {
      nodes {
        brandsImage {
          file {
            url
          }
        }
      }
    }
  }
`
