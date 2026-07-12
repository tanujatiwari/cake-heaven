import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { ToastProvider } from "./components/ToastProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cake Heaven | Handcrafted Celebration Cakes",
  description: "Experience the art of slow-baking and custom cakes. Fresh sourdough bread, artisan celebration cakes, and French pastries laminated daily.",
  keywords: ["bakery", "cake heaven", "sourdough", "custom cakes", "viennoiserie", "laminated pastries"],
  authors: [{ name: "Cake Heaven Team", url: "https://cakeheaven.co" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary-fixed-dim selection:text-primary">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
