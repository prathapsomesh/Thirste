import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Poppins } from "next/font/google";

// Configure Poppins (you can choose weights & subsets)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick what you need
  variable: "--font-poppins", // for Tailwind or CSS vars
});

export const metadata = {
  title: "Thirste",
  description: "Customised Branded Water Bottles",
  icons: {
    icon: "/thirste.svg", // or .png / .svg
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
