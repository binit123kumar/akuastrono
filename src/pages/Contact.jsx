import React from "react";
import "../Styles/Contact.css";
// Assuming 'Staff3' is an imported image
// You might need to add: import Staff3 from 'path/to/Staff3.jpg'; 

function Contact() {
  return (
    // Wrap all elements in a single parent div (or a React Fragment <>)
    <div className="Contact-page"> 

      {/* --- Map Section --- */}
      <div className="Contact-box" style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7369481.266118341!2d85.134929!3d25.592302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58702e5ae787%3A0x6c55883d32ec4db4!2sAryabhatta%20Knowledge%20University!5e0!3m2!1sen!2sin!4v1716946990588!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>

      {/* --- Staff Section (The content you added outside the return) --- */}
      <div className="Faculty-box" style={{ padding: "20px", textAlign: "center" }}>
               
       <h2>Contact</h2>
        <h3>Lalan Kumar Mandal</h3>
        <h3> Email - mandallallan@gmail.com</h3>
        <h3> CONTACT NO-7903256476</h3>
      </div>
    </div>
  );
}

export default Contact;