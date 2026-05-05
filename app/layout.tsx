import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ASA Studio O2O Business Proposal',
  description: 'Detailed Business Proposal and Execution Plan for ASA Studio O2O Strategy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50/30 text-slate-800 antialiased`} suppressHydrationWarning>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-64 min-h-screen flex flex-col">
            <header className="h-20 border-b border-slate-100 flex items-center justify-between px-8 bg-white shrink-0">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Business Transformation Proposal</h2>
                <p className="text-xs text-slate-400 italic">Region: Southeast Asia • 2026 Deployment</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-yellow-400 text-slate-900 text-xs font-bold rounded-lg hover:bg-yellow-500 cursor-pointer">EXECUTE PLAN</button>
              </div>
            </header>
            <div className="flex-1 p-8 grid gap-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
