import NavBar from "../components/Navbar/NavBar";
import {HeroUIProvider} from "@heroui/react";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <HeroUIProvider>
          <NavBar/>
        {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
