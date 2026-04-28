import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "u-teach",
  description: "UI Assignment",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}