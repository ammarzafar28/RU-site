import { Link } from "react-router-dom";

export const HomeBody1 = () => {
    return (
        <div>
            <div className="row g-0 mt-5 d-flex align-items-center bg-light justify-content-center">
                <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                    <img src="/Images/LayoutPhotos/d3-cleanup.jpg" alt="D3 clean up event" className="img-fluid mb-3 mb-lg-0" />
                </div>
                <div className="col-12 col-lg-6 text-center text-lg-start mt-3 mt-lg-0">
                    <div className="p-3">
                        <h2>Unifying San Antonians by promoting volunteerism in education & social welfare</h2>
                        <p className="lead">
                            By bringing diverse San Antonio communities together, we believe that issues in education,
                            healthcare, security, housing, and other social matters can be better addressed.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row g-0 mt-5 d-flex align-items-center bg-light justify-content-center">
                <div className="col-12 col-lg-6 order-lg-2 text-center mb-4 mb-lg-0">
                    <img src="/Images/LayoutPhotos/ruta-checkin.JPG" alt="RUTA checkin" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6 text-center text-lg-start mt-3 mt-lg-0">
                    <div className="p-3">
                        <h2>Join us in our journey of unifying the city!</h2>
                        <p className="lead">
                            By applying to be a volunteer tutor for RUTA, helping us in our social events,
                            or through an impactful donation, you too can make a difference.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row g-0 mt-5 custom-logo-card">
                <div className="col-12 text-center">
                    <h2 className="mt-3">Proud Partners of Resources United</h2>
                </div>
                <div className="col-12 d-flex flex-wrap justify-content-center align-items-center mt-5">
                    <div className="p-3">
                        <img src="/Images/Partners/mcecc-partner.png" alt="MCECC Logo" className="img-fluid" style={{ maxHeight: '200px' }} />
                    </div>
                    <div className="p-3">
                        <img src="/Images/Partners/cosa-partner.jpeg" alt="COSA Logo" className="img-fluid" style={{ maxHeight: '200px' }} />
                    </div>
                    <div className="p-3">
                        <img src="/Images/Partners/pop-partner.jpeg" alt="PoP Logo" className="img-fluid" style={{ maxHeight: '200px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
