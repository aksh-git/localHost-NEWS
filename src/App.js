import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';
import About from './components/About';

function App() {

  const [theme, setTheme] = useState('dark'); 
  const pageSize=5;

  const toggleMode = ()=>{
    if(theme === 'light'){
      setTheme('dark');
      document.body.style.backgroundColor = '#000';
      //042743
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor = '#aeaeae';
    }
  }

  return (
    <>
    <Router>
      <div className="App">
        <Navbar theme={theme} toggleMode={toggleMode} />
        <Switch>
          <Route exact path="/"><News theme={theme} category="general" country="in" pageSize={pageSize} key="general"/></Route>
          <Route exact path="/science"><News theme={theme} category="science" country="in" pageSize={pageSize} key="science"/></Route>
          <Route exact path="/technology"><News theme={theme} category="technology" country="in" pageSize={pageSize} key="technology"/></Route>
          <Route exact path="/health"><News theme={theme} category="health" country="in" pageSize={pageSize} key="health"/></Route>
          <Route exact path="/entertainment"><News theme={theme} category="entertainment" country="in" pageSize={pageSize} key="entertainment"/></Route>
          <Route exact path="/sports"><News theme={theme} category="sports" country="in" pageSize={pageSize} key="sports"/></Route>
          <Route exact path="/business"><News theme={theme} category="business" country="in" pageSize={pageSize} key="business"/></Route>
          <Route exact path="/about">
            <About theme={theme}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
