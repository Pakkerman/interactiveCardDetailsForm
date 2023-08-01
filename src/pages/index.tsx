import Head from "next/head"
import Image from "next/image"
import React from "react"
import { useFormik } from "formik"

// components
import Footer from "~/components/Footer"
import { CardBack, CardFront } from "../components/cards"

// others
import { formSchema } from "~/formSchema/schema"

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive card details form</title>
        <meta
          name="description"
          content="A Frontend Mentor Challenge Built With create-t3-app"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className=" flex flex-col items-center bg-slate-800">
        <div className=" flex w-full flex-col items-center bg-White md:flex-row">
          <section className="relative h-[330px] w-full md:h-full">
            {/* bg div */}
            <div className="h-[240px] bg-mobile bg-cover bg-no-repeat md:h-[900px] md:min-h-min md:bg-desktop" />
            <div className=" fixed left-[55%] top-[-20px] translate-x-[-45%] scale-[60%]">
              <CardBack />
            </div>
            <div className="fixed left-[45%] top-[90px] translate-x-[-55%] scale-[60%]">
              <CardFront />
            </div>
          </section>
          <section className="px-6 md:w-[60%]">
            <CardForm />
          </section>
          {/* Confirm Thank you! We've added your card details Continue */}
          <Footer />
        </div>
      </main>
    </>
  )
}

function CardForm() {
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

  for (let key of Object.keys(errors)) {
    console.log(key, ":", errors[key])
  }

  return (
    <form className="max-w-[375px]" onSubmit={handleSubmit} autoComplete="off">
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
      </div>
    </form>
  )
}
