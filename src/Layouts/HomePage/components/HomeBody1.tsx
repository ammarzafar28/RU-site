import { Link } from "react-router-dom";

export const HomeBody1 = () => {

    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5 d-flex align-items-center bg-light justify-content-center">
                    <div className="col-sm-6 col-md-6 ">
                        <div className="ml-2 mt-2">
                            <img src="/Images/LayoutPhotos/d3-cleanup.jpg" alt="D3 clean up event" height='600' width='800' />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ml-2">
                            <h2>Unifying San Antonians by promoting volunteerism in education & social welfare</h2>
                            <p className="lead">
                                By bringing diverse San Antonio communities together, we believe that issues in education,
                                healthcare, security, housing, and other social matters can be better addressed.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row g-0 bg-light">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h2>Join us in our journey of unifying the city!</h2>
                            <p className="lead">
                                By applying to be a volunteer tutor for RUTA, helping us in our social events,
                                or through an impactful donation, you too can make a difference.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 co-md-6">
                        <div className="col-image-right mb-2">
                            <img src="/Images/LayoutPhotos/ruta-checkin.JPG" alt="RUTA checkin" height='600' width='800'/>
                        </div>
                    </div>
                </div>
                <div className="row g-0 mt-5 custom-logo-card">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2 mb-5">
                            <h2 className="text-center mt-3">Proud Partners of Resources United</h2>
                            <div className="col-md-6 container d-flex justify-content-center align-items-center mt-5">
                                <div>
                                    <img src="/Images/Partners/mcecc-partner.png" alt="MCECC Logo" height='200' width='200' />
                                </div>
                                <div>
                                    <img src="/Images/Partners/cosa-partner.jpeg" alt="COSA Logo" height='200' width='250' />
                                </div>
                                <div>
                                    <img src="/Images/Partners/pop-partner.jpeg" alt="PoP Logo" height='200' width='200' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}