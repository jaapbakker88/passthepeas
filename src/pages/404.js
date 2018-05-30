import React from 'react'
import Header from '../components/header';
import PageWrapper from '../components/PageWrapper';

const NotFoundPage = () => (
  <div>
    <Header>404</Header>
    <PageWrapper>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageWrapper>
  </div>
)

export default NotFoundPage
