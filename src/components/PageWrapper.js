import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const PageWrapper = (props) => {
  return (<Wrapper>{props.children}</Wrapper>);
}

export default PageWrapper;