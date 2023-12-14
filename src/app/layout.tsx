import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Advertise from "./layout/Advertise";
import Newsletter from "./layout/Newsletter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Advertise/>
        <Header />
        {children}
        <Newsletter/>
        <Footer />
      </body>
    </html>
  );
}
