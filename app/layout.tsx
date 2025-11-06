import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// @ts-ignore: allow side-effect CSS import in Next.js app directory
import './globals.css';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'EduLearn - Your Gateway to Knowledge',
  description: 'Created By MKD',
  generator: 'By Mohammadkaif M Devalapur',
  icons: {
    icon: '/1761761370113-fotor-20251030212419.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
