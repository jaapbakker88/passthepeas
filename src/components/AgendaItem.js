import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import moment from 'moment';
import styled from 'styled-components';
import placeholderImg from '../images/placeholder-green.jpg'

const Item = styled.div`
  display flex; flex-direction: column;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0px 2px 3px rgba(0,0,0,0.1);
  border-radius: 5px;
  width: 49%;
  transition: box-shadow 0.4s;
  &:hover {
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }
`

const Header = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`

const Content = styled.div`
  padding: 15px;
`

const AgendaItem = (props) => {
  const media = props.item.featured_media
  const imgUrl = media ? media.source_url : placeholderImg; // put standard image in place
  return (
    <Item>
      <Header src={imgUrl} />
      <Content>
        <h3>{ props.item.title }</h3>
        <p>Begin: {moment(props.item.acf.start_date).locale('nl').format('DD MMMM YYYY')}</p>
        <p>Eind: {moment(props.item.acf.end_date).locale('nl').format('DD MMMM YYYY')}</p>
      </Content>
    </Item>
  )
}

export default AgendaItem;