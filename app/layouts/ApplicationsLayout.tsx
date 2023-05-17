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
        <div className="layout application bg-[#424242] bg-gradient-radial absolute top-0 left-0 min-w-[1200px] min-h-[800px] w-full h-full">
            {children}
        </div>
      </>
  )
}
