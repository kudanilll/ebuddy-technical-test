import type { Metadata } from "next";
import Providers from "./providers";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "EBUDDY Technical Test",
  description: "Technical Test Response Submission - Achmad Daniel Syahputra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
