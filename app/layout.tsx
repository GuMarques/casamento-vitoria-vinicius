import type { Metadata } from "next";
import { Luxurious_Script, Bacasime_Antique } from "next/font/google";
import "./globals.css";

const luxurious = Luxurious_Script({
  preload: true,
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--luxurious",
});
const bacasime = Bacasime_Antique({
  preload: true,
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--bacasime",
});

export const metadata: Metadata = {
  title: "Vinicius & Vitória",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${luxurious.variable} ${bacasime.variable} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
