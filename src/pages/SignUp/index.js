import React from "react";
import { Form, Input } from "@rocketseat/unform";

import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Seu e-mail" />
        <Input name="name" placeholder="Nome Completo" />

        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar Conta</button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}

export default SignUp;
