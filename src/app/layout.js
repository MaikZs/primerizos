import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/header.css";

// Importar fuentes de Google
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Baby Life - Guía para primerizos",
  description: "Plataforma de apoyo para padres primerizos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        
      </body>
    </html>
  );
}
