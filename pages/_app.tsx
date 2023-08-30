import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "@/context/AuthContext";
import { SWRConfig } from "swr";
import { ToggleProvider } from "@/context/OpenContext";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  LoadingContextProvide,
} from "@/context/LoadingContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthContextProvider>
            <LoadingContextProvide>
              <ToggleProvider>
                <Header />
                <SWRConfig value={{ provider: () => new Map() }}>
                  <Navbar />
                  <Component {...pageProps} />
                </SWRConfig>
                <Footer />
              </ToggleProvider>
            </LoadingContextProvide>
          </AuthContextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
