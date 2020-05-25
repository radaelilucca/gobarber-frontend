import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.svg";

import { signUpRequest } from "~/store/modules/auth/actions";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "No mínimo 6 caracteres."),
  name: yup.string().required("O nome é obrigatório"),
});

function SignUp() {
  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="Seu e-mail" />

        <Input
          name="password"
          type="password"
          placeholder="Crie uma senha secreta"
        />
        <button type="submit">
          {loading ? "Carregando..." : "Criar conta"}
        </button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}

export default SignUp;
