import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-5" style={{ backgroundColor: '#99cc99', position: 'relative', bottom: 0, width: '100%', color: 'black' }}>
                <p className="col-md-4">Resources United | Copyright © 2023</p>
                <img src="/Images/LayoutPhotos/logo.png" alt="Logo" height='100px' width='110px' />
                <div>
                    <p className="lead custom-footer-paragraph">
                        Resources United is a 501(c)(3) non-profit organization providing charitable education and avenues for
                        San Antonians to give back to their local communities. In addition to our mission, Resources United
                        partners with San Antonio city officials and other non-profit organizations to work on fostering a
                        unified identity amongst San Antonians in an effort to reduce divisiveness in our city.
                    </p>
                </div>
                <ul className="nav nav-bar-dark  justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link px-2" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link px-2" to="/contact">Contact Us</Link>
                    </li>
                </ul>
        </footer>
    );
}

