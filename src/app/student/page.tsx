'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/VibeCard';
import { Calendar, Clock, BookOpen, AlertCircle, TrendingUp, CheckCircle2, FileText, MapPin, Beaker } from 'lucide-react';

import Link from 'next/link';

export default function StudentDashboard() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 pb-12">
      {/* Welcome & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 col-span-1"
        >
          <GlassCard className="h-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/30 p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Punith! 👋</h1>
            <p className="text-indigo-200 text-lg">You have 2 classes today and 1 assignment pending.</p>
          </GlassCard>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link href="/student/attendance">
            <GlassCard className="h-full flex flex-col items-center justify-center p-6 text-center group hover:bg-white/10 transition-colors cursor-pointer">
              <div className="w-16 h-16 rounded-full border-4 border-green-400 flex items-center justify-center mb-4 text-white font-bold text-xl relative shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                85%
              </div>
              <h3 className="text-white font-semibold">Attendance</h3>
              <p className="text-white/60 text-sm">Overall</p>
            </GlassCard>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="h-full flex flex-col items-center justify-center p-6 text-center group hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 text-white font-bold text-2xl border border-indigo-400/50">
              8.5
            </div>
            <h3 className="text-white font-semibold">CGPA</h3>
            <p className="text-white/60 text-sm">Current</p>
          </GlassCard>
        </motion.div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Timetable & Assignments */}
        <div className="lg:col-span-2 space-y-8">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-400" /> Today's Schedule
              </h2>
              <button className="text-sm text-indigo-400 hover:text-indigo-300">View Full</button>
            </div>
            <GlassCard className="divide-y divide-white/10">
              {[
                { time: '09:00 AM', subject: 'Data Structures', room: 'Block C - 201', type: 'Lecture' },
                { time: '11:00 AM', subject: 'Web Technologies', room: 'Lab 4', type: 'Practical' },
              ].map((cls, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-500/20 text-indigo-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-indigo-500/20">
                      {cls.time}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{cls.subject}</h4>
                      <p className="text-white/60 text-sm">{cls.room}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/80">{cls.type}</span>
                </div>
              ))}
            </GlassCard>
          </motion.div>

          {/* Upcoming Exams section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4 mt-8">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" /> Upcoming Exams
              </h2>
              <Link href="/student/examinations" className="text-sm text-indigo-400 hover:text-indigo-300">View All</Link>
            </div>
            <GlassCard className="divide-y divide-white/10">
              {[
                { subject: 'Design and Analysis of Algorithms', date: 'Oct 20, 2026', time: '10:00 AM - 01:00 PM', location: 'Block-A, Room 204' },
                { subject: 'Operating Systems', date: 'Oct 22, 2026', time: '10:00 AM - 01:00 PM', location: 'Block-A, Room 205' },
              ].map((exam, i) => (
                <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-white font-medium">{exam.subject}</h4>
                    <p className="text-white/60 text-sm flex items-center gap-4">
                      <span><Calendar className="w-3 h-3 inline mr-1"/>{exam.date}</span>
                      <span><Clock className="w-3 h-3 inline mr-1"/>{exam.time}</span>
                      <span><MapPin className="w-3 h-3 inline mr-1"/>{exam.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </GlassCard>
          </motion.div>

          {/* Assignments and Labs Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            {/* Pending Assignments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-pink-400" /> Pending Assignments
                </h2>
              </div>
              <GlassCard className="p-5 space-y-4">
                {[
                  { title: 'Linear Regression Code', course: 'Machine Learning', due: 'Tomorrow, 11:59 PM' },
                  { title: 'Project SRS Document', course: 'Software Engineering', due: 'Oct 15, 2026' },
                ].map((task, i) => (
                  <div key={i} className="flex justify-between items-start group border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <div>
                      <h4 className="text-white/90 text-sm font-medium group-hover:text-indigo-300 transition-colors">
                        {task.title}
                      </h4>
                      <p className="text-white/50 text-xs mt-1">{task.course}</p>
                    </div>
                    <span className="text-[10px] bg-pink-500/20 text-pink-400 px-2 py-1 rounded font-semibold whitespace-nowrap">
                      {task.due}
                    </span>
                  </div>
                ))}
              </GlassCard>
            </motion.div>

            {/* Upcoming Labs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Beaker className="w-5 h-5 text-emerald-400" /> Upcoming Labs
                </h2>
              </div>
              <GlassCard className="p-5 space-y-4">
                {[
                  { lab: 'Java Programming Lab', time: 'Today, 02:00 PM', location: 'Lab 2' },
                  { lab: 'Database Systems Lab', time: 'Tomorrow, 09:00 AM', location: 'Lab 4' },
                ].map((lab, i) => (
                  <div key={i} className="flex justify-between items-start group border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <div>
                      <h4 className="text-white/90 text-sm font-medium group-hover:text-indigo-300 transition-colors">
                        {lab.lab}
                      </h4>
                      <p className="text-white/50 text-xs mt-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3"/> {lab.location}
                      </p>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-semibold whitespace-nowrap">
                      {lab.time}
                    </span>
                  </div>
                ))}
              </GlassCard>
            </motion.div>
          </div>

        </div>

        {/* Right Column: Happenings/Announcements & Fee Status */}
        <div className="space-y-8">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-pink-400" /> Happenings
              </h2>
            </div>
            <GlassCard className="flex flex-col gap-4 p-5">
              {[
                { title: 'Mid-Term Examinations Schedule Released', date: 'Oct 15', new: true },
                { title: 'TechFest 2026 Registrations Open', date: 'Oct 12', new: false },
                { title: 'Holiday Declaration for Diwali', date: 'Oct 10', new: false },
              ].map((ann, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-white/90 text-sm font-medium group-hover:text-indigo-300 transition-colors line-clamp-2">
                      {ann.title}
                    </h4>
                    {ann.new && <span className="bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded animate-pulse">NEW</span>}
                  </div>
                  <p className="text-white/50 text-xs mt-1">{ann.date}</p>
                  {i !== 2 && <div className="h-px bg-white/10 mt-3" />}
                </div>
              ))}
              <button className="w-full mt-2 py-2 text-sm text-indigo-400 font-medium hover:bg-white/5 rounded-lg transition-colors">
                View All Announcements
              </button>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard className="p-6 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-500/20 rounded-full blur-2xl" />
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                Fee Status
              </h2>
              <div className="flex items-end justify-between mt-4">
                <div>
                  <p className="text-3xl font-bold text-green-400 flex items-center gap-2">
                    NIL <CheckCircle2 className="w-6 h-6" />
                  </p>
                  <p className="text-white/60 text-sm mt-1">No pending dues</p>
                </div>
                <button className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors border border-white/10">
                  Receipts
                </button>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
