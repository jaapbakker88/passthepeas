import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from "gatsby-link"
import styled from 'styled-components'

import './index.css'


const Wrapper = styled.div`
  display: flex; flex-direction: column;
  min-height: 100vh;
`


const Layout = ({ children, data }) => {
  const pages = data.allWordpressPage.edges;
  const pagesFiltered = pages.filter(node => node.node.slug != 'home')
  return (
    <Wrapper>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />

      <div>
        {children()}
      </div>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPage {
      edges {
        node {
          slug
          title
          id
        }
      }
    }
  }
`
