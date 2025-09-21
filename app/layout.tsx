import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header'; // ✅ Only import here
import { Footer } from '@/components/Footer'; // ✅ Only import here

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ifBash - ServiceNow Consulting & Implementation Services',
  description: 'Leading consulting firm specializing in ServiceNow implementations, digital transformation, and enterprise solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header /> {/* ✅ Only use here */}
          <main className="flex-1">
            {children} {/* This is where your page content goes */}
          </main>
          <Footer /> {/* ✅ Only use here */}
        </div>
      </body>
    </html>
  );
}
