import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "./component/footer/Footer";
import ScrollToTop from "./component/Scrolltotop/ScrollToTop";
import Whatsapp from "./component/whatsapp/Whatsapp";
import { DestinationProvider } from "./context/DestinationContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  metadataBase: new URL("https://www.worlddiplomats.org"),

  title: {
    default: "World Diplomats",
    template: "%s | World Diplomats",
  },

  description:
    "World Diplomats is a global educational UN simulation platform connecting students and young leaders worldwide.",

  applicationName: "World Diplomats",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "World Diplomats",
    description:
      "World Diplomats is a global educational UN simulation platform connecting students and young leaders worldwide.",
    url: "https://www.worlddiplomats.org",
    siteName: "World Diplomats",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "World Diplomats",
    description:
      "World Diplomats is a global educational UN simulation platform connecting students and young leaders worldwide.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="#2563eb" height={3} showSpinner={false} />

        <DestinationProvider>
          {children}
        </DestinationProvider>

        <Footer />
        <ScrollToTop />
        <Whatsapp />
      </body>
    </html>
  );
}
