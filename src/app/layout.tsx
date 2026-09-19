import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "wise parenting | Alizah Taha",
  description:
    "Parenting education and coaching that begins with self-awareness, emotional regulation, and connection.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
