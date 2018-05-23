import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'


const IndexPage = ({data}) => {

  return(
    <div>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}></div>
      <Link to="/agenda/">Naar de agenda</Link>

    </div>


  )
}

export default IndexPage

export const indexQuery = graphql`
  query homePage {
    wordpressPage (slug:{ eq: "home"}) {
      date
      title
      content
    }
  }
`