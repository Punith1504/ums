import React from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { TopNav } from '@/components/ui/TopNav';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
