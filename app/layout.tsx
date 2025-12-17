import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalNav from "../components/global_nav";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200" , "300","400", "700"],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
