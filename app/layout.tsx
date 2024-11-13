"use client"
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { usePathname } from "next/navigation";

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the current path to determine the background dynamically
  const pathname = usePathname();

  // Define a map of page paths to background images
  const backgrounds: Record<string, string> = {
    "/": "/zoyaa-bg.png", // Home
    "/blissWithZoya": "/services-bg.png", // Services
    "/service": "/services-bg.png", // Services
    "/contact": "/contact-bg.png", // Contact
  };

  // Get the background image for the current route
  const backgroundImage = backgrounds[pathname] || "/default-bg.png";

  return (
    <html lang="en">
      <head>
        {/* Preload Google Fonts and Local Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Navigation and Main Content */}
        <div className="flex-grow px-6">
          <Navigation />
          <main>{children}</main>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
