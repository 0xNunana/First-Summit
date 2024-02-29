import type { Metadata } from "next";
import { Inter,Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({subsets:['latin'],weight:['900','800','700','600','500','400','300']})

export const metadata: Metadata = {
  title: "First Summit IT",
  description: "Learn Data Science",
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
