import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import MotionProvider from "@/components/providers/motion-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "DevLab",
    template: "%s | DevLab",
  },
  description: "DevLab Company for Software Applications",
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "devlab",
    "technology",
    "software",
    "software applications",
    "applications",
  ],
  metadataBase: new URL("http://localhost:300"),
  // openGraph: {
  //   images: [
  //     "/logo.png",
  //     {
  //       url: "https://res.cloudinary.com/dddlfnsoe/image/upload/v1711403718/Asset_1_w4pvpd.png",
  //     },
  //   ],
  // },
  // icons: [
  //   {
  //     url: "/Black_Icon.svg",
  //     href: "/Black_Icon.svg",
  //   },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="add-scrollbar">
      <body
        className={cn(
          poppins.className,
          `dark:dark bg-background flex flex-col overflow-hidden selection:bg-primary`
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 overflow-auto add-scrollbar">
            <MotionProvider>{children}</MotionProvider>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
