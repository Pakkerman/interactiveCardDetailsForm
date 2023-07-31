import { useFormik } from "formik"
import Head from "next/head"
import Image from "next/image"
import React, { useState } from "react"
import Footer from "~/components/Footer"

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

function CardFront() {
  return (
    <div className="bg-fit h-[240px] w-[447px] overflow-hidden rounded-xl bg-cardFront px-8 py-4">
      <div className="relative">
        <div className="absolute left-0 top-0 flex items-center space-x-3">
          <div className="h-12 w-12 rounded-full border-2 border-White bg-white"></div>
          <div className="h-6 w-6 rounded-full border-2 border-White"></div>
        </div>
        <p className="">0000 0000 0000 0000</p>
        <div className="">
          <p className="">Jane Appleseed </p>
          <p className="">00/00</p>
        </div>
      </div>
    </div>
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
  })

  return (
    <form className="">
      <div className="flex flex-col space-y-2 text-VeryDarkViolet ">
        <label>CARDHOLDER NAME</label>
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          className="customInput"
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
        <label>CARD NUMBER</label>
        <input
          value={formik.values.number}
          onChange={formik.handleChange}
          className="customInput"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <label>EXP. DATE (MM/YY) CVC</label>
        <div className="flex justify-center space-x-2">
          <input
            value={formik.values.month}
            onChange={formik.handleChange}
            className="customInput w-[25%]"
            type="text"
            placeholder="MM"
          />

          <input
            value={formik.values.year}
            onChange={formik.handleChange}
            className="customInput w-[25%]"
            type="text"
            placeholder="YY"
          />
          <input
            value={formik.values.CVC}
            onChange={formik.handleChange}
            className="customInput w-[50%]"
            type="text"
            placeholder="e.g. 123"
          />
        </div>
        <button className="rounded-lg bg-VeryDarkViolet p-4 text-LightGrayishViolet">
          Confirm
        </button>
      </div>
    </form>
  )
}
