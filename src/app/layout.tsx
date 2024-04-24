import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Foooter from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curiosidades de Tecnologia",
  description: "Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header/>
        {children}
        <Foooter/>
      </body>
    </html>
  );
}
