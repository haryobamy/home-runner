import React, { Component } from 'react';
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from 'react-router-dom';
import './App.css';


import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

function App  () {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

const closeSidebar =() => {
  setSidebarOpen(false);
}

  return (
    <div className='container'>

      <Navbar  sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

      
      <Main />

      <Sidebar  sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

    </div>
  );
    
}

export default App;
