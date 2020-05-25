import { all, takeLatest, call, put } from "redux-saga/effects";

import { signInSucess, signFailure } from "./actions";
import api from "~/services/api";
import history from "~/services/history";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      console.tron.error("USUARIO NAO É PRESTADOR");
      return;
    }

    yield put(signInSucess(token, user));

    history.push("/dashboard");
  } catch (err) {
    yield put(signFailure());
  }
}
export default all([takeLatest("@auth/SIGN_IN_REQUEST", signIn)]);
