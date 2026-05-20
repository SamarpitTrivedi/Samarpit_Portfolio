import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Samarpit Trivedi | Data Analyst Portfolio",
  description:
    "Data analyst portfolio showcasing data analysis, visualization, machine learning projects, and business insights.",
  keywords: ["Data Analyst", "Data Science", "Python", "SQL", "Power BI", "Portfolio", "Samarpit Trivedi"],
  authors: [{ name: "Samarpit Trivedi" }],
  openGraph: {
    title: "Samarpit Trivedi | Data Analyst Portfolio",
    description: "Transforming complex data into actionable insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-[#fafafa] text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
