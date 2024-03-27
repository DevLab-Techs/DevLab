import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DevLab",
    short_name: "DevLab",
    description: "DevLab Company for Software Applications",
    start_url: "/",
    display: "browser",
    background_color: "#030712",
    theme_color: "#6d28d9",
    shortcuts: [
      {
        name: "DevLab About",
        url: "/about",
      },
      {
        name: "DevLab Works",
        url: "/works",
      },
      {
        name: "DevLab Skills",
        url: "/skills",
      },
      {
        name: "DevLab Contact",
        url: "/contact",
      },
    ],
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-150x150.png",
        sizes: "150x150",
        type: "image/png",
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
