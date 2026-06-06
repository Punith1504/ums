'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/VibeCard';
import { PlayCircle, Clock, BookOpen, ChevronRight, FileText, Download, CheckCircle, Flame } from 'lucide-react';
import Link from 'next/link';

export default function LMSOverviewPage() {
  const activeCourses = [
    { id: 1, name: 'Machine Learning', code: '2005601', progress: 40, nextClass: '10:00 AM', color: 'from-blue-500 to-indigo-500' },
    { id: 2, name: 'Web Technologies', code: '2005504', progress: 90, nextClass: '12:00 PM', color: 'from-fuchsia-500 to-pink-500' },
    { id: 3, name: 'Artificial Intelligence', code: '2005503', progress: 85, nextClass: 'Tomorrow', color: 'from-emerald-500 to-teal-500' },
  ];

  const upcomingTasks = [
    { id: 1, title: 'Linear Regression Implementation', course: 'Machine Learning', type: 'Assignment', due: 'Today, 11:59 PM', priority: 'high' },
    { id: 2, title: 'Knowledge Representation Quiz', course: 'Artificial Intelligence', type: 'Quiz', due: 'Tomorrow, 5:00 PM', priority: 'medium' },
    { id: 3, title: 'React Hooks Project', course: 'Web Technologies', type: 'Project', due: 'Oct 15', priority: 'medium' },
  ];

  const recentMaterials = [
    { id: 1, title: 'Unit 3: Neural Networks', course: 'Machine Learning', type: 'PDF' },
    { id: 2, title: 'A* Search Algorithm Notes', course: 'Artificial Intelligence', type: 'PDF' },
    { id: 3, title: 'React Context API', course: 'Web Technologies', type: 'Video' },
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
            <BookOpen className="w-8 h-8 text-indigo-400" />
            Learning Management System
          </h1>
          <p className="text-indigo-200 mt-2">Welcome back! Pick up right where you left off.</p>
        </div>
        
        <div className="flex gap-4">
          <GlassCard className="px-6 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Study Streak</p>
              <p className="text-lg font-bold text-white">12 Days</p>
            </div>
          </GlassCard>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Active Courses & Materials */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Active Courses */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Continue Learning</h2>
            <Link href="/student/courses" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1">
              View All Courses <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 relative overflow-hidden group cursor-pointer border-white/5 hover:border-indigo-500/50 transition-colors">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-white/10 text-white/70 rounded-lg text-xs font-bold">
                        {course.code}
                      </span>
                      <PlayCircle className="w-8 h-8 text-white/30 group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{course.name}</h3>
                    <p className="text-sm text-white/50 flex items-center gap-2 mb-6">
                      <Clock className="w-4 h-4" /> Next Class: {course.nextClass}
                    </p>
                    
                    <div>
                      <div className="flex justify-between text-xs text-white/80 mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-1.5">
                        <div 
                          className="h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" 
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Recent Materials */}
          <h2 className="text-xl font-bold text-white mt-8 mb-4">Recently Uploaded Materials</h2>
          <GlassCard className="overflow-hidden">
            <div className="divide-y divide-white/5">
              {recentMaterials.map((material) => (
                <div key={material.id} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      {material.type === 'PDF' ? <FileText className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-indigo-300 transition-colors">{material.title}</h4>
                      <p className="text-xs text-white/50 mt-1">{material.course}</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </GlassCard>

        </div>

        {/* Right Column: Deadlines & Activity */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Upcoming Deadlines</h2>
          <GlassCard className="p-1">
            <div className="divide-y divide-white/5">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="p-4 hover:bg-white/5 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                      task.priority === 'high' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {task.type}
                    </span>
                    <span className="text-xs text-white/50 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {task.due}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">{task.title}</h4>
                  <p className="text-xs text-white/50">{task.course}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-white/5">
              <button className="w-full py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors">
                View All Assignments
              </button>
            </div>
          </GlassCard>

          <GlassCard className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-bold text-white">Weekly Goal</h3>
            </div>
            <p className="text-sm text-white/70 mb-4">You've completed 4 out of 5 planned learning hours this week. Keep it up!</p>
            <div className="w-full bg-black/40 rounded-full h-2 mb-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-xs text-right text-white/50 font-medium">80% Completed</p>
          </GlassCard>

        </div>
      </div>
    </div>
  );
}
