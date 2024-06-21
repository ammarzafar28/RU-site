import { Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './Footer.css'; // Add this line if you have custom CSS for additional styling

export const Footer = () => {
    return (
        <footer className="footer-container pt-4">
            <div className="container">
                <div className="row footer-top text-center text-md-start">
                    <div className="col-md-4 mb-3">
                        <img src="/Images/LayoutPhotos/logo.png" alt="Logo" className="footer-logo img-fluid" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="footer-social-media">
                            <a href="https://www.instagram.com/resourcesunited/" className="bi bi-instagram mx-2"></a>
                            <a href="https://twitter.com" className="social-icon mx-2"></a>
                            <a href="https://instagram.com" className="social-icon mx-2"></a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="footer-signup">
                            {/* Add any signup form or additional info here */}
                        </div>
                    </div>
                </div>
                <div className="row footer-mission text-center">
                    <div className="col-12">
                        <p className="mission-statement mx-auto" style={{ maxWidth: '600px' }}>
                            Resources United is a 501(c)(3) non-profit organization providing charitable education and avenues for
                            San Antonians to give back to their local communities. In addition to our mission, Resources United
                            partners with San Antonio city officials and other non-profit organizations to work on fostering a
                            unified identity amongst San Antonians in an effort to increase volunteerism and decrease underemployment
                            in our city.
                        </p>
                    </div>
                </div>
                <div className="row footer-nav text-center mt-3">
                    <div className="col-12">
                        <Link to="/home" className="mx-2">Home</Link>
                        <Link to="/getinvolved" className="mx-2">Get Involved</Link>
                        <Link to="/contact" className="mx-2">Contact Us</Link>
                    </div>
                </div>
                <div className="row footer-bottom text-center mt-3">
                    <div className="col-12">
                        <p>© 2023 Resources United. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
