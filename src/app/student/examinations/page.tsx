'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/VibeCard';
import { Calendar, FileText, Download, Clock, BookOpen, AlertCircle, Award, MapPin } from 'lucide-react';

export default function ExaminationsPage() {
  const [activeTab, setActiveTab] = useState('calendars');

  const academicCalendars = [
    { id: 1, date: 'Oct 27, 2025', title: 'Academic Calendars for MTech I Semester : AY 2025-2026', type: 'M.Tech', status: 'New' },
    { id: 2, date: 'Aug 30, 2025', title: 'Academic Calendars for MBA I Year: AY 2025-2026', type: 'MBA', status: 'Active' },
    { id: 3, date: 'Aug 30, 2025', title: 'Academic Calendars for B.Tech I Semester for AY 2025-2026', type: 'B.Tech', status: 'Active' },
    { id: 4, date: 'Jul 17, 2025', title: 'Academic Calendars for B.Tech VII & VIII Semester for AY 2025-2026', type: 'B.Tech', status: 'Active' },
    { id: 5, date: 'Jul 17, 2025', title: 'Academic Calendars for B.Tech V & VI Semester for AY 2025-2026', type: 'B.Tech', status: 'Active' },
    { id: 6, date: 'Jul 17, 2025', title: 'Academic Calendars for B.Tech III & IV Semester for AY 2025-2026', type: 'B.Tech', status: 'Active' },
    { id: 7, date: 'Dec 20, 2024', title: 'Academic Calenders for BTech Even Semester Programs 2024-25', type: 'B.Tech', status: 'Archived' },
  ];

  const recentNotifications = [
    { id: 1, date: 'Oct 05, 2026', title: 'B.Tech V Semester Mid-1 Examinations Timetable Released', priority: 'high' },
    { id: 2, date: 'Oct 01, 2026', title: 'Fee Payment Portal Open for Even Semesters', priority: 'medium' },
    { id: 3, date: 'Sep 25, 2026', title: 'Notification for Recounting/Revaluation for B.Tech IV Sem', priority: 'medium' },
  ];

  const upcomingExams = [
    { id: 1, subject: 'Design and Analysis of Algorithms', date: 'Oct 20, 2026', time: '10:00 AM - 01:00 PM', type: 'Mid-Term 1', location: 'Block-A, Room 204' },
    { id: 2, subject: 'Operating Systems', date: 'Oct 22, 2026', time: '10:00 AM - 01:00 PM', type: 'Mid-Term 1', location: 'Block-A, Room 205' },
    { id: 3, subject: 'Database Management Systems', date: 'Oct 24, 2026', time: '02:00 PM - 05:00 PM', type: 'Mid-Term 1', location: 'Main Block, Room 101' },
    { id: 4, subject: 'Software Engineering', date: 'Oct 26, 2026', time: '10:00 AM - 01:00 PM', type: 'Mid-Term 1', location: 'Block-C, Seminar Hall' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <FileText className="w-8 h-8 text-indigo-400" />
            Examination Portal
          </h1>
          <p className="text-indigo-200 mt-2">Personalized Academic Calendars, Timetables, and Results.</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-white/10 p-1 rounded-xl backdrop-blur-md overflow-x-auto">
          {['calendars', 'notifications', 'timetables'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all capitalize whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'calendars' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-white">Official Academic Calendars</h2>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold">Latest Updates</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicCalendars.map((cal, idx) => (
                <motion.div 
                  key={cal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <GlassCard className="p-6 h-full flex flex-col group cursor-pointer hover:border-indigo-500/50 transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Calendar className="w-24 h-24 text-indigo-400" />
                    </div>
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                      <span className="text-xs font-bold px-3 py-1 bg-white/10 rounded-lg text-white/70 flex items-center gap-2">
                        <Clock className="w-3 h-3" /> {cal.date}
                      </span>
                      {cal.status === 'New' && (
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors relative z-10">
                      {cal.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 flex items-center justify-between relative z-10">
                      <span className="text-xs font-semibold text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-md">
                        {cal.type}
                      </span>
                      <button className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors">
                        Download <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <GlassCard className="overflow-hidden">
            <div className="p-6 border-b border-white/10 bg-white/5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-indigo-400" /> Exam Notifications
              </h2>
            </div>
            <div className="divide-y divide-white/10">
              {recentNotifications.map((notif) => (
                <div key={notif.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${notif.priority === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-indigo-300 mb-1">{notif.date}</p>
                      <h4 className="text-lg font-medium text-white group-hover:text-indigo-300 transition-colors">{notif.title}</h4>
                    </div>
                  </div>
                  <button className="px-5 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>
        )}

        {activeTab === 'timetables' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold text-white">Your Upcoming Exams</h2>
              <GlassCard className="overflow-hidden">
                <div className="divide-y divide-white/10">
                  {upcomingExams.map((exam) => (
                    <div key={exam.id} className="p-6 hover:bg-white/5 transition-colors flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div>
                        <span className="text-xs font-bold text-indigo-400 mb-1 block uppercase tracking-wider">{exam.type}</span>
                        <h4 className="text-lg font-bold text-white">{exam.subject}</h4>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 md:items-center">
                        <div className="flex items-center gap-2 text-white/70 bg-white/5 px-4 py-2 rounded-lg">
                          <Calendar className="w-4 h-4 text-indigo-400" />
                          <span className="text-sm font-medium">{exam.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70 bg-white/5 px-4 py-2 rounded-lg">
                          <Clock className="w-4 h-4 text-indigo-400" />
                          <span className="text-sm font-medium">{exam.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70 bg-white/5 px-4 py-2 rounded-lg">
                          <MapPin className="w-4 h-4 text-indigo-400" />
                          <span className="text-sm font-medium">{exam.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">Results Summary</h2>
              <GlassCard className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">Passed</span>
                </div>
                <p className="text-sm text-white/50 mb-1">Previous Semester CGPA</p>
                <h3 className="text-4xl font-black text-white mb-4">8.75</h3>
                <div className="pt-4 border-t border-white/10">
                  <button className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition-colors">
                    View Full Results
                  </button>
                </div>
              </GlassCard>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
