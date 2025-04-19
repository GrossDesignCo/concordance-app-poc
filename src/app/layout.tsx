import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import '@/design-system/index.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Concordance',
  description: 'Bible Concordance Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
