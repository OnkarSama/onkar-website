import NavBar from "../components/Navbar/NavBar";
import { HeroUIProvider } from "@heroui/react";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Onakr's Website</title>
        <link rel="icon" type="image/x-icon" href="/PurpleHeart.png" />
      </head>
      <body
        className=""
      >
        <HeroUIProvider>
          <NavBar />
          <main className="dark text-foreground bg-background">
          {children}
          </main>
        </HeroUIProvider>
      </body>
    </html>
  );
}
