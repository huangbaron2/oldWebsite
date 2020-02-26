import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import Fog_2 from './assets/fog_2.png'


const Styles = styled.div `

.jumbo {
    background: url(${Fog_2}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 720px;
    position: relative;
    width: 100%;
  }

  .intro {
      font-size: 60px;
      text-align: center;
      color: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(2,0,36,1) 100%);
      position: relative;
      top: 250px;
      margin: 0px;
  }
`

export const Home = () => (
    <Styles>
        <Jumbo fluid className = "jumbo">
            <div>
                <h1 className = "intro">
                    Welcome to Baron's personal website
                </h1>
            </div>
        </Jumbo>
    </Styles>
)

export default Home