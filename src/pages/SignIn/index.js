import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import { signInRequest } from "~/store/modules/auth/actions";
import logo from "~/assets/logo.svg";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup.string().required("A senha é obrigatória."),
});

function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">{loading ? "Carregando..." : "Acessar"}</button>

        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}

export default SignIn;
