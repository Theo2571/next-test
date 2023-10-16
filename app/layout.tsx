import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provide from "@/redux/Provide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provide>
          <main>{children}</main>
        </Provide>
      </body>
    </html>
  );
}
