import type { Metadata } from "next";
import "./globals.css";
import ReactQueryClientProvider from "@/components/query/ReactQueryClientProvider";

export const metadata: Metadata = {
  title: "SpaceVenture",
  description: "Get a trip to space with SpaceVenture!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">{children}</html>
    </ReactQueryClientProvider>
  );
}
