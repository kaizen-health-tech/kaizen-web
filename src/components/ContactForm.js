const ContactForm = ({className}) => {
    return (
      <form name="contact" data-netlify="true" method="POST" className={`contact__form shadow p-3 mb-5 bg-body rounded ${className}`}>
        <input type="hidden" name="form-name" value="contact" />
        <p className="h3 text-center">GET STARTED</p>
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" className="form-control" id="name" />
        </div>
        <div className="form-group mt-3">
          <input type="email" name="email" placeholder="Your Email" className="form-control" id="email" />
        </div>
        <button type="submit" className="btn btn-custom px-5 mt-3">SEND ME MORE INFO</button>
        <p className="base-text-2 text-center mt-2">We won't send spam.</p>
      </form>
    );
  }
  
  export default ContactForm;
  