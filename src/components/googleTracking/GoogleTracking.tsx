"use client";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const GoogleTracking = () => {
  useEffect(() => {
    ReactGA.initialize("G-FKQLHFB3VJ");
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Selim Ben Hlel Portfolio",
    });
  }, []);
  return null;
};

export default GoogleTracking;
