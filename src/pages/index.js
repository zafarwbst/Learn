import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/header";
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <>
      <div className='home'>
        <Header menu={data} />
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
  }
`
