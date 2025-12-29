import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./component/Navbar/navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "./component/Footer/Footer";
import { AppProviders } from "./providers";
import ChatWidget from "@/app/component/Chat/ChatWidget";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kothi India || Elevate Your Lifestyle",
  description: "All Service under one roof",
  icons: {
    icon: "/favicon.gif",
    shortcut: "/favicon.gif",
    apple: "/favicon.gif",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NEL55Y84KJ"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NEL55Y84KJ');
          `}
        </Script>
      </head>

      <body className={poppins.className}>
        <AppProviders>
          <Navbar />

          {/* ✅ This padding fixes navbar overlap (you already did this right) */}
          <main className="min-h-screen w-screen pt-[75px]">
            {children}
          </main>

          <Footer />

          {/* Chat visible on all public pages */}
          <ChatWidget />
        </AppProviders>
      </body>
    </html>
  );
}
