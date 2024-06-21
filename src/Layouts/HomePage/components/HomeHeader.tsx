export const HomeHeader = () => {
    return (
        <div className="p-5 header image-background img-fluid">
            <div className="container-fluid mt-5 py-5 d-flex justify-content-center align-items-end text-center" style={{ height: '100%' }}>
                <div>
                    <h1 className="display-5 fw-bold text-white text-center">Resources United</h1>
                    <p className="mt-3 fs-4 text-white text-center">Donate or Volunteer to help our efforts within the San Antonio community!</p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <a href="https://www.paypal.com/donate/?hosted_button_id=8TVMKSM4A7ZT2" type="button" className="btn main-color btn-large custom-button">Donate</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfT1ys4gkpxFXTCxHe00QyiyYbxHpCg7o33ZFbsbGwQesQ50Q/viewform" type="button" className="btn main-color btn-large custom-button">Volunteer</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
