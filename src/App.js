import React from 'react';
import PhotoList from './component/PhotoList/PhotoList';
import {Route, Switch } from 'react-router-dom'
import UserInfo from './component/UserInfo/UserInfo';



function App() {
  return (
    <div className="App">
   <Switch>
        <Route path= "/" exact component={PhotoList} />
        <Route path="/users/:username" exact component={UserInfo} /> 
   </Switch>
      </div>
  );
}

export default App;
