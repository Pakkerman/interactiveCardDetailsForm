import * as yup from "yup"

export const formSchema = yup.object().shape({
  holderName: yup
    .string()
    .matches(/^[A-z\s-]+$/, "Invalid")
    .max(30)
    .required("Required"),
  cardNumber: yup
    .string()
    .matches(/^[0-9]+/, "Invalid")
    .length(16, "Invalid")
    .required("Required"),
  month: yup
    .number()
    .typeError("Invalid")
    .min(0, "Invalid")
    .max(12, "Invalid")
    .positive()
    .integer()
    .required("Required"),
  year: yup
    .number()
    .typeError("Invalid")
    .min(0, "Invalid")
    .max(99, "Invalid")
    .positive("Invalid")
    .integer()
    .required("Required"),
  CVC: yup.string().length(3, "Invalid").required("Required"),
})

export type FormFields = {
  holderName: string
  cardNumber: string
  month: string
  year: string
  CVC: string
}
