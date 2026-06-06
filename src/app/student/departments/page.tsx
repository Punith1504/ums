'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/VibeCard';
import { Users, Search, MessageSquare, Info, Mail, Phone, BookOpen, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const departments = ['Computer Science', 'Electronics & Comm.', 'Electrical', 'Mechanical', 'Civil'];

const facultyData = {
  'Computer Science': [
    { id: 1, name: 'Dr. V. Lokeswara Reddy', role: 'Professor & HOD', qualification: 'Ph.D in Computer Science', subjects: ['Discrete Mathematics', 'Machine Learning'], email: 'hod.cse@ksrmce.ac.in', phone: '+91-9876543210' },
    { id: 2, name: 'Dr. M. Sreenivasulu', role: 'Professor', qualification: 'Ph.D in Data Mining', subjects: ['Database Management Systems', 'Data Science'], email: 'sreenivasulu.m@ksrmce.ac.in', phone: '+91-9876543211' },
    { id: 3, name: 'Dr. N. Ramanjaneya Reddy', role: 'Associate Professor', qualification: 'Ph.D in IoT', subjects: ['Digital Logic Design', 'Computer Networks'], email: 'ramanjaneya.n@ksrmce.ac.in', phone: '+91-9876543212' },
    { id: 4, name: 'Dr. S. M. Farooq', role: 'Associate Professor', qualification: 'Ph.D in Software Engg', subjects: ['Software Engineering', 'Cloud Computing'], email: 'farooq.sm@ksrmce.ac.in', phone: '+91-9876543213' },
    { id: 5, name: 'Dr. K. Srinivasa Rao', role: 'Professor', qualification: 'Ph.D in Algorithms', subjects: ['Design & Analysis of Algorithms'], email: 'srinivasarao.k@ksrmce.ac.in', phone: '+91-9876543214' },
    { id: 6, name: 'Sri. Nagaraju Rayapati', role: 'Assistant Professor', qualification: 'M.Tech (CSE)', subjects: ['Object Oriented Programming through Java'], email: 'nagaraju.r@ksrmce.ac.in', phone: '+91-9876543215' },
  ],
  'Electronics & Comm.': [
    { id: 7, name: 'Dr. G. Hemalatha', role: 'Professor & HOD', qualification: 'Ph.D in VLSI', subjects: ['VLSI Design', 'Signals & Systems'], email: 'hod.ece@ksrmce.ac.in', phone: '+91-9876543216' },
  ]
};

export default function DepartmentsPage() {
  const [activeDept, setActiveDept] = useState('Computer Science');
  const [searchQuery, setSearchQuery] = useState('');

  const currentFaculty = facultyData[activeDept as keyof typeof facultyData] || [];
  
  const filteredFaculty = currentFaculty.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
            <Users className="w-8 h-8 text-indigo-400" />
            Departments & Faculty
          </h1>
          <p className="text-indigo-200 mt-2">Connect with your professors and explore department directories.</p>
        </div>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input 
            type="text" 
            placeholder="Search faculty or subject..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-indigo-500/50 transition-colors"
          />
        </div>
      </motion.div>

      {/* Department Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 hide-scrollbar">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${
              activeDept === dept
                ? 'bg-indigo-500 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Faculty Grid */}
      <motion.div 
        key={activeDept}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
      >
        {filteredFaculty.map((faculty, idx) => (
          <motion.div
            key={faculty.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <GlassCard className="p-6 h-full flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
              
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg flex-shrink-0">
                  {faculty.name.replace('Dr. ', '').replace('Sri. ', '').charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{faculty.name}</h3>
                  <p className="text-indigo-400 text-sm font-medium">{faculty.role}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6 relative z-10 flex-1">
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <GraduationCap className="w-4 h-4 mt-0.5 text-white/40" />
                  <span>{faculty.qualification}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-white/70">
                  <BookOpen className="w-4 h-4 mt-0.5 text-white/40" />
                  <div className="flex flex-wrap gap-1">
                    {faculty.subjects.map((sub, i) => (
                      <span key={i} className="bg-white/10 px-2 py-0.5 rounded text-xs">{sub}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Mail className="w-4 h-4 text-white/40" />
                  <a href={`mailto:${faculty.email}`} className="hover:text-indigo-300 transition-colors">{faculty.email}</a>
                </div>
              </div>

              <div className="flex gap-3 relative z-10 pt-4 border-t border-white/10 mt-auto">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors border border-white/5">
                  <Info className="w-4 h-4" /> Profile
                </button>
                <Link href="/student/messages" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-lg">
                    <MessageSquare className="w-4 h-4" /> Message
                  </button>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        ))}

        {filteredFaculty.length === 0 && (
          <div className="col-span-full py-12 text-center">
            <p className="text-white/50 text-lg">No faculty found matching your search.</p>
          </div>
        )}
      </motion.div>

    </div>
  );
}
