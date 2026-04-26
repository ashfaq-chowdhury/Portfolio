import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "This is a Demo Title",
  description: "Crafting digital experiences that feel effortless — from product strategy to pixel-perfect interfaces.",
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
