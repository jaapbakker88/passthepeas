import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from "gatsby-link"
import styled from 'styled-components'

import Header from '../components/header'
import './index.css'

const Nav = styled.nav`
 position: sticky;
 top: 0px;
 background-color: #f8f8ff;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 ul { display: flex; align-items: center; padding: 0; margin: 0 auto; max-width: 960px; height: 65px;
   li { display: inline-block; margin: 0; line-height: 1.6; padding: 0 20px; }
   li:first-of-type { padding: 0 20px 0 0; }
   li:last-of-type { padding: 0 0 0 20px; }
 }
 a {text-decoration: none; color: rgba(0,0,0,0.79);}
 a:hover {text-decoration: none; color: rgba(0,0,0,0.59);}
 margin-bottom: 30px;
`

const Wrapper = styled.div`
  display: flex; flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1;
  > div {
    margin: 0 auto;
    max-width: 960px;
    padding-top: 0;
  }
  @media(max-width: 960px) {
    padding: 0 15px;
  }
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Nav>
        <ul>
          {pagesFiltered.map(({ node }) => (
            <li key={node.id}><Link to={'/' + node.slug}>{node.title}</Link></li>
          ))}
          <li><Link to={'/agenda'}>Agenda</Link></li>
          <li><Link to={'/partners'}>Partners</Link></li>
          <li><Link to={'/fotos'}>Foto's</Link></li>
        </ul>
      </Nav>
      <Content>
        {children()}
      </Content>
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
