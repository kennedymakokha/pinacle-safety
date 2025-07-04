import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pinnacle safety solutions",
  description: "Leading provider of integrated fire protection and security solutions across Kenya. Technical expertise and business excellence for prestigious developments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <div className="min-h-screen overflow-x-hidden flex flex-col">
          <main className="flex-grow overflow-x-hidden">
            <Header />
            {/* page content */}
          </main>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
