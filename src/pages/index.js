import React from 'react';
import '../styles/home.css'

const Home = () => {
  return (
    <div className="">
      <div class="container col-xxl-8 px-4 py-5"> 
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Kaizen Health</h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with Bootstrap,
              the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, 
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 p-5 text-center bg-body-tertiary">
        <div className="container py-5">
          <h1 className="text-body-emphasis">Full-width jumbotron</h1>
          <p className="col-lg-8 mx-auto lead">
            This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code> inside to align content. Similar to above, it's been recreated with built-in grid and utility classNamees.
          </p>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="my-5 pb-2 border-bottom">Columns with icons</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="1em" height="1em"><use href="#collection"></use></svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="icon-link">
              Call to action
              <svg className="bi"><use href="#chevron-right"></use></svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="1em" height="1em"><use href="#people-circle"></use></svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="icon-link">
              Call to action
              <svg className="bi"><use href="#chevron-right"></use></svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="1em" height="1em"><use href="#toggles2"></use></svg>
            </div>
            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="icon-link">
              Call to action
              <svg className="bi"><use href="#chevron-right"></use></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="container my-5">
        <div class="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <svg class="bi mt-5 mb-3" width="48" height="48"><use href="#check2-circle"></use></svg>
          <h1 class="text-body-emphasis">Placeholder jumbotron</h1>
          <p class="col-lg-6 mx-auto mb-4">
            This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
          </p>
          <button class="btn btn-primary px-5 mb-5" type="button">
            Call to action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
