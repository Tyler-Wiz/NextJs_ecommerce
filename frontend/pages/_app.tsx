import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { wrapper } from "../redux/store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getTotals, cartSelector } from "../redux/reducer/cartSlice";

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default wrapper.withRedux(App);