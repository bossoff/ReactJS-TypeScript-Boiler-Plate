export const basicFormValidation = (required: boolean, field?: string) => {
  return {
    required: required
      ? `${
          field
            ? field
                .split(" ")
                .map((word) =>
                  word.charAt(0).toUpperCase().concat(word.slice(1))
                )
                .join(" ")
            : "This"
        } field is required`
      : false,
  };
};

export const inputFormValidation = (
  required: boolean,
  message?: string,
  minLength?: number
) => {
  return {
    required: required ? message || "This field is required" : false,
    minLength: minLength
      ? {
          value: minLength + 1,
          message: `Must be more than ${minLength} character(s)`,
        }
      : {
          value: 2,
          message: "Must be more than 1 character",
        },
  };
};

export const textFormValidation = (required: boolean, minLength?: number) => {
  return {
    required: required ? "This field is required" : false,
    minLength: minLength
      ? {
          value: minLength + 1,
          message: `Must be more than ${minLength} character(s)`,
        }
      : {
          value: 2,
          message: "Must be more than 1 character",
        },
  };
};

export const nameFormValidation = (required: boolean) => {
  return {
    required: required ? "This field is required" : false,
    pattern: {
      value: /^[A-Za-z\s]*$/,
      message: "Invalid name",
    },
    minLength: {
      value: 2,
      message: "Must be more than 1 character",
    },
  };
};

export const emailFormValidation = (required: boolean) => {
  return {
    required: required ? "Email address is required" : false,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  };
};

export const passwordFormValidation = (required: boolean) => {
  return {
    required: required ? "Password is required" : false,
    pattern: {
      value:
        /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
      message:
        "password value must contain at least 1 number, 1 special character, 1 uppercase and 1 lowercase letter and be at least 8 characters in length.",
    },
    minLength: {
      value: 8,
      message: "Must be atleast 8 characters",
    },
  };
};
