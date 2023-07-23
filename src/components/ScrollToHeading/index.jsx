import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToHeading = ({ children, offset }) => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.style.scrollMarginTop = `${offset}px`;
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [offset, location.hash]);

  return <div>{children}</div>;
};

export default ScrollToHeading;
