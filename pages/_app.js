import "@/styles/globals.css";
import UserProvider from "./context/UserContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
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
