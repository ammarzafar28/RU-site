import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-5" style={{backgroundColor: '#CCF5CF', position: 'relative', bottom: 0, width: '100%', color: 'black'}}
        >
            <p className="col-md-4 mb-0">Resources United | Copyright © 2023</p>
            <ul className="nav nav-bar-dark col-md-4 justify-content-end">
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

