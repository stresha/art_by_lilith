import { NavLink } from 'react-router-dom'
import './Navbar.css'



const NavBar = () => {
      return (
          <nav>
            <div className="filtros">
              
              <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
              <NavLink to='/Gallery' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Gallery</NavLink>
              <NavLink to='/About' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>About</NavLink>
              {/* <NavLink to='/Get' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Get in touch!</NavLink> */}
            
           
          </div>
          
              
          </nav>
      )
  }
  
  export default NavBar