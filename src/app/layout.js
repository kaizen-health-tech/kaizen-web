import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" passHref legacyBehavior>
            <a className="navbar-brand"><img src="/kaizen_logo.png" alt="Kaizen Health Logo" style={{ maxHeight: '30px' }} /></a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
              <Link href="/" passHref legacyBehavior>
                <a className="nav-link active">Home</a>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <a className="nav-link">Contact</a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"></svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Kaizen Health</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
