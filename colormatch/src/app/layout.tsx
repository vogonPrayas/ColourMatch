import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import"./global.css"
export default function RootLayout({
  children,
  random
}: Readonly<{
  children: React.ReactNode;
  random: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="ody">{children}</body>
      {random}
    </html>
  );
}
