import emailImg from "../images/Email.png";

function Contact({contactRef}) {
  return (
    <section className="contact" id="contact" ref={contactRef}>
      <h2>CONTACT ME</h2>
      <div className="contact__content">
        <img src={emailImg} alt="email"></img>
        <form className="contact__form" id="contact-form">
          <div className="contact__input">
            <label forhtml="name">Name :</label>
            <input type="text" name="name" id="name" placeholder="Enter your name here" required />
          </div>
          <div className="contact__input">
            <label forhtml="email">E-mail :</label>
            <input type="email" name="email" id="email" placeholder="Enter your email here" required />
          </div>
          <div className="contact__input message">
            <label forhtml="message">Message :</label>
            <textarea name="message" id="message" placeholder="Enter your message here" required />
          </div>
          <button>SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
