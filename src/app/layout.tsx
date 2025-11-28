import type { Metadata } from "next";
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NEL55Y84KJ"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NEL55Y84KJ');
            `,
          }}
        />
      </head>

      <body className={`${poppins.className}`}>
        <AppProviders>
          <Navbar />
          <main className="min-h-screen w-screen pt-[75px]">
            {children}
          </main>
          <Footer />
          
          {/* ✅ Add Chat Widget here */}
          <ChatWidget />
        </AppProviders>
      </body>
    </html>
  );
}
