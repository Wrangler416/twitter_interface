import React, {useState, useEffect, useContext} from "react"
import ThemeContext from "./themeContext"
import {themes} from "./themeContext"
import Main from "./Main"
import About from "./About"
import Contact from "./Contact"
import {Link, Switch, Route} from "react-router-dom"
import "./index.css"


function App() {

  const [theme, setTheme] = useState(themes.dark)
  const toggleTheme = () => 
          theme === themes.dark
          ? setTheme(themes.light)
          : setTheme(themes.dark)
  
  
  return (
      <ThemeContext.Provider value={theme}>
        <div className="nav">
           <Link to="/">Home</Link>
           <Link to="/About">About</Link>
           <Link to="/Contact">Contact</Link>
           </div>
            
            <Switch>
                <Route exact path="/">
                </Route>

                <Route path="/About">
                    <About />
                </Route>

                <Route path="/Contact">
                    <Contact />
                </Route>
            </Switch>

          <button id="butt" onClick={toggleTheme}>Change Theme</button>

          <Main />
        
      </ThemeContext.Provider>
  )
  }
export default App
