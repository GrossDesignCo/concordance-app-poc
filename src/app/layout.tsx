import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Noto_Sans_Hebrew } from 'next/font/google';
import '@/design-system/index.css';
import './globals.css';

const noto = Noto_Sans_Hebrew({
  subsets: ['greek-ext', 'hebrew', 'latin-ext'],
  weight: ['400', '500', '700'],
  fallback: ['Arial'],
});

export const metadata: Metadata = {
  title: 'English Lexicon',
  description: 'Bible Concordance Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={noto.className} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
