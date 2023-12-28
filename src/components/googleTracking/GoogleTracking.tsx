"use client";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const GoogleTracking = () => {
  useEffect(() => {
    ReactGA.initialize("G-FKQLHFB3VJ");
  }, []);
  return null;
};

export default GoogleTracking;
