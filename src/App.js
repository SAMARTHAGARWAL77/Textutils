  import './App.css';  
  import About from './components/About';
  import React,{useState} from 'react';
  import Navbar from './components/Navbar';
  import TextForm from './components/TextForm';
  import Alert from './components/Alert';
  import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
  function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]= useState(null);
  const showAlert=(message,type)=>{
  setAlert({
  msg:message,
  type:type
  })
  setTimeout(() => {
  setAlert(null) 
  },3000);
  }
  const toggleMode=()=>{
  if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert('Dark mode has been enabled','success!!');
  document.title="textutils dark mode enabled";
  }
  else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert('light mode has been enabled','success!!');
  document.title="textutils light mode enabled";
  }
  }
  return (
  <>
  <Router>
  <Navbar title="textutils" mode={mode} toggleMode={toggleMode} HOME="Home" about="About Textutils"/>
  <Alert alert={alert}/>
  <div className="container my-2">
  <Routes>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/" element={<TextForm heading="Start from here" mode={mode}/>}/>            
  </Routes>
  </div>
  </Router>
</>
  );
  }

  export default App;

