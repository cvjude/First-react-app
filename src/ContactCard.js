import React from "react";

const ContactCard = props => {
  const { name, imgUrl, phone, email } = props;
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={imgUrl} />
        <h3>{name}</h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
