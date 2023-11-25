import "./globals.css";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Providers } from "@/providers";
import { defaultFont } from "./fonts";
import favicon from "../../public/favicon.svg";

export const metadata: Metadata = {
  title: "Matteo Bianchi",
  description: "Myself and my career",
  icons: favicon,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
