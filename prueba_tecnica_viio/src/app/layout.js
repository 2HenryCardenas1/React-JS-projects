import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MAYNOOTH",
  description: "Prueba tecnica VIIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="flex justify-center items-center h-16">
          <p>&copy; 2023 H3C4</p>
        </footer>
      </body>
    </html>
  );
}
