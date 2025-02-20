import type { Metadata } from "next";
import "./globals.css";
import { Anek_Malayalam } from "next/font/google";
import Navbar from "@/components/Navbar";

const anek = Anek_Malayalam({
  variable: "--font-anek",
});

export const metadata: Metadata = {
  title: "Mehar '25",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anek.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
