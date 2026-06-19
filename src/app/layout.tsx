import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GSAPInit from '@/components/GSAPInit';

export const metadata: Metadata = {
  title: 'Trican Security Inc. — Maryland Security Systems',
  description:
    'Trican Security designs, installs, and supports surveillance, badge access, alarm, fire, and network systems for businesses and government agencies across Maryland.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Saira:wght@500;600&family=Exo+2:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <GSAPInit />
      </body>
    </html>
  );
}
