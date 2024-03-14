import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav col-4 d-flex flex-row">
          {/* <li className="nav-item mx-5">
            <Link href="/" passHref legacyBehavior>
              <a className="nav-link active" href="#" style={{ color: '#FF6171', fontSize: '14px', fontWeight: 400}}>
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" passHref legacyBehavior>
              <a className="nav-link active" style={{ color: '#FF6171', fontSize: '14px', fontWeight: 400}}>
                Contact
              </a>
            </Link>
          </li> */}
        </ul>

        <div className="navbar-nav col-4 d-flex flex-row justify-content-center">
          <Link href="/" passHref legacyBehavior>
            <a className="navbar-brand">
              <img src="/logo.svg" alt="Kaizen Health Logo" style={{ maxHeight: '30px' }} />
            </a>
          </Link>
        </div>

        <div className="navbar-nav col-4 d-flex justify-content-end"></div>
      </nav>

      <main>{children}</main>

      <footer className="footer">
        <div className="row pt-5 px-5">
          <div className="col-12 col-sm-4 ps-5">
            <span className="d-none d-md-flex mb-3 mb-md-0 text-body-secondary">© 2024 Kaizen Health</span>
          </div>
          <div className="col-12 col-sm-4 d-flex justify-content-center">
            <Link href="/" passHref legacyBehavior>
              <a className="navbar-brand">
                <img src="/logo.svg" alt="Kaizen Health Logo" style={{ maxHeight: '30px' }} />
              </a>
            </Link>
          </div>
          <div className="col-12 col-sm-4 my-5 text-center">
            <span className="d-md-none mb-3 mb-md-0 text-body-secondary">© 2024 Kaizen Health</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1">
            <div className="footer__bottom row">
              <div className="col col-4 text-center">
                <span className="mb-3 mb-md-0 text-body-secondary">All rights reserved</span>
              </div>
              <div className="col col-4 text-center">
                <Link href="/terms" passHref legacyBehavior className="mb-3 mb-md-0 text-body-secondary">
                  Terms & service
                </Link>
              </div>
              <div className="col col-4 text-center">
                <Link href="/privacy" passHref legacyBehavior className="mb-3 mb-md-0 text-body-secondary">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
