import type { Metadata } from "next";
import Navbar from "./component/Navbar/navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "./component/Footer/Footer";
import { AppProviders } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kothi India || Elevate Your Lifestyle",
  description: "All Service under one roof",
  icons: {
    icon: "/favicon.gif", // ✅ Animated GIF favicon
    shortcut: "/favicon.gif",
    apple: "/favicon.gif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className}`}>
        <main className="min-h-screen w-screen pt-[75px]">
          <AppProviders>
            <Navbar />
            {children}
            <Footer />
          </AppProviders>
        </main>
      </body>
    </html>
  );
}
