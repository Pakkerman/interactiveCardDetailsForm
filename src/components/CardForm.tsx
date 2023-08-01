import React from "react"
import { useFormik } from "formik"
import { formSchema } from "~/formSchema/schema"
import Footer from "./Footer"

export function CardForm() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      number: "",
      month: "",
      year: "",
      CVC: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form
      className="mx-auto max-w-[375px]"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="space-y-4">
        <div className="h-24 space-y-1">
          <label className="text-sm tracking-wider">CARDHOLDER NAME</label>
          <input
            id="name"
            type="text"
            className={`customInput ${
              errors.name && touched.name
                ? "border-red-400"
                : "border-LightGrayishViolet"
            }`}
            placeholder="e.g. Jane Appleseed"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name.toUpperCase()}
          />
          {errors.name && touched.name && (
            <p className="text-xs text-red-400">{errors.name}</p>
          )}
        </div>
        <div className="h-24 space-y-1">
          <label className=" text-sm tracking-wider">CARD NUMBER</label>
          <input
            id="number"
            type="text"
            className={`customInput ${
              errors.number && touched.number
                ? "border-red-400"
                : "border-LightGrayishViolet"
            }`}
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.number}
          />
          {errors.number && touched.number && (
            <p className="text-xs text-red-400">{errors.number}</p>
          )}
        </div>
        <div className="flex h-24 space-x-2">
          <div className="w-[50%] space-y-1">
            <label className="text-sm tracking-wider">EXP. DATE (MM/YY)</label>
            <div className="flex space-x-2">
              <div className="space-y-1">
                <input
                  id="month"
                  type="text"
                  className={`customInput ${
                    errors.month && touched.month
                      ? "border-red-400"
                      : "border-LightGrayishViolet"
                  }`}
                  placeholder="MM"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.month}
                />
                {errors.month && touched.month && (
                  <p className=" text-xs text-red-400">{errors.month}</p>
                )}
              </div>
              <div className="space-y-1">
                <input
                  id="year"
                  type="text"
                  className={`customInput ${
                    errors.year && touched.year
                      ? "border-red-400"
                      : "border-LightGrayishViolet"
                  }`}
                  placeholder="YY"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.year}
                />
                {errors.year && touched.year && (
                  <p className=" text-xs text-red-400">{errors.year}</p>
                )}
              </div>
            </div>
          </div>
          <div className="w-[50%] space-y-1">
            <label className="text-sm tracking-wider">CVC</label>
            <input
              id="CVC"
              type="text"
              className={`customInput ${
                errors.CVC && touched.CVC
                  ? "border-red-400"
                  : "border-LightGrayishViolet"
              }`}
              placeholder="e.g. 123"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.CVC}
            />
            {errors.CVC && touched.CVC && (
              <p className="text-xs text-red-400">{errors.CVC}</p>
            )}
          </div>
        </div>
        <button
          className={`${
            isSubmitting ? "opacity-25" : ""
          } w-full rounded-lg bg-VeryDarkViolet p-4 text-LightGrayishViolet`}
          type="submit"
          disabled={isSubmitting}
        >
          Confirm
        </button>
        <Footer />
      </div>
    </form>
  )
}
