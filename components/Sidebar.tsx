"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  FileText, 
  BarChart2, 
  Briefcase, 
  LineChart, 
  Calendar,
} from 'lucide-react';

const navItems = [
  { name: 'Executive Summary', href: '/', icon: FileText },
  { name: 'Market Research', href: '/market-research', icon: BarChart2 },
  { name: 'Business Proposal', href: '/business-model', icon: Briefcase },
  { name: 'Financial Forecast', href: '/financial-plan', icon: LineChart },
  { name: 'Execution Master Plan', href: '/execution-plan', icon: Calendar },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-slate-50/50 border-r border-slate-100 flex flex-col">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-yellow-400 rounded-sm"></div>
          <span className="font-bold tracking-tight text-sm uppercase text-slate-900">ASA Strategy Group</span>
        </div>
        <h1 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Proposal 2026-X1</h1>
      </div>
      
      <div className="flex-1 py-4">
        <div className="px-6 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Project Modules</div>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-6 py-2 text-sm transition-colors cursor-pointer",
                    isActive 
                      ? "bg-yellow-400/10 border-r-4 border-yellow-400 text-slate-900 font-medium" 
                      : "text-slate-500 hover:bg-slate-100"
                  )}
                >
                  <span className={cn("w-1.5 h-1.5 rounded-full", isActive ? "bg-yellow-500" : "bg-transparent")}></span>
                  <span className="-ml-2">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="p-6 border-t border-slate-100">
        <div className="bg-slate-900 text-white p-4 rounded-xl">
          <div className="text-[10px] text-slate-400 uppercase mb-1">Project Status</div>
          <div className="text-sm font-medium">Evaluation Phase</div>
          <div className="w-full bg-slate-700 h-1 mt-3 rounded-full overflow-hidden">
            <div className="bg-yellow-400 h-full w-1/3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
