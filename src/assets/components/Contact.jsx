import emailImg from "../images/Email.png";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>CONTACT ME</h2>
      <div className="contact__content">
        <img src={emailImg} alt="email"></img>
        <form className="contact__form" id="contact-form">
          <div className="contact__input">
            <label forhtml="name">Name :</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="contact__input">
            <label forhtml="email">E-mail :</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="contact__input message">
            <label forhtml="message">Message :</label>
            <input type="text" name="message" id="message" required />
          </div>
          <button>Send your message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
