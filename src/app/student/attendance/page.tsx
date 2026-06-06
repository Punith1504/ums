'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/VibeCard';
import { Calendar, CheckCircle2, XCircle, Clock, BookOpen, User } from 'lucide-react';

export default function AttendancePage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('All Subjects');

  const subjectSummary = [
    { id: '2021301', name: 'Discrete Mathematics', delivered: 45, attended: 40, percentage: 88.8 },
    { id: '2005302', name: 'Database Management Systems', delivered: 50, attended: 45, percentage: 90 },
    { id: '2005303', name: 'Object Oriented Programming through Java', delivered: 48, attended: 42, percentage: 87.5 },
    { id: '2005304', name: 'Digital Logic Design', delivered: 40, attended: 35, percentage: 87.5 },
    { id: '2005305', name: 'Software Engineering', delivered: 42, attended: 38, percentage: 90.4 },
    { id: '2005401', name: 'Design and Analysis of Algorithms', delivered: 50, attended: 40, percentage: 80.0 },
    { id: '2005402', name: 'Operating Systems', delivered: 45, attended: 35, percentage: 77.7 },
  ];

  const attendanceLogs = [
    { id: 1, date: 'Oct 06, 2026', time: '09:00 AM', subject: 'Database Management Systems', faculty: 'Dr. M. Sreenivasulu', status: 'Present' },
    { id: 2, date: 'Oct 06, 2026', time: '11:00 AM', subject: 'Object Oriented Programming through Java', faculty: 'Sri. Nagaraju Rayapati', status: 'Present' },
    { id: 3, date: 'Oct 05, 2026', time: '10:00 AM', subject: 'Digital Logic Design', faculty: 'Dr. N. Ramanjaneya Reddy', status: 'Present' },
    { id: 4, date: 'Oct 05, 2026', time: '02:00 PM', subject: 'Software Engineering', faculty: 'Dr. S. M. Farooq', status: 'Absent' },
    { id: 5, date: 'Oct 04, 2026', time: '09:00 AM', subject: 'Design and Analysis of Algorithms', faculty: 'Dr. K. Srinivasa Rao', status: 'Present' },
  ];

  const filteredLogs = selectedSubject === 'All Subjects' 
    ? attendanceLogs 
    : attendanceLogs.filter(log => log.subject === selectedSubject);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-white mb-2">Attendance Detailed Report</h1>
        <p className="text-slate-400">Track your subject-wise attendance and daily logs.</p>
      </motion.div>

      {/* Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subjectSummary.map((sub, i) => (
          <motion.div key={sub.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard className="p-6 h-full flex flex-col justify-between hover:border-indigo-500/50 transition-colors cursor-pointer group" onClick={() => setSelectedSubject(sub.name)}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm font-medium border border-indigo-500/20">
                    {sub.id}
                  </span>
                  <span className={`font-bold text-lg ${sub.percentage >= 85 ? 'text-green-400' : 'text-amber-400'}`}>
                    {sub.percentage}%
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-4 group-hover:text-indigo-300 transition-colors">{sub.name}</h3>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="text-center">
                  <p className="text-white/50 mb-1">Delivered</p>
                  <p className="text-white font-bold">{sub.delivered}</p>
                </div>
                <div className="text-center">
                  <p className="text-white/50 mb-1">Attended</p>
                  <p className="text-white font-bold">{sub.attended}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Logs Table */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <GlassCard className="overflow-hidden flex flex-col">
          <div className="p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" /> Daily Logs
            </h2>
            <select 
              className="bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/50 appearance-none"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="All Subjects">All Subjects</option>
              {subjectSummary.map(sub => (
                <option key={sub.id} value={sub.name}>{sub.name}</option>
              ))}
            </select>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-white/50 text-sm uppercase tracking-wider">
                  <th className="p-4 font-medium">Date & Time</th>
                  <th className="p-4 font-medium">Subject</th>
                  <th className="p-4 font-medium">Taken By</th>
                  <th className="p-4 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-white/40" />
                        <div>
                          <p className="text-white text-sm font-medium">{log.date}</p>
                          <p className="text-white/50 text-xs">{log.time}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-white/40" />
                        <span className="text-white text-sm">{log.subject}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-white/40" />
                        <span className="text-white/80 text-sm">{log.faculty}</span>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      {log.status === 'Present' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider border border-green-500/20">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Present
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-wider border border-pink-500/20">
                          <XCircle className="w-3.5 h-3.5" /> Absent
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
                
                {filteredLogs.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-white/50">
                      No attendance logs found for this subject.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
