import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // 追加
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
