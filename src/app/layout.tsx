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
  title: 'Roots Translation',
  description:
    'A Translation of the Bible that focused on consistent word-for-word hyper-literal translation, along with extensive lexicon.',
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf3f0' },
    { media: '(prefers-color-scheme: dark)', color: 'green' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Roots Translation',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={noto.className} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
