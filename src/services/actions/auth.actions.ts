import requestService from "../request/api.request";

import {
  AuthForgotPasswordInterface,
  AuthLoginInterface,
  AuthRegisterInterface,
  AuthVerifyEmailInterface,
} from "../interfaces/auth.interface";

export const userAuthLoginAction = async (data: AuthLoginInterface) => {
  const login = await requestService.post("/auth/login", data);
  return login;
};

export const userAuthRegisterAction = async (data: AuthRegisterInterface) => {
  const register = await requestService.post("/auth/signup", data);
  return register;
};

export const userAuthVerifyEmailAction = async (
  data: AuthVerifyEmailInterface
) => {
  const verify = await requestService.post("/auth/verify/email", data);
  return verify;
};

export const userAuthForgotPasswordAction = async (
  data: AuthForgotPasswordInterface
) => {
  const forgotPassword = await requestService.post(
    "/auth/forgot/password",
    data
  );
  return forgotPassword;
};