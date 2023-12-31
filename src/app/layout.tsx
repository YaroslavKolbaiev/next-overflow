import React from 'react';
import type { Metadata } from 'next';
import '../styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeProvider';

export const metadata: Metadata = {
  title: 'NextOverflow',
  description: 'A platform for asking and solving web development topics.',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerAction: 'primary-text-gradient hover:text-primary-500',
        },
      }}
    >
      <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>
          <body className="font-inter">{children}</body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
