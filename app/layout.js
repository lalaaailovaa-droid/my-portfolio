import "./globals.css";

export const metadata = {
  title: "Arin — FullStack Developer",
  description:
    "Arin's personal portfolio — a cute little corner showcasing projects, skills, and things built with code.",
  keywords: [
    "Arin",
    "FullStack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Arin" }],
  creator: "Arin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}