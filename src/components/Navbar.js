import {Link} from "react-router-dom"
import "./Navbar.css"
import Searchbar from "./Searchbar"
import {useTheme} from "../hooks/useTheme"


export default function Navbar() {

  const {color} = useTheme()
    return (
      <div className='navbar' style={{background:color}}>
        <nav >
          <Link to='/' className="brand">Krishna Khanikar</Link>
          <Searchbar />
          <Link to='/create'>Create Receipe</Link>
        </nav>
      </div>
    )
}
