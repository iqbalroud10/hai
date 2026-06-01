import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Ditutup",
  description: "Website ini sedang ditutup untuk sementara waktu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
