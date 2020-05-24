import React from "react";

import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Seu e-mail" />
        <input placeholder="Nome Completo" />

        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Criar Conta</button>

        <Link to="/">Já tenho uma conta</Link>
      </form>
    </>
  );
}

export default SignUp;
