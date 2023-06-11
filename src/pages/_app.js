import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}
