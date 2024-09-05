import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import {
  SectionContainer,
  StyledH1,
  StyledParagraph,
  StyledHeader,
} from "../../../common";
import { StyledForm, StyledInput } from "./styles";
import { IoSocialLinkedin, IoSocialTwitter } from "react-icons/lib/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Send form data via Formspree
    fetch("https://formspree.io/f/mldrvndp", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSent(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        alert("There was an error. Please try again.");
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
        <p>
          {sent ? "Email successfully sent! Will get back to you shortly." : ""}
        </p>
        <Button secondary type="submit">
          Send
        </Button>
        <div>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <li style={{ color: "#0077b5", cursor: "pointer" }}>
              <a
                href="https://www.linkedin.com/in/ndege-albert-136178155/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <IoSocialLinkedin size="30" />
              </a>
            </li>
            <li style={{ color: "#1da1f2", cursor: "pointer" }}>
              <a
                href="https://x.com/albertndege_"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <IoSocialTwitter size="30" />
              </a>
            </li>
          </ul>
        </div>
      </StyledForm>
    </SectionContainer>
  );
};

export default Contact;
