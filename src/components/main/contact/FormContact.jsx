import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
const FormC = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 48rem) {
    margin: 0 auto;
  }
  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`;
const Input = styled.input`
  color: ${(props) => props.theme.Subtitle};
  border: 1px solid ${(props) => props.theme.Description};
  background: none;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
  @media screen and (max-width: 36rem) {
    padding: 1rem;
  }
`;
const InputProject = styled.textarea`
  border: 1px solid ${(props) => props.theme.Description};
  background: none;
  padding: 1rem;
  height: 11rem;
  resize: none;
  color: ${(props) => props.theme.Subtitle};
  font-size: 1rem;
  outline: none;
`;
const ButtomForm = styled.button`
  width: 10rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.Subtitle};
  background: none;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.Title};
  font-family: "Fira Code", monospace;
  &:hover {
    background-color: ${(props) => props.theme.Hover};
  }
`;
function FormContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1ws3xds",
      "template_zslq32f",
      form.current,
      "ZD_8FYGrpSoVVUwFY"
    );
    e.target.reset();
  };
  return (
    <FormC ref={form} onSubmit={sendEmail}>
      <Input type="text" name="name" placeholder="Insert your name" />
      <Input type="email" name="email" placeholder="Insert your email" />
      <InputProject
        name="project"
        cols={30}
        rows={10}
        placeholder="Write your massage"
      />
      <ButtomForm href="#contact">Send Message</ButtomForm>
    </FormC>
  );
}

export default FormContact;
