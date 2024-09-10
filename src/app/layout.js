import { Poppins } from "next/font/google";
import '../../public/fonts/style.css'
import "./globals.scss";

const poppins = Poppins({ weight: ['100','200','300','400', '500', '600'], subsets: ["latin"] });

export const metadata = {
  title: "Kayleigh Regan's portfolio",
  description: "Portfolio by Kayleigh Regan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
