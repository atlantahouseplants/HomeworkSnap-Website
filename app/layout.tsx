import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://homeworksnap.com"),
  title: "HomeworkSnap | Snap Homework. Learn Smarter.",
  description:
    "HomeworkSnap helps students get hint-first homework support from a photo or file upload. Built for kids, trusted by parents.",
  openGraph: {
    title: "HomeworkSnap | Snap Homework. Learn Smarter.",
    description: "Hint-first AI homework help for students. Camera + file upload. Parent-friendly insights.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
