import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anugerah Palembang Tour | Tour Planner Bus Pariwisata",
  description:
    "Biro perjalanan wisata bus terpadu Palembang yang dikelola langsung oleh Ibu Marlin & Ibu Desi. Melayani tour rombongan bus medium & big bus ke Sumatera, Jawa, Bali, dan Lombok.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}