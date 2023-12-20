import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "../styles/global.scss";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Selim Ben Hlel Portfolio",
  description:
    "You can find information about me and how to reach me. Have a nice day",
  icons: {
    icon: "/assets/navIcon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={atkinson.className}>{children}</body>
    </html>
  );
}
