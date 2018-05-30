import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components';

import FallbackImage from '../images/fallback-bg.jpg';
import Logo from '../images/passthepeas-vector-logo.svg';

const HeaderWrapper = styled.div`
  height: ${props => props.headerHeight ? props.headerHeight : 'calc(100vh - 65px)'};
  width: 100%;
  position: relative;
  background: ${props => props.color ? props.color : 'rgba(0,0,0,0.8)'};
  // margin-bottom: 100px;
  img {
    position: absolute; width: inherit; height: inherit; object-fit: cover;
    mix-blend-mode: multiply;
    filter: grayscale(100%);
  }
`

const HeaderInner = styled.div`
  position: absolute;
  display: flex; justify-content: center; align-items: center;
  height: inherit;
  width: 100%;
  text-align: center;
  h1, h2  {
    color: rgba(255,255,255,0.89);
  }
  h2.subtitle {
    font-family: georgia, serif;
    font-style: italic;
    font-size: 1rem;
    line-height: 1.6;
  }
`

const Nav = styled.nav`
  position: sticky;
  top: 0px;
  background-color: #f8f8ff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ul { display: flex; align-items: center; padding: 0; margin: 0 auto; max-width: 960px; height: 65px;
    li { display: inline-block; margin: 0; line-height: 1.6; padding: 0 20px; }
    li:first-of-type { padding: 0 20px 0 0; }
    li:last-of-type { padding: 0 0 0 20px; }
  }
  a {text-decoration: none; color: rgba(0,0,0,0.79);}
  a:hover {text-decoration: none; color: rgba(0,0,0,0.59);}
  margin-bottom: 30px;
`

const Header = props => {
  console.log(props);

  return (
    <div>
      <HeaderWrapper style={{ backgroundColor: props.color, height: props.headerHeight !== undefined ? props.headerHeight : 'calc(100vh - 65px)'}}>
        <img src={ props.image ==! undefined ? props.image : FallbackImage} alt="header" />
        <HeaderInner>
          <div>
            <h1>Pass The Peas</h1>
            <h2 className="subtitle">"Pass the peas like they used to say"<br/> (JB's - Food for Thought 1972)</h2>
          </div>
        </HeaderInner>

      </HeaderWrapper>
      <Nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/informatie'}>Informatie</Link></li>
          <li><Link to={'/truck'}>Truck</Link></li>
          <li><Link to={'/catering'}>Catering</Link></li>
          <li><Link to={'/menu'}>Menu</Link></li>
          <li><Link to={'/agenda'}>Agenda</Link></li>
          <li><Link to={'/partners'}>Partners</Link></li>
          <li><Link to={'/fotos'}>Foto's</Link></li>
        </ul>
      </Nav>
    </div>
  )
}

export default Header
