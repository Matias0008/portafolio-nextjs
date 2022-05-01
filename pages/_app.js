import React from "react";

import { LengProvider } from "context/lengContext";

import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <LengProvider>
      <Component {...pageProps} />
    </LengProvider>
  );
}
