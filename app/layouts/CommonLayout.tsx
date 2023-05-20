import '../globals.css'
import React from "react";
import Script from "next/script";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <Script src="https://kit.fontawesome.com/b3f0b21e12.js" crossOrigin="anonymous"></Script>
        {children}
      </>
  )
}
