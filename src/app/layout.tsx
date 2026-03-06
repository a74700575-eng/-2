import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "بوت تنظيم الجروبات – النسخة المتكاملة",
  description:
    "بوت تيليجرام احترافي لتنظيم الجروبات بشكل كامل، مع إدارة المخالفات تلقائيًا وحماية الجروب من الروابط الضارة والسبام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
