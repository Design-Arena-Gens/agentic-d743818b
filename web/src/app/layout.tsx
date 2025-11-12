import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "آیینه‌ی مد | پروفایل کانال یوتوب",
  description:
    "کانال آیینه‌ی مد شما را به دنیای شوهای مد انیمیشنی و پشت صحنه‌ی دیجیتال می‌برد. عضو شوید تا جدیدترین اجراهای فانتزی و آموزش‌های طراحی لباس را از دست ندهید.",
  metadataBase: new URL("https://agentic-d743818b.vercel.app"),
  openGraph: {
    title: "آیینه‌ی مد | پروفایل کانال یوتوب",
    description:
      "شیوه‌ی نوین روایت شوهای مد؛ با آیینه‌ی مد همراه شوید و هر هفته یک اجرای تازه ببینید.",
    url: "https://agentic-d743818b.vercel.app",
    siteName: "آیینه‌ی مد",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "آیینه‌ی مد | پروفایل کانال یوتوب",
    description:
      "نمایش‌های مد انیمیشنی، پشت صحنه‌های سه‌بعدی و الهامات طراحی لباس.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
