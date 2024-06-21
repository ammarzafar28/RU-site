import { Link } from "react-router-dom";

export const Story = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mt-5 mb-5">About Us</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src="/Images/LayoutPhotos/RU-logo-gradient.jpeg" alt="Gradient Logo" className="img-fluid" />
                    </div>
                </div>
                <div className="mt-5 row">
                    <div className="col-12">
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
                            <li>Professional Development</li>
                            <li>Community Engagement</li>
                            <li>Social Impact</li>
                        </ol>
                        <p className="lead text-center">
                            Join us in our journey of social entrepreneurship! <Link to="/getinvolved">By applying to be a volunteer for RUTA,</Link> a RUSO member,
                            or through an impactful donation <a href="https://www.paypal.com/donate/?hosted_button_id=8TVMKSM4A7ZT2" target="_blank" rel="noopener noreferrer">here</a>,
                            you too can make a difference.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
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
                <div className="row">
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
                <div className="row">
                    <div className="col-12">
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
        </div>
    );
};
