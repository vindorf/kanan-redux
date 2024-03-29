import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "../redux/provider";
import Navbar from "./components/Navbar";


const pjs = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Kanan HackFresse",
  description: "Generated HackFresse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pjs.className}>
      <body className="pb-24 h-screen overflow-hidden">
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
