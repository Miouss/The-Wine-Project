import type { Metadata } from "next";
import { Header, Footer } from ".";
import { montserrat } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Les Trois Clés",
  description: "Wine website about the domain 'Les Trois Clés'",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}