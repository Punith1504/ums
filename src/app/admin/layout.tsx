import React from 'react';
import { TopNav } from '@/components/ui/TopNav';
import Link from 'next/link';
import { LayoutDashboard, Users, FileText, Settings, BellRing } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

function AdminSidebar() {
  const links = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
    { name: 'Manage Students', icon: Users, href: '/admin/students' },
    { name: 'Announcements', icon: BellRing, href: '/admin/announcements' },
    { name: 'Mark Upload', icon: FileText, href: '/admin/marks' },
    { name: 'Settings', icon: Settings, href: '/admin/settings' },
  ];

  return (
    <aside className="w-64 h-screen hidden md:flex flex-col bg-slate-900/50 backdrop-blur-xl border-r border-slate-700/50 p-4 sticky top-0 shadow-2xl">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
          A
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
          ADMIN
        </h2>
      </div>

      <nav className="flex-1 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all group"
            >
              <Icon className="w-5 h-5 text-pink-400" />
              <span className="font-medium">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-950 overflow-hidden font-sans">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
