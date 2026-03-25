import type {Metadata} from 'next';
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Sintaxis Quantum | Julian Arango',
  description: 'AI Engineer & Data Analyst Terminal',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable} dark`}>
      <body className="antialiased selection:bg-primary/30 selection:text-primary" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
