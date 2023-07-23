import * as React from "react";

// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
import Footer from "../Footer";
// import Header from '../Header';
import Header from "./Header/index";

export default function Layout({ children }) {
  // Put Header or Footer Here
  return (
    <>
      <div className=" top-0 z-40 w-full">
        <Header />
      </div>
      <div className=""> {children}</div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
