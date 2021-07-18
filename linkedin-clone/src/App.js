import React from 'react';
import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import Feed from './Feed/Feed';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appBody">
        <SideBar />
        <Feed />
      </div>
    </div>
   
  );
}

export default App;
