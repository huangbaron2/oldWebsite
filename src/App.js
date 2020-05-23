import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Fog from './assets/fog.jpg';
import { NavsBar } from './NavBar'
import { Home } from './Home'
import { Resume } from './Resume'
import { Projects } from './Projects'

const Styles = styled.div`
  .jumbo {
    background: url(${Fog}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 100%px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .naving {
    position: fixed;
  }

`

function App() {
  return (
    <Styles>
    <React.Fragment>
      <NavsBar className = "naving"/>
      <div>
        <Home/>
        <Resume/>
        <Projects/>
      </div>
    </React.Fragment>
    </Styles>
  );
}

export default App;
