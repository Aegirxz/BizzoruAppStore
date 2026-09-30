import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bizzoru Store | App Premium",
  description: "Akses premium untuk streaming, gaming, dan kreativitas. Aman, cepat, dan terpercaya.",
  icons: {
    icon: "/brandlogo.jpeg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}