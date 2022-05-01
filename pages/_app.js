import React, { useEffect, useState } from "react";

import { LengProvider } from "context/lengContext";
import { LoadingScreen } from "components/LoadingScreen/LoadingScreen";

import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <LengProvider>
      <Component {...pageProps} />
    </LengProvider>
  );
}
