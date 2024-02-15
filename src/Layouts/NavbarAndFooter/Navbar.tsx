import { Link, NavLink } from "react-router-dom";
import { text } from "stream/consumers";

export const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3' style={{backgroundColor: '#CCF5CF'}}>
            <div className='container-fluid'>
                <span className='navbar-brand' style={{color: "black"}}><i>Resources United</i></span>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavbarDropdown' aria-expanded='false' aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to="/home" style={{color: "black"}}>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/programsandservices' style={{color: "black"}}>Programs & Services</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/shelf' style={{color: "black"}}>Get Involved</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about' style={{color: "black"}}>About Us</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contact' style={{color: "black"}}>Contact</NavLink>
                        </li>

                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}