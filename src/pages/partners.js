
import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import PageWrapper from "../components/PageWrapper";
import Header from "../components/header";

const PartnersTemplate = ({data}) => {
  const partners = data.allWordpressWpPtpPartner.edges;
    return (
      <div>
      <Header headerHeight="400px"/>
      <PageWrapper>
        <h1>Partners</h1>

        {partners.map(({ node }) => (
          <div key={node.id} className={"partner"} style={{ marginBottom: 50 }}>
            <h3>{node.title}</h3>
          </div>
        ))}

      </PageWrapper>
      </div>
    )

}

PartnersTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PartnersTemplate

export const pageQuery = graphql`
    query partnersQuery{
      allWordpressWpPtpPartner {
        edges {
          node {
            id
            title

          }
        }
      }
      site {
        id
        siteMetadata {
          title
        }
      }
    }

`