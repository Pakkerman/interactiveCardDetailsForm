import { useFormik } from "formik"
import Head from "next/head"
import Image from "next/image"
import React, { useState } from "react"
import Footer from "~/components/Footer"
import { CardBack, CardFront } from "../components/cards"

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
        <div className=" h-[100svh] max-w-[375px] bg-White">
          <section className="raletive">
            {/* <Image
              className=""
              src="/assets/images/bg-main-mobile.png"
              alt="background image"
              width={375}
              height={240}
            />
            <Image
              className="absolute left-7 top-0 scale-75"
              src="/assets/images/bg-card-back.png"
              alt="background image"
              width={447}
              height={245}
            /> */}

            <div className="scale-75">
              <CardFront />
            </div>
            <div className="scale-75">
              <CardBack />
            </div>
          </section>
          <section className="px-6">
            <CardForm />
          </section>
          Confirm Thank you! We've added your card details Continue
          <Footer />
        </div>
      </main>
    </>
  )
}

function CardForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      month: "",
      year: "",
      CVC: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form className="" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col space-y-2 text-VeryDarkViolet ">
        <label>CARDHOLDER NAME</label>
        <input
          id="name"
          autoComplete="off"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="customInput"
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
        <label>CARD NUMBER</label>
        <input
          id="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          className="customInput"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <label>EXP. DATE (MM/YY) CVC</label>
        <div className="flex justify-center space-x-2">
          <input
            id="month"
            value={formik.values.month}
            onChange={formik.handleChange}
            className="customInput w-[25%]"
            type="text"
            placeholder="MM"
          />

          <input
            id="year"
            value={formik.values.year}
            onChange={formik.handleChange}
            className="customInput w-[25%]"
            type="text"
            placeholder="YY"
          />
          <input
            id="CVC"
            value={formik.values.CVC}
            onChange={formik.handleChange}
            className="customInput w-[50%]"
            type="text"
            placeholder="e.g. 123"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-VeryDarkViolet p-4 text-LightGrayishViolet"
        >
          Confirm
        </button>
      </div>
    </form>
  )
}
