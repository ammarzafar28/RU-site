export const AboutPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mt-3 mb-3">About Us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-4">
                        <p>ADD IMAGE HERE</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-4">
                        <h3 className="text-center">Our Story</h3>
                        <h4>Unifying San Antonio communities in opposition to division</h4>
                        <p className="lead">
                            Now more than ever, we witness divisiveness among people in America. By promoting volunteerism,
                            we aim to bridge what separates us and encourage inclusion amongst diversity. We encourage bringing
                            people together to unite in giving back to our local communities within the city of San Antonio.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center">Our Mission</h3>
                    <h4 className="text-center">The mission of Resources United is to bridge San Antonio communities together through education and social welfare</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Meet the Resources United Team</h3>
                    <h4 className="text-center mt-3 mb-3">Board of Directors</h4>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <img src="/Images/MemberHeadshots/ZainHeadshot.jpeg" alt="headshot" height="250" width="250" />
                    <p className="lead">Zain Hussain</p>
                    <p className="lead"><i>Founder & Chair of Board</i></p>
                </div>
                <div className="col">
                    <img src="/Images/MemberHeadshots/ZaydHeadshot.jpeg" alt="headshot" height="250" width="250" />
                    <p className="lead">Zayd Yaghi</p>
                    <p className="lead"><i>Vice Chair</i></p>
                </div> 
                <div className="col">
                    <img src="/Images/MemberHeadshots/ZeinHeadshot.jpeg" alt="headshot" height="250" width="250" />
                    <p className="lead">Zein Al-Rafati</p>
                    <p className="lead"><i>Secretary</i></p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src="/Images/MemberHeadshots/JorgeHeadshot.png" alt="headshot" height="250" width="250" />
                    <p className="lead">Jorge Gonzalez Bisteni</p>
                    <p className="lead"><i>Director of Marketing</i></p>
                </div>
                <div className="col">
                    <img src="/Images/MemberHeadshots/ZoraizHeadshot.jpeg" alt="headshot" height="250" width="250" />
                    <p className="lead">Zoraiz Zia</p>
                    <p className="lead"><i>Founder & Advisor</i></p>
                </div>
                <div className="col">
                    <img src="/Images/MemberHeadshots/AlaaHeadshot.jpeg" alt="headshot" height="250" width="250" />
                    <p className="lead">Alaa Kroma</p>
                    <p className="lead"><i>Advisor</i></p>
                </div>
            </div>
        </div>
    );
}
