import React from 'react';
import './assets/css/App.css';
import Navbar from './common/layout/navbar-landing';
import Routing from './common/router/router';

function App() {
    return (
      <div>
      <Navbar/>
      <Routing/>
      </div>
      );
  }
  
export default App;