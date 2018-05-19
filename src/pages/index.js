import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {

  return(
    <div>
      <h1>Hoi mensen.</h1>
      <p>Welkom bij Pass the Peas.</p>
      <p>We zijn nog even bezig het opmaken van deze pagina, bekijk anders ondertussen even waar wij komende tijd staan met onze truck:</p>
      <Link to="/agenda/">Naar de agenda</Link>

    </div>


  )
}

export default IndexPage

// export const indexQuery = graphql`
//   query indexPageQuery {

//   }
// `