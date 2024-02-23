import React from 'react';
import '../styles/home.css'

const Home = () => {
  return (
    <div className="">
      <div class="container col-xxl-8 px-4 py-5"> 
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="/default.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Kaizen Health</h1>
            <p class="lead">
              At Kaizen Health, our mission is to empower individuals and families
              to take control of their health and their health data in a secure and active manner.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <img src="/app_store_badge_wht.svg" className=""/>
              <img src="/google_play_badge.png" style={{ width : '150px'}}/>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 p-5 text-center bg-body-tertiary">
        <div className="container py-5">
          <h1 className="text-body-emphasis">Empowering Your Wellness Journey</h1>
          <p className="col-lg-8 mx-auto lead">
            Kaizen health aims to provide a user friendly platform by letting users 
            get access to their fitness and health data in a more human friendly 
            format and store and access medical records securely while being fully 
            compliant with HIPAA. 
          </p>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="my-5 pb-2 border-bottom">Kaizen is built for</h2>
        <div className="row g-3 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="1em" height="1em"><use href="#people-circle"></use></svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Empower Your Health</h3>
            <p>Gain unparalleled control over your fitness and health data with a platform designed for easy access and understanding. Transform how you manage your wellness journey.</p>
            <a href="#" className="icon-link">
              Discover More
              <svg className="bi"><use href="#chevron-right"></use></svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="1em" height="1em"><use href="#people-circle"></use></svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Secure Medical Storage</h3>
            <p>Securely store and access your medical records with ease, knowing your data is protected and compliant with HIPAA. Ideal for healthcare enthusiasts who prioritize privacy.</p>
            <a href="#" className="icon-link">
              Secure Now
              <svg className="bi"><use href="#chevron-right"></use></svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="1em" height="1em"><use href="#people-circle"></use></svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Family Health Sync</h3>
            <p>Our platform enables busy families to stay informed about each other’s health status, fostering a connected and proactive approach to family wellness.</p>
            <a href="#" className="icon-link">
              Learn Together
              <svg className="bi"><use href="#chevron-right"></use></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="container my-5">
        <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <svg class="bi mt-5 mb-3" width="48" height="48"><use href="#check2-circle"></use></svg>
          <h1 class="text-body-emphasis mb-5">Revolutionize Healthcare</h1>
          <p class="col-lg-6 mx-auto mb-4">
            Join us in transforming healthcare by making access to medical records
            straightforward and secure. Be part of the movement towards a more accessible and transparent health system.
          </p>
          <button class="btn btn-primary px-5 mb-5" type="button">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
