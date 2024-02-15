import { Link } from "react-router-dom";

export const HomeHeader = () => {
    
    return (
        <div className="p-5 mb-4 bg-dark header">
            <div className="container-fluid pi-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-5 fw-bold">Resources United</h1>
                    <p className="col-md-8 fs-4">Donate or Volunteer to help our efforts within the San Antonio community!</p>
                    <Link type="button" className="btn main-color btn-large text-white" to="/search">Donate</Link>
                    <Link type="button" className="btn main-color btn-large text-white" to="/search">Volunteer</Link>
                </div>
            </div>
        </div>
    );
}