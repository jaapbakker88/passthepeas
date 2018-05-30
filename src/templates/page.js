import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/header';
import PageWrapper from '../components/PageWrapper';

const Post = styled.div`
  display: block;
  width: 690px;
  margin: 0 auto;
  @media(max-width: 890px) {
    display: block;
  }
`;

const Head = styled.div`
  flex: 1;
`;

class PageTemplate extends Component {
  render() {

    const SiteMetadata = this.props.data.site.siteMetadata;
    const currentPage = this.props.data.wordpressPage;

    return (
      <div>
        <Header headerHeight="400px"/>
        <PageWrapper>
          <Head>
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
          </Head>
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        </PageWrapper>
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
