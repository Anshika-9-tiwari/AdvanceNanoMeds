import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: {
    default: "Advance Nanomeds | Modern Medicine Information",
    template: "%s | Advance Nanomeds",
  },
  description:
    "Advance Nanomeds product information website for medicines, benefits, safety information, pricing and enquiries.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="nanomeds">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
