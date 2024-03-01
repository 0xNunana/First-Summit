import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const mont = Montserrat({subsets:['latin'],weight:['900','800','700','600','500','400','300']})

export const metadata: Metadata = {
  title: "First Summit IT ",
  description: "Learn Database Administration,Data Science or AI in just 5 months",
  keywords:'Data Science, Database Administration,AI,Learn',
  category: 'technology,education, science',
  metadataBase:new URL('https://first-summit.vercel.app'),
  openGraph:{
    type: "website",
    title: "First Summit IT",
    description: "Learn Database Administration,Data Science or AI in just 5 months",
    siteName: "First Summit IT",
    images:'/logo.png'
  
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
      <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
