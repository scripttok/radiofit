import type { Metadata, Viewport } from "next";
import { DM_Sans, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Fonte display — nome da rádio, títulos grandes
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Fonte body — textos, labels, botões
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Fonte mono — timestamps, dados técnicos
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "radiofit — Sua rádio online",
    template: "%s | radiofit",
  },
  description:
    "Plataforma de rádio online com as melhores músicas e programação.",
  keywords: ["rádio", "música", "online", "streaming", "radiofit"],
  authors: [{ name: "radiofit" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "radiofit",
    title: "radiofit — Sua rádio online",
    description: "Plataforma de rádio online com as melhores músicas.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f1a",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
