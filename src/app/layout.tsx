import { Instrument_Serif } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Xcelens - Student Life Coach",
  description: "Empowering students to excel in academics and life with personalized coaching and guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} antialiased`}>

        <ErrorReporter />

        {children}
      </body>
    </html>
  );
}
