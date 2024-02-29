import React from 'react';
import '../styles/home.scss'; 

const Home = () => {
  return (
    <div className="home">
      <div className="home__header container col-xxl-8 px-4 py-5"> 
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-lg-6">
            <img src="images/family_group.svg" className="img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-12 col-lg-6">
            <h1 className="h1 text-left">Kaizen Health:</h1>
            <h1 className="h1 text-left mb-3">Easy. Secure. Yours.</h1>
            <p className="home__header-subtitle lead h3 mb-5">
              Kaizen Health empowers users for better health control and secure health data management.
              Tailored for individuals, families, and healthcare enthusiasts, it offers 
              a user-friendly platform compliant with HIPAA. Join our closed beta for early access to the app, 
              available on Android and iOS.
            </p>
            <div className="d-grid gap-2 d-flex justify-content-md-start">
              <img src="/app_store_badge_wht.svg" className=""/>
              <img src="/google_play_badge.png" style={{ width : '150px'}}/>
            </div>
          </div>
        </div>
      </div>

      <div className="home__body-one container col-xxl-8 px-4 py-5"> 
        <div className="row align-items-center g-5 py-5">
          <div className="col-12 col-sm-5 col-md-5">
            <img src="images/woman_with_phone.svg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-12 col-sm-7 col-md-7">
            <h1 className="subtitle_two mb-3">People Who Benefit.</h1>
            <div className="lead mb-5 home__body-one-content">
              <div className="d-flex align-items-center">
                <img src="/images/bullet_point.svg" className="me-3"/>
                <p className="base-text-1 mb-0">Individuals who want better control of their health</p>
              </div>
              <div className="d-flex align-items-center">
                <img src="/images/bullet_point.svg" className="me-3"/>
                <p className="base-text-1 mb-0">Busy families who want to be informed of each others’ health</p>
              </div>
              <div className="d-flex align-items-center">
                <img src="/images/bullet_point.svg" className="me-3"/>
                <p className="base-text-1 mb-0">Healthcare enthusiasts who want to store medical record securely</p>
              </div>
              <div className="d-flex align-items-center">
                <img src="/images/bullet_point.svg" className="me-3"/>
                <p className="base-text-1 mb-0">People who want to revolutionize healthcare and access to medical records</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home__body-two container my-5 p-5 text-center bg-body-tertiary">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12">
            <img src="images/HIPAA.svg" className="img-fluid" alt="Bootstrap Themes" width="100" height="100" loading="lazy" />
          </div>
          <div className="col-12">
            <h1 className="text-body-emphasis">Empowering Your Wellness Journey</h1>
            <p className="home__body-two-content col-lg-8 mx-auto lead">
              Kaizen Health empowers users for better health control and secure health data management.
              Tailored for individuals, families, and healthcare enthusiasts, it offers 
              a user-friendly platform compliant with HIPAA. Join our closed beta for early access to the app, 
              available on Android and iOS.
            </p>
          </div>
        </div>
      </div>

      <div className="home__body-three container my-5">
        <h2 className="my-5 pb-3 border-bottom h2">Kaizen is built for</h2>
        <div className="row g-3 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col-12 col-md-4">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img src="images/bookmark_point.svg" className="img-fluid icon" alt="Bootstrap Themes" width="30" height="30" loading="lazy" />
            </div>
            <h3 className="fs-3 text-body-emphasis">Empower Your Health</h3>
            <p className="home__body-three-content pe-2">
              Gain unparalleled control over your fitness and health data with a platform designed for easy access and understanding. Transform how you manage your wellness journey.
            </p>
            {/* <a href="#" className="icon-link">
              Discover More
              <svg className="bi"><use href="#chevron-right"></use></svg>
            </a> */}
          </div>
          <div className="feature col-12 col-md-4">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img src="images/bookmark_point.svg" className="img-fluid icon" alt="Bootstrap Themes" width="30" height="30" loading="lazy" />
            </div>
            <h3 className="fs-3 text-body-emphasis">Secure Medical Storage</h3>
            <p className="home__body-three-content pe-2">
              Securely store and access your medical records with ease, knowing your data is protected and compliant with HIPAA. Ideal for healthcare enthusiasts who prioritize privacy.</p>
            {/* <a href="#" className="icon-link">
              Secure Now
              <svg className="bi"><use href="#chevron-right"></use></svg>
            </a> */}
          </div>
          <div className="feature col-12 col-md-4">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
            <img src="images/bookmark_point.svg" className="img-fluid icon" alt="Bootstrap Themes" width="30" height="30" loading="lazy" />
            </div>
            <h3 className="fs-3 text-body-emphasis">Family Health Sync</h3>
            <p className="home__body-three-content pe-2">
              Our platform enables busy families to stay informed about each other’s health status, fostering a connected and proactive approach to family wellness.
            </p>
            {/* <a href="#" className="icon-link">
              Learn Together
              <svg className="bi"><use href="#chevron-right"></use></svg>
            </a> */}
          </div>
        </div>
      </div>

      <div className="home__body-four container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <svg className="bi mt-5 mb-3" width="48" height="48"><use href="#check2-circle"></use></svg>
          <h1 className="text-body-emphasis mb-2">Revolutionize Healthcare</h1>
          <p className="home__body-four-content col-lg-6 mx-auto mb-4">
            Join us in transforming healthcare by making access to medical records
            straightforward and secure. Be part of the movement towards a more accessible and transparent health system.
          </p>
          <a
            href="mailto:info@kaizemhealth.io"
            className="btn btn-custom px-5 mb-5"
            role="button"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
