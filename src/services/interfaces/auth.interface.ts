export interface AuthLoginInterface {
  email: string;
  password: string;
}

export interface AuthRegisterInterface {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  confirmpassword: string;
  country: string | number;
  role: string | number;
}

export interface AuthVerifyEmailInterface {
  email: string;
  otp: string;
}

export interface AuthForgotPasswordInterface {
  email: string;
}

export interface AuthRestVerifyOtpInterface {
  email: string;
  otp: string;
}

export interface AuthResendOtpInterface {
  email: string;
  type: string;
}

export interface AuthResetPasswordInterface {
  email: string;
  password: string;
  confirmpassword: string;
  otp: string;
}