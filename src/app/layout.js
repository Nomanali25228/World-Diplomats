import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
  verification: {
    other: {
      "facebook-domain-verification": "q1fq9g2q2871lnc3psb935hj0c7v5o",
    },
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "World Diplomats",
              "url": "https://www.worlddiplomats.org",
            }),
          }}
        />

        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '888320257124254');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=888320257124254&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Footer />
        <ScrollToTop />
        <Whatsapp />
      </body>
    </html>
  );
}
