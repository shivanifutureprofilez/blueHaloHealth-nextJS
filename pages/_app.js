import "nprogress/nprogress.css"; 
import "@/styles/globals.css";
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";
import NProgress from "nprogress";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
NProgress.configure({ showSpinner: false, speed: 400 });

export default function App({ Component, pageProps }) {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 50);

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [pathname, searchParams]);


  return <>
  <UserProvider>
    <Toaster
      toastOptions={{
        position: "top-right",
        className: "",
        style: {
          fontSize: "14px", // Corrected "font-size" to camelCase as required in JSX styles
        },
      }}
    />
  <Component {...pageProps} />
  </UserProvider>
  </>
  ;
}
