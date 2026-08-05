"use client";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });
const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });
const ScrollRefresh = dynamic(() => import("@/components/ScrollRefresh"), { ssr: false });

export default function ClientOnlyShell() {
  return (
    <>
      <Loader />
      <Cursor />
      <ScrollRefresh />
    </>
  );
}
