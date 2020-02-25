import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import Fog from './assets/fog.jpg';


const Styles = styled.div `

.jumbo {
    background: url(${Fog}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 750px;
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