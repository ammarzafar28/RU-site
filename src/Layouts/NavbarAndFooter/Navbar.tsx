import { SetStateAction, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {

    const location = useLocation();
    const [activeDropdownItem, setActiveDropdownItem] = useState('');

    const isActive = (path: string) => location.pathname === path;
    const isAboutActive = () => ['/about', '/team', '/story'].includes(location.pathname);

    const handleDropdownItemClick = (item: SetStateAction<string>) => {
        setActiveDropdownItem(item);
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3' style={{ backgroundColor: '#99cc99' }}>
            <div className='container-fluid'>
                <img src="/Images/LayoutPhotos/logo.png" alt="Logo" height='75px' width='80px' className="mr-5" />
                <span className='navbar-brand' style={{ color: "black" }}><i>Resources United</i></span>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' activeClassName='active-nav-link' to="/home"
                                style={{ color: "black", textDecoration: "none", padding: '10px 15px', transition: 'color 0.3s ease' }} activeStyle={{ fontWeight: 'bold', color: '#ffff99' }}>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' activeClassName='active-nav-link' to='/programsandservices'
                                style={{ color: "black", textDecoration: "none", padding: '10px 15px', transition: 'color 0.3s ease' }} activeStyle={{ fontWeight: 'bold', color: '#ffff99' }}>Programs & Services</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' activeClassName='active-nav-link' to='/getinvolved'
                                style={{ color: "black", textDecoration: "none", padding: '10px 15px', transition: 'color 0.3s ease' }} activeStyle={{ fontWeight: 'bold', color: '#ffff99' }}>Get Involved</NavLink>
                        </li>
                        <li className='nav-item dropdown'>
                            <NavLink className='nav-link dropdown-toggle' to='/about' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false'
                                style={{ color: isAboutActive() ? '#ffff99' : 'black', fontWeight: isAboutActive() ? 'bold' : 'normal', textDecoration: 'none', padding: '10px 15px', transition: 'color 0.3s ease' }}
                                activeStyle={{ fontWeight: 'bold', color: '#ffff99' }}>
                                About Us
                            </NavLink>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                <li><NavLink className={`dropdown-item ${activeDropdownItem === '/story' ? 'active' : ''}`} to='/story'
                                    onClick={() => handleDropdownItemClick('/story')}
                                    style={{ color: 'black', textDecoration: 'none', padding: '10px 15px' }}>Our Story</NavLink></li>
                                <li><NavLink className={`dropdown-item ${activeDropdownItem === '/team' ? 'active' : ''}`} to='/team'
                                    onClick={() => handleDropdownItemClick('/team')}
                                    style={{ color: 'black', textDecoration: 'none', padding: '10px 15px' }}>Our Team</NavLink></li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' activeClassName='active-nav-link' to='/contact'
                                style={{ color: "black", textDecoration: "none", padding: '10px 15px', transition: 'color 0.3s ease' }} activeStyle={{ fontWeight: 'bold', color: '#ffff99' }}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
