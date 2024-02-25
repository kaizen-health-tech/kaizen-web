import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav col-4 d-flex flex-row">
          <li className="nav-item mx-5">
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
          </li>
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

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Kaizen Health</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
