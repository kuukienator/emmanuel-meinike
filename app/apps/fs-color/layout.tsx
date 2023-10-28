import { Metadata } from 'next';
import { Rubik, Zilla_Slab } from 'next/font/google';

import '../../globals.css';
import 'tailwindcss/tailwind.css';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
