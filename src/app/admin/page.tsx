'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/VibeCard';
import { BellRing, FileText, CheckCircle2, UploadCloud, Users, GraduationCap } from 'lucide-react';

export default function AdminDashboard() {
  const [announcement, setAnnouncement] = useState('');

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 pb-12">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-white mb-2">Admin Control Panel</h1>
        <p className="text-slate-400">Manage university announcements and student marks.</p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Total Students', value: '4,205', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { title: 'Active Courses', value: '186', icon: GraduationCap, color: 'text-purple-400', bg: 'bg-purple-500/10' },
          { title: 'Pending Approvals', value: '12', icon: CheckCircle2, color: 'text-amber-400', bg: 'bg-amber-500/10' },
        ].map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard className="p-6 flex items-center gap-4 bg-slate-900/50 border-slate-800">
              <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                <h3 className="text-3xl font-bold text-white mt-1">{stat.value}</h3>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Post Announcement */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <GlassCard className="p-6 bg-slate-900/50 border-slate-800 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <BellRing className="w-5 h-5 text-pink-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Post Announcement</h2>
            </div>
            
            <div className="flex-1 flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Announcement Title" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />
              <textarea 
                placeholder="Type the announcement details here..." 
                className="w-full flex-1 min-h-[120px] bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 resize-none"
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
              />
              <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-xl shadow-lg transition-all active:scale-[0.98]">
                Publish to Dashboard
              </button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Upload Marks */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <GlassCard className="p-6 bg-slate-900/50 border-slate-800 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Upload Marks (CSV)</h2>
            </div>
            
            <div className="flex flex-col gap-4">
              <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none">
                <option value="">Select Course</option>
                <option value="cs301">CS301 - Data Structures</option>
                <option value="cs302">CS302 - Web Technologies</option>
              </select>
              
              <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none">
                <option value="">Select Exam Type</option>
                <option value="mid1">Mid Term 1</option>
                <option value="mid2">Mid Term 2</option>
                <option value="end">End Semester</option>
              </select>

              <div className="mt-4 border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-800/30 transition-colors cursor-pointer group">
                <div className="p-4 bg-slate-800 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-white font-medium mb-1">Drag & Drop CSV File</h4>
                <p className="text-slate-500 text-sm">or click to browse from your computer</p>
              </div>

              <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all mt-2">
                Process & Upload Marks
              </button>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </div>
  );
}
