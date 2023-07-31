import Head from "next/head"
import Link from "next/link"
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
      <div className="">
        0000 0000 0000 0000 Jane Appleseed 00/00 000 Cardholder Name e.g. Jane
        Appleseed Card Number e.g. 1234 5678 9123 0000 Exp. Date (MM/YY) MM YY
        CVC e.g. 123 Confirm Thank you! We've added your card details Continue
        <Footer />
      </div>
    </>
  )
}
