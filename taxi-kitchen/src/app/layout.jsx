import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CartProvider from "@/context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* export const metadata = {
  title: "Foodies",
  description: "Best Food in Town",
}; */

export const metadata = {
  title : {
    default : "Foodies Food",
    template : "%s | Foodies"
  },
  description : "Best Food in Town"
}

const poppins = ({
  weight : ['400','500','700'],
  subsets : ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header></Header>
        <main className="w-10/12 mx-auto mt-10">
        <CartProvider>
          {children}
        </CartProvider>
        </main>
      </body>
    </html>
  );
}
