import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").label("Name").min(5).trim(),
  gender: Yup.string().required("Gender is required").label("Gender").trim(),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required")
    .label("Email")
    .trim(),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required")
    .label("Password"),
  confirm_password: Yup.string()
    .label("confirm password")
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),

  profession: Yup.string()
    .required("Profession is required")
    .label("Profession")
    .min(5)
    .trim(),
  region: Yup.string()
    .required("Region is required")
    .label("Region")
    .min(5)
    .trim(),
  organization: Yup.string()
    .required("Organization is required")
    .label("Organization")
    .min(5)
    .trim(),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .trim()
    .required("Email is required")
    .label("Email")
    .trim(),
  password: Yup.string().required("Password is required").label("Password"),
});

export const bmiValidationSchema = Yup.object().shape({
  height: Yup.number().required("Height is required").label("Height"),
  weight: Yup.number().required("Weight is required").label("Weight"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .trim()
    .required("Email is required")
    .label("Email")
    .trim(),
});
