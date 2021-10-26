// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import NewVal from './Components/NewVal';
import Form from './Components/Form';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

//let name="First Name";
function App() {
  const [mode, darkmode] = useState('light');
  const [alert, setAlert] = useState(null)
  const setalertvalue=(message, type)=>{
  setAlert({
  msg:message,
  type:type

})
setTimeout(()=> {
  setAlert(null);
},2000);
}
 const toggleMode = ()=>{
   if(mode === 'light'){
    darkmode('dark');
    document.body.style.backgroundColor='gray';
    setalertvalue("Dark Mode enabled","success"); 
   }
   else{
    darkmode('light');
    document.body.style.backgroundColor='white'
    setalertvalue("Light Mode enabled","primary"); 
   }
  }

  return (
    <div>
      {/* <Router> */}
        <Navbar title="Website" bag="Home" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          {/* <Switch> */}
            {/* <Route exact path="/NewVal"> */}
            <NewVal setalertvalue={setalertvalue} mode={mode} heading="Enter the Text Below" ></NewVal>
            {/* </Route> */}
            {/* <Route exact path="/Form"> */}
            <Form mode={mode} heading="Enter the Text Below"></Form>
            {/* </Route>
          </Switch>
      </Router> */}
    </div>
  );
}
export default App  ;
