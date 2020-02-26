import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Night from './assets/night.jpg'
import homelessness from './assets/homelessness.png'

const Styles = styled.div `
    .projects {
        background: url(${Night}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 730px;
        position: relative;
        width: 100%;
        margin: 0px 0px 0px 0px;
        text-align: center;
    }
    .container-projects {
        text-align: center;
        position: absolute;
        margin: 50px 200px 50px 200px;
        padding: 25px 350px 0px 350px;
    }

    .homeless-box{
        text-align: center;
        background-color: black;
        opacity: 1;
        color: white;
        border: 1px solid white;
        text-decoration: none;
        cursor: pointer;
        font-size: 30px;
        padding: 150px 225px 150px 225px;
        position: relative;
        left: -250px;
    }

    .homeImg {
        width: 350px;
        transition: opacity 0.4s;
        position: absolute;
        top: 50px;
        left: 50px;

        &:hover {
            color: black;
            opacity: 40%;
            text: 123;
        }
    }

    
    .homeless-text {
        margin: 0px;
        padding: 92px 126px 120px 126px;
        left: 0px;
        top: 0px;
        text-size: 5px;
        z-index: 1;
        position: absolute;
        opacity: 0;
        transition: opacity 0.4s;
        text-decoration: none;

        &:hover {
            opacity: 1;
            color: white;
            background-color: rgba(0,0,0,.7)
        }
    }


    .project_2-box{
        background-color: black;
        opacity: 1;
        color: white;
        border: 1px solid white;
        text-decoration: none;
        cursor: pointer;
        font-size: 30px;
        padding: 100px 150px 100px 150px;
        position: relative;
        top: -301.5px;
        left: 250px;
    }
`

export const Projects = () => (
    <Styles>
        <Jumbo fluid className = 'projects' id = 'projects'>
            <div className = "container-projects">
                <div className = "homeless-box">
                    <img src = {homelessness} className = "homeImg"/>
                    <a href = "https://autolab-p2--huangb2.repl.co/" class="homeless-text" target="_blank">Homelessness Data in NYC</a>
                </div>
                <div className = "project_2-box">
                    <p>In progress</p>
                </div>
            </div>
        </Jumbo>
    </Styles>
)

export default Projects