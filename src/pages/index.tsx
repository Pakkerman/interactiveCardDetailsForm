import Head from "next/head"
import React from "react"

// components
import { CardBack, CardFront } from "../components/cards"
import { CardForm } from "../components/CardForm"

// others

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
      <main className="flex flex-col items-center bg-slate-800 ">
        <div className="flex w-full flex-col items-center bg-White md:flex-row ">
          <section className="relative h-[330px] md:h-full md:max-w-[483px] md:flex-[1_1] ">
            <div className="h-[240px] w-[100vw] bg-mobile bg-cover bg-no-repeat md:h-[900px] md:min-h-min md:w-full md:bg-desktop" />
            <div className="absolute left-[55%] top-[-20px] translate-x-[-45%] scale-[60%] transition-all md:left-[50%] md:top-[45%] md:translate-x-[-50%] md:scale-[65%] xl:left-[40%] xl:translate-x-0 xl:scale-90">
              <CardBack />
            </div>
            <div className="absolute left-[45%] top-[90px] translate-x-[-55%] scale-[60%] transition-all md:left-[50%] md:top-[20%] md:translate-x-[-50%] md:scale-[65%] xl:left-[20%] xl:top-[17%] xl:translate-x-0 xl:scale-90">
              <CardFront />
            </div>
          </section>
          <section className="px-6 md:flex-[1_1]">
            <CardForm />
          </section>
          {/* Confirm Thank you! We've added your card details Continue */}
        </div>
      </main>
    </>
  )
}
