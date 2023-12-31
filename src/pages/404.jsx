import { RiAlarmWarningFill } from "@react-icons/all-files/ri/RiAlarmWarningFill";
import * as React from "react";
import { Link } from "react-router-dom";

// import Layout from "../../src/components/layout/Layout";
// import ArrowLink from "../components/links/ArrowLink";
// import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <div>
      {/* <Seo templateTitle="Not Found" /> */}

      <main>
        <section className="bg-white">
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-black">
            <RiAlarmWarningFill
              size={60}
              className="drop-shadow-glow animate-flicker text-red-500"
            />
            <h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
            <Link className="mt-4 md:text-lg" to="/">
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
