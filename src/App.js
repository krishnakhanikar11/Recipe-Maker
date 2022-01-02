import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Search from "./pages/search/Search"
import Receipe from "./pages/receipe/Receipe"
import Navbar from "./components/Navbar"
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'



function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
    
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch >
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/create'>
            <Create />
          </Route>
          <Route  path='/search'>
            <Search />
          </Route>
          <Route  path='/receipe/:id'>
            <Receipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App