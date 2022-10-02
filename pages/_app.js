import React from "react";
import 'tailwindcss/tailwind.css';
import NavBar from "../components/navbar/nav";
import Footer from "../components/footers";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp;
