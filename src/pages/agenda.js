
import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import moment from 'moment';

import AgendaItem from '../components/AgendaItem';

const AgendaTemplate = ({ data }) => {
  const agendaItems = data.allWordpressWpPtpEvent.edges;
  var d = new Date().toISOString();

  const filteredItems = agendaItems.filter(({node}) => new Date(moment(node.acf.end_date)) >= new Date(d));
  return (
    <div>
      <h1>Agenda</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {filteredItems.map(({ node }) => (
          <AgendaItem key={node.id} item={node} />
        ))}
      </div>

    </div>
  )

}

AgendaTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default AgendaTemplate;

export const pageQuery = graphql`
    query agendaQuery{
      allWordpressWpPtpEvent(
    sort: {fields: [acf___start_date], order: ASC}, ) {
        edges {
          node {
            id
            title
            featured_media {
              source_url
            }
            acf {
              start_date
              end_date
            }
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