import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Isomer - AI Code Editor in Browser | Write Code Faster with AI",
    template: "%s | Isomer",
  },
  description:
    "Isomer is a powerful AI-powered code editor that runs directly in your browser. Write, edit, and debug code faster with intelligent AI assistance. No installation required. Support for JavaScript, Python, TypeScript, and more.",
  applicationName: "Isomer",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isomer.com",
    siteName: "Isomer",
    title: "Isomer - AI Code Editor in Browser | Write Code Faster with AI",
    description:
      "Powerful AI-powered code editor that runs directly in your browser. Write, edit, and debug code faster with intelligent AI assistance. Support for 50+ programming languages.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isomer - AI Code Editor in Browser",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isomer - AI Code Editor in Browser",
    description:
      "Write code faster with AI assistance. Browser-based code editor with intelligent autocomplete, debugging, and multi-language support.",
    images: ["/twitter-image.png"],
    creator: "@isomer",
    site: "@isomer",
  },
  metadataBase: new URL("https://isomer.com"),
  keywords: [
    "ai code editor",
    "browser code editor",
    "online code editor",
    "ai programming assistant",
    "code editor online",
    "web based ide",
    "ai coding tool",
    "intelligent code completion",
    "ai autocomplete",
    "online ide",
    "browser ide",
    "cloud code editor",
    "ai development tool",
    "code assistant",
    "javascript editor",
    "python editor",
    "typescript editor",
    "react editor",
    "code debugging",
    "ai pair programming",
    "real-time coding",
    "collaborative coding",
    "web development tool",
    "programming online",
    "code in browser",
    "no installation ide",
    "ai powered editor",
    "smart code editor",
    "developer tools",
    "coding platform",
  ],
  authors: [{ name: "Isomer Team", url: "https://isomer.com" }],
  creator: "Isomer",
  publisher: "Isomer",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://isomer.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plexMono.variable} antialiased`}>

          <Providers>{children}</Providers>

      </body>
    </html>
  );
}
