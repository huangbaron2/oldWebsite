import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import Fog_2 from './assets/fog_2.png';


const Styles = styled.div `

.resume {
    background: url(${Fog_2}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 750px;
    position: relative;
    width: 100%;
  }

  .intro_2 {
      font-size: 60px;
      text-align: center;
      color: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(2,0,36,1) 100%);
      position: relative;
      top: 250px;
      margin: 0px;
  }
`

export const Resume = () => (
    <Styles>
        <Jumbo fluid className = "resume" id = "resume">
            <div>
                <h1 className = "intro_2">
                 resume
                </h1>
            </div>
        </Jumbo>
    </Styles>
)

export default Resume