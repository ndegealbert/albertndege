import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import emailjs from "emailjs-com";

import {
  SectionContainer,
  StyledH1,
  StyledParagraph,
  StyledHeader,
} from "../../../common";
import { StyledForm, StyledInput } from "./styles";

emailjs.init("PGvsMN0_gjAsR78JM");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, sentSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_kx37emj", "template_kybnf5g", {
        name: formData.name,
        email: formData.email,
        signup_date: formData.message,
        from_name: formData.name,
        reply_to: formData.message,
      })
      .then((result) => {
        sentSent(true);
        console.log("Email successfully sent!", result.text);
      })
      .catch((error) => {
        console.error("There was an error sending the email:", error.text);
      });
  };

  return (
    <SectionContainer>
      <StyledHeader>
        <StyledH1>Contact Me</StyledH1>
        <StyledParagraph>
          Do you want to change the world like I do? Do you have an awesome
          opportunity or project for me? Feel free to get in touch.
        </StyledParagraph>
      </StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          label="Name"
          control="input"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <StyledInput
          label="Email"
          control="input"
          name="email"
          type="email"
          placeholder="yourname@company.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <StyledInput
          label="Message"
          control="textarea"
          name="message"
          placeholder="Hello, it's me, and I was wondering..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <p> {sent ? "Email successfully sent! Will get back " : ""}</p>
        <Button secondary type="submit">
          Send
        </Button>
      </StyledForm>
    </SectionContainer>
  );
};

export default Contact;
