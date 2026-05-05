"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FileText, 
  BarChart2, 
  Briefcase, 
  LineChart, 
  Calendar,
  Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Executive Summary', href: '/', icon: FileText },
  { name: 'Market Research', href: '/market-research', icon: BarChart2 },
  { name: 'Business Model', href: '/business-model', icon: Briefcase },
  { name: 'Financial Plan', href: '/financial-plan', icon: LineChart },
  { name: 'Execution Plan', href: '/execution-plan', icon: Calendar },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-slate-50 border-r border-slate-100 flex flex-col pt-8 pb-4">
      <div className="px-8 mb-12 flex items-center gap-3">
        <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-black" />
        </div>
        <h1 className="font-bold text-lg tracking-tight text-slate-900">ASA Studio</h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors",
                isActive 
                  ? "bg-white text-slate-900 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-slate-100 relative after:absolute after:left-0 after:top-2 after:bottom-2 after:w-1 after:bg-yellow-400 after:rounded-r-full" 
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
              )}
            >
              <Icon className={cn("w-4 h-4", isActive ? "text-yellow-500" : "text-slate-400")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="px-8 mt-auto">
        <p className="text-xs text-slate-400">O2O Business Proposal<br/>Confidential Report</p>
      </div>
    </aside>
  );
}
