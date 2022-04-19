import "../styles/globals.scss";

import { LengProvider } from "context/lengContext";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <LengProvider>
      <Component {...pageProps} />
    </LengProvider>
  );
}
