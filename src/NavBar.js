import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
    .bar {
        text-align: center;
        background-color: black;
        padding: 5px 0px 0px 0px;
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1;
    }

    .nav {
        margin: 0px 0px 0px 0px;
        height: 35px;
        text-align: center;
    }

    .navli {
        display: inline;
        height: 50px;
        padding: 36px 2px 9px 2px;
        transition: background-color 0.4s;

        &:hover {
            background-color: #bfbfbf;
        }
    }

    .nava {
        color: grey;
        font-size: 20px;
        text-decoration: none;
        text-align: center;
        padding: 32px 43px 8px 43px;

        &:hover {
            color: black;
        }

    }


`;

export const NavsBar = () => (
    <Styles>
        <div className = "bar">
            <Container>
              <ul className = "nav" style={{ listStyleType: "none" }}>
                <li className = "navli"><a className = "nava" href="#">Home</a></li>
                <li className = "navli"><a className = "nava" href="#resume">Resume</a></li>
                <li className = "navli"><a className = "nava" href="#projects">Projects</a></li>
                <li className = "navli"><a className = "nava" href="#">Contact</a></li>
              </ul>
            </Container>
        </div>              
    </Styles>
)

export default NavsBar