import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Yousaf Portfolio | Full Stack Web Developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" overflow-x-hidden selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
