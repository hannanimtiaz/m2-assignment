import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import ButtonAppBar from "./components/Navbar";
import BootstrapClient from "./components/BoostrapClient";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M2 Test App",
  description: "A Test assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ButtonAppBar />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        <BootstrapClient />
      </body>
    </html>
  );
}
