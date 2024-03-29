import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Woodruff Woodstore",
  description: "The finest store for hand-made wood furniture, utilities and decoration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${inter.className} min-h-screen bg-white`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
