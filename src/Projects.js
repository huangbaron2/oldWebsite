import React from 'react'
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import Fog_3 from './assets/fog_3.png'

const Styled = stled.div `
    .projects {
        background: url(${Fog_3}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 750px;
        position: relative;
        width: 100%;
  }

`

const Projects = () => (
    <Styles>
        <Jumbo className = 'projects'>
            <div>
                123
            </div>
        </Jumbo>
    </Styles>
)