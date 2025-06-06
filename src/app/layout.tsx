import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/common/navbar/navbar";
import Footer from "@/components/common/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stone",
  description: "Stones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
      >
        <Navbar/>
        <div className="pt-20">

        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
