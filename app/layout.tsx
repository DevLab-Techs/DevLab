import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
// import MotionProvider from "@/components/providers/motion-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devlab-tech.com"),
  title: {
    default: "DevLab Tech Software Company",
    template: "%s | DevLab Tech Co.",
  },
  description:
    "DevLab Tech is your premier partner for developing cutting-edge full stack applications. Our expert team specializes in creating bespoke solutions tailored to your unique needs, leveraging the latest technologies to deliver seamless and scalable software experiences. From front-end design to back-end development, trust DevLab Tech to bring your vision to life with precision and innovation.",
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "devlab",
    "devlab tech",
    "devlab technology",
    "devlab co",
    "software development company",
    "web development company",
    "mobile app development company",
    "react js developer",
    "nodejs developer",
    "full stack developer",
    "devlab company",
    "devlab software",
    "technology",
    "software",
    "software applications",
    "applications",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
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
      <head></head>
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
          <main className="flex-1 overflow-y-auto overflow-x-hidden add-scrollbar">
            {/* <MotionProvider> */}
            {children}
            {/* </MotionProvider> */}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
