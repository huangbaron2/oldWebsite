import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import Fog_2 from './assets/fog_2.png';


const Styles = styled.div `

    .resume {
        background: url(${Fog_2}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 720px;
        position: relative;
        width: 100%;
    }

    .container_resume {
        text-align: center;
    }

    .overlay_resume {
        color: black;
        background-color: clear;
        opacity: 100%;
        height: 660px;
        width: 550px;
        margin: 45px 0px 0px 0px;
        display: inline-block;
    }

    .contact {
        margin: -15px 0px 0px 0px;
    }

    .topic {
        margin: -10px 0px 5px 10px;
        color: black;
        font-weight: bold;
        font-size: 1em;
    }

   .organ {
      font-size: 1.25em;
      margin: -7px 0px 0px 10px;
      font-weight: 700;
    }

    .container_resume_body {
        text-align: left;
    }
  
`

export const Resume = () => (
    <Styles>
        <Jumbo fluid className = "resume" id = "resume">
            <Container className = "container_resume">
            <div className = "overlay_resume">
                    <Container className = "container_resume_body">
                        <iframe src="https://drive.google.com/file/d/1Qaa7q_jSqV1nouCZrATgl4j3jAp6WYMi/preview" width="550" height="660"></iframe>
                    </Container>
            </div>
            </Container>
        </Jumbo>
    </Styles>
)

export default Resume