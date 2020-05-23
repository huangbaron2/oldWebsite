import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container, ProgressBar } from 'react-bootstrap';
import Fog_2 from './assets/fog_2.png';


const Styles = styled.div `

    .resume {
        background: url(${Fog_2}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 735px;
        position: relative;
        width: 100%;
        border: 2x dotted red;
        margin: -32px 0px 0px 0px;
    }

    .container_resume {
        text-align: right;
        margin: -31px 0px 0px 750px
    }

    .overlay_resume {
        color: black;
        background-color: clear;
        opacity: 100%;
        height: 660px;
        width: 550px;
    }

    .container_resume_body {
        text-align: right;
    }
    
    .skills {
        color: white;
        position: absolute;
        z-index: 1;
        bottom: 500px;
        left: 300px;
        border: 5px solid white;
        display: inline;
        padding: 0px 200px 0px 0px;
    }

    .languages {
        font-size: 15px;
        color: white;
        display: inline;
    }
`

export const Resume = () => (
    <Styles>
        <Jumbo fluid className = "resume" id = "resume">
            <Container className = "container_resume">
            <div className = "overlay_resume">
                    <Container className = "container_resume_body">
                        <iframe src="https://drive.google.com/file/d/1XKO_wzpTQefKqNTWqNlKUNHe-B3UZnzH/preview" width="560" height="680"></iframe>
                    </Container>
            </div>
            </Container>
        </Jumbo>
    </Styles>
)

export default Resume