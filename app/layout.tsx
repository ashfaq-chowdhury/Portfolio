import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashfaqur Rahman Chowdhury",
  description: "Full Stack Web Developer",
  icons: { icon: '/profile pic.png', },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
