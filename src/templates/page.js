import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/header'

const Post = styled.div`
  display: block;
  width: 690px;
  margin: 0 auto;
  @media(max-width: 890px) {
    display: block;
  }
`

const Head = styled.div`
  flex: 1;
`

const Content = styled.div`
  width: 100%;
  max-width: 690px;;
`

class PageTemplate extends Component {
  render() {

    const SiteMetadata = this.props.data.site.siteMetadata;
    const currentPage = this.props.data.wordpressPage;

    return (
      <div>
        <Header headerHeight="400px" color="green"/>
        <Post>
          <Head>
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
          </Head>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
          </Content>
        </Post>
      </div>
    )
  }
}

export default PageTemplate;

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`
