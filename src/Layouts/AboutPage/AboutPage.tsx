import { Link } from "react-router-dom";

export const AboutPage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mt-5 mb-5">About Us</h1>
                    </div>
                </div>
                <div className="row">
                    <img src="/Images/LayoutPhotos/RU-logo-gradient.jpeg" alt="Gradient Logo" height='auto' width='auto' />
                </div>
                <div className="mt-5 row">
                    <h3 className="text-center">
                        We provide professional development through social entrepreneurship!
                    </h3>
                    <p className="lead text-center">
                        Imagine if you got involved with a community project…You would increase your knowledge and skills 
                        while also giving back to those in need! We at Resources United (RU) believe that you have much more 
                        power to make a difference than you realize. Take it from RU staff members who have personally made a 
                        difference in the community through their community project!
                    </p>
                    <ol className="lead text-center">
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ol>
                    <p className="lead text-center">
                        Join us in our journey of social entrepreneurship! <Link to="/getinvolved">By applying to be a volunteer for RUTA,</Link> a RUSO member, 
                        or through an impactful donation <a href="https://www.paypal.com/donate/?hosted_button_id=8TVMKSM4A7ZT2" target="_blank" rel="noopener noreferrer">here</a>, 
                        you too can make a difference. 
                    </p>
                </div>
                <div className="row" >
                    <div className="col-md-12 ">
                        <div className="mt-5 mb-5">
                            <h3 className="text-center">Our Story</h3>
                            <p className="lead text-center">
                                The founders of RU came across an alarming statistic…52% of US college graduates are underemployed, 
                                meaning their work is not aligned with their training/education. <a href="https://static1.squarespace.com/static/6197797102be715f55c0e0a1/t/65d62ebce0cf8f07e3d6e006/1708535486302/Talent+Disrupted+02212024.pdf" target="_blank" rel="noopener noreferrer">(source)</a>
                            </p>
                            <p className="lead text-center">
                                Additionally, many SA nonprofits have claimed a 40-70% loss of their volunteer base after the 
                                COVID-19 pandemic affected San Antonians. Students are spending thousands of dollars on their college 
                                education only to not work in their field and we’re seeing a decline in volunteerism across the city of San Antonio. 
                            </p> 
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-12 mt-5 mb-5">
                        <h3 className="text-center">Our Mission</h3>
                        <p className="lead text-center"><i>The mission of Resources United is to empower emerging professionals
                            in our communities with leadership opportunities that educate the youth, enrich the environment,
                            and provide service to those in need.</i>
                        </p>
                        <p className="lead text-center">
                            By streamlining professional development in the context of community service, we aim to promote social 
                            unity in San Antonio and increase our volunteer rate!
                        </p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-12">
                        <div className="mt-5 mb-5">
                            <h3 className="text-center">Our Vision</h3>
                            <p className="lead text-center">
                                College graduates started Resources United and we were able to launch a FREE K-8 Tutoring Academy 
                                for low-income students.
                            </p>
                            <p className="lead text-center">
                                We believe college students are capable of extraordinary initiatives, so we launched RUSO at UTSA 
                                to make our mission come to life. We’re currently focusing on a mentorship program to entice students 
                                to join and be a proactive leader in community service projects that will require them to apply their 
                                knowledge and skills in real-world settings. 
                            </p>
                            <p className="lead text-center">
                                Our vision is to implement an integrated system of community service across San Antonio through all 
                                the universities and community colleges, so that volunteering can be incentivized, normalized, and promoted.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="container-background">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center mt-5 mb-3">Meet the Resources United Team</h3>
                        <h4 className="text-center mt-3 mb-3">Board of Directors</h4>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col image-container" style={{ textAlign: 'center' }}>
                        <img src="/Images/MemberHeadshots/ZainHeadshot.jpeg" alt="headshot" className="circular-image"/>
                        <p className="lead text-center"><b>Zain Hussain</b></p>
                        <p className="lead text-center"><i>Founder & Chairmen</i></p>
                    </div>
                    <div className="col image-container" style={{ textAlign: 'center' }}>
                        <img src="/Images/MemberHeadshots/ZaydHeadshot.jpeg" alt="headshot" className="circular-image" />
                        <p className="lead text-center"><b>Zayd Yaghi</b></p>
                        <p className="lead text-center"><i>Vice Chairmen</i></p>
                    </div>
                    <div className="col image-container" style={{ textAlign: 'center' }}>
                        <img src="/Images/MemberHeadshots/ZuLeikaHeadshot3.jpeg" alt="headshot" className="circular-image" />
                        <p className="lead text-center"><b>ZuLeika Ceja</b></p>
                        <p className="lead text-center"><i>Board Secretary</i></p>
                    </div>
                    <div className="col image-container" style={{ textAlign: 'center' }}>
                        <img src="/Images/MemberHeadshots/Sarisen-new.jpg" alt="headshot" className="circular-image" />
                        <p className="lead text-center"><b>Michael Sarisen</b></p>
                        <p className="lead text-center"><i>Operations Director</i></p>
                    </div>
                    <div className="col image-container" style={{ textAlign: 'center' }}>
                        <img src="/Images/MemberHeadshots/JorgeHeadshot.png" alt="headshot" className="circular-image" />
                        <p className="lead text-center"><b>Jorge Gonzalez Bisteni</b></p>
                        <p className="lead text-center"><i>Creative Director</i></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="text-center mt-3 mb-3">Executive Committee</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col image-container" style={{ textAlign: 'center' }}>
                        <img src="/Images/MemberHeadshots/Ammar-new.jpg" alt="headshot" className="circular-image" />
                        <p className="lead text-center"><b>Ammar Zafar</b></p>
                        <p className="lead text-center"><i>IT Project Manager</i></p>
                    </div>
                    <div className="col image-container" style={{ textAlign: 'center' }}>
                        <img src="/Images/MemberHeadshots/MichaelAdams-new.jpg" alt="headshot" className="circular-image" />
                        <p className="lead text-center"><b>Michael Adams</b></p>
                        <p className="lead text-center"><i>Social Media Coordinator</i></p>
                    </div>
                    <div className="col image-container" style={{ textAlign: 'center' }}>
                        <img src="/Images/MemberHeadshots/ZeinHeadshot.jpeg" alt="headshot" className="circular-image" />
                        <p className="lead text-center"><b>Zein Al-Rafati</b></p>
                        <p className="lead text-center"><i>Advisor</i></p>
                    </div>
                    <div className="col image-container" style={{ textAlign: 'center' }}>
                        <img src="/Images/MemberHeadshots/Alaa-new.jpg" alt="headshot" className="circular-image" />
                        <p className="lead text-center"><b>Alaa Kroma</b></p>
                        <p className="lead text-center"><i>Advisor</i></p>
                    </div>
                    <div className="col image-container" style={{ textAlign: 'center' }}>
                        <img src="/Images/MemberHeadshots/ZoraizHeadshot.jpeg" alt="headshot" className="circular-image" />
                        <p className="lead text-center"><b>Zoraiz Zia</b></p>
                        <p className="lead text-center"><i>Founder & Advisor</i></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
