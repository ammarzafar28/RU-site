export const HomeHeader = () => {

    return (
        <div className="p-5 mb-4 header">
            <div className="container-fluid pi-5 d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-5 fw-bold">Resources United</h1>
                    <p className="col-md-8 fs-4">Donate or Volunteer to help our efforts within the San Antonio community!</p>
                    <a href="https://www.paypal.com/donate/?hosted_button_id=8TVMKSM4A7ZT2" type="button" className="btn main-color btn-large custom-button">Donate</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfT1ys4gkpxFXTCxHe00QyiyYbxHpCg7o33ZFbsbGwQesQ50Q/viewform" type="button" className="btn main-color btn-large custom-button">Volunteer</a>
                </div>
            </div>
        </div>
    );
}