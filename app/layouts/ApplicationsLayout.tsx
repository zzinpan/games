import '../globals.css'
import React from "react";
import Script from "next/script";

export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <Script src="https://kit.fontawesome.com/b3f0b21e12.js" crossOrigin="anonymous"></Script>
        <div className="layout application bg-gray-700 bg-gradient-radial fixed w-full h-full">
            {children}
        </div>
      </>
  )
}
