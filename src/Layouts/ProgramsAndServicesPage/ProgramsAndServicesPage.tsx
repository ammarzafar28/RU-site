import Carousel from "./components/Carousel";

export const ProgramsAndServicesPage = () => {

    const images = [
        'd3-cleanup.jpg',
        'district-event-2.jpg',
        // Add more image URLs as needed
    ];

    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Programs & Services</h1>
            <div className="row g-0 mt-5 d-flex align-items-center bg-light justify-content-center">
                <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                    <img src="/Images/LayoutPhotos/zein-tutoring.JPG" alt="RUTA tutoring" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6 text-center text-lg-start">
                    <div className="p-3">
                        <h2>Resources United Tutoring Academy (RUTA)</h2>
                        <p className="lead">
                            RUTA is a leading RU initiative offering free math tutoring and comprehensive STAAR test prep services for
                            children in kindergarten through eighth grade (K-8). As a 501(c)(3) charitable organization, RU is proud to
                            partner with the San Antonio Public Library, creating a nurturing environment for free tutoring that focuses
                            on STAAR preparation, personalized homework assistance, and critical thinking development.
                        </p>
                        <p className="lead">
                            Our programs are designed to provide affordable tutoring options and volunteer opportunities in San Antonio.
                            We encourage RU volunteers to exercise strategic leadership skills in building multiple RUTAs from the ground
                            up across the city. RUTA showcases the incredible potential of young, driven individuals to create meaningful,
                            charitable educational opportunities. Through RUTA, we invite the community to get involved, donate, and support
                            free tutoring services, making a significant impact on the education and future success of our youth.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row g-0 mt-5 d-flex align-items-center bg-light justify-content-center">
                <div className="col-12 col-lg-6 order-lg-2 text-center mb-4 mb-lg-0">
                    <img src="/Images/LayoutPhotos/district-event-2.jpg" alt="District Event 2" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6 text-center text-lg-start order-lg-1">
                    <div className="p-3">
                        <h2>Resources United Student Organization (RUSO)</h2>
                        <p className="lead">
                            RUSO is our way of bringing college students closer to the action! By providing RUSO members with mentors
                            from their respective professions and opportunities to lead community-based projects, we’re confident that they’ll
                            go on to make enormous contributions toward their fields and communities.
                        </p>
                        <p className="lead">
                            RU has currently established RUSO at UTSA where we’ve managed to create an organization of <b>X AMOUNT</b> of members
                            actively involved in either RUTA or their own personal projects. We’re focused on implementing RUSO across all
                            the collegiate institutions within the city of San Antonio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
