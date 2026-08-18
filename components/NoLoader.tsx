"use client";
import { useEffect } from "react";

export default function NoLoader() {
  useEffect(() => {
    document.body.classList.add("no-loader", "loaded");
  }, []);
  return null;
}
