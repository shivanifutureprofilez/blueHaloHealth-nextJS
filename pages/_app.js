import "nprogress/nprogress.css"; 
import "@/styles/globals.css";
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";
import NProgress from "nprogress";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Router } from "next/router";
NProgress.configure({ showSpinner: false, speed: 800, minimum: 0.2 })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


export default function App({ Component, pageProps }) {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 2);

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [pathname, searchParams]);

   useEffect(() => {
     AOS.init({
          duration: 400,
          once: false,
          offset: 200,
          delay: 300
        })
  }, [])

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
