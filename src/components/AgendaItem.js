import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import moment from 'moment';
import styled from 'styled-components';
import placeholderImg from '../images/placeholder-green.jpg'

const Item = styled.div`
  display flex; flex-direction: column; justify-content: flex-end;
  margin-bottom: 20px;
  box-shadow: 0px 2px 3px rgba(0,0,0,0.1);
  border-radius: 5px;
  width: 49%;
  transition: box-shadow 0.4s;
  min-height: 200px;
  &:hover {
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }
  background:
    linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 75%),
    ${props => `url(${props.background}) no-repeat`};
  background-size: cover;
  @media (max-width: 777px) {
    width: 100%;
  }
`

const Date = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;;
  background: #fff; border-radius: 4px;
  text-align: center;
  min-width: 80px;
`

const Day = styled.div`
  font-size: 36px; font-weight: 700; color: #000;
  padding: 15px;
`
const Month = styled.div`
  background: rebeccapurple;
  border-radius: 0px 0px 4px 4px;
  color: #fff; font-weight: 700;
`

const Content = styled.div`
  display: flex; align-items: center;
  padding: 15px;
  h3 {
    margin-bottom: 0; margin-left: 15px; line-height: 1.5;
    color: #fff; text-shadow: 0px 2px 3px rgba(0,0,0,0.2);
  }
`

const AgendaItem = (props) => {
  const media = props.item.featured_media
  const imgUrl = media ? media.source_url : placeholderImg; // put standard image in place
  return (
    <Item background={imgUrl}>
      <Content>
        <Date>
          <Day>{moment(props.item.acf.start_date).locale('nl').format('DD')}</Day>
          <Month>{moment(props.item.acf.start_date).locale('nl').format('MMM')}</Month>
        </Date>
        <h3>{ props.item.title }</h3>
        {/* <p>Begin: {moment(props.item.acf.start_date).locale('nl').format('DD MMMM YYYY')}</p>
        <p>Eind: {moment(props.item.acf.end_date).locale('nl').format('DD MMMM YYYY')}</p> */}
      </Content>
    </Item>
  )
}

export default AgendaItem;