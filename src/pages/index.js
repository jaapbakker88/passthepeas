import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {

  return(
    <div>
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