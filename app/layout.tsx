import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
  {
    default:"NomadTek - Aménagement de véhicules sur mesure",
    template: "%s | NomadTek",
  },
  description: "Transformez votre véhicule en un outil unique et fonctionnel avec NomadTek. Découvrez nos solutions d'aménagement sur mesure pour Food Trucks, van, véhicules utilitaires, remorques.",
  alternates: {
    canonical: "https://nomadtek.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
