import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Сочи стройка",
  description: "god bless and love everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
