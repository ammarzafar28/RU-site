import { NavLink } from "react-router-dom";

export const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3' style={{ backgroundColor: '#99cc99' }}>
            <div className='container-fluid'>
                <img src="/Images/LayoutPhotos/logo.png" alt="Logo" height='75px' width='80px' className="mr-5" />
                <span className='navbar-brand' style={{ color: "black" }}><i>Resources United</i></span>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavbarDropdown' aria-expanded='false' aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse ' id='navbarNavDropdown'>
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
                        <li className='nav-item'>
                            <NavLink className='nav-link' activeClassName='active-nav-link' to='/about'
                                style={{ color: "black", textDecoration: "none", padding: '10px 15px', transition: 'color 0.3s ease' }} activeStyle={{ fontWeight: 'bold', color: '#ffff99' }}>About Us</NavLink>
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