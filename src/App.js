import React from 'react';
import PhotoList from './component/PhotoList/PhotoList';
import {Route, Routes } from 'react-router-dom'
import UserInfo from './component/UserInfo/UserInfo';



function App() {
  return (
    <div className="App">
   <Routes>
        <Route path= "/" exact component={PhotoList} />
        <Route path="/users/:username" exact component={UserInfo} /> 
   </Routes>
      </div>
  );
}

export default App;
