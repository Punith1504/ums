'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/VibeCard';
import { BookOpen, FileText, Download, CheckCircle, Clock, ChevronRight, Award, Calendar } from 'lucide-react';

export default function LMSPage() {
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedYear, setSelectedYear] = useState('All');

  const courseData = [
    // 1st Year
    { id: 1, year: '1st Year', code: '2021101', name: 'Mathematics - I', progress: 100, attendance: 92, result: 'O', syllabus: 'Math_I_Syllabus.pdf' },
    { id: 2, year: '1st Year', code: '2021102', name: 'Applied Physics', progress: 100, attendance: 88, result: 'A+', syllabus: 'Physics_Syllabus.pdf' },
    { id: 3, year: '1st Year', code: '2005103', name: 'C Programming & Data Structures', progress: 100, attendance: 95, result: 'O', syllabus: 'C_Programming_Syllabus.pdf' },
    { id: 4, year: '1st Year', code: '2024104', name: 'English', progress: 100, attendance: 85, result: 'A', syllabus: 'English_Syllabus.pdf' },
    
    // 2nd Year
    { id: 5, year: '2nd Year', code: '2021301', name: 'Discrete Mathematics', progress: 100, attendance: 90, result: 'A+', syllabus: 'Discrete_Math_Syllabus.pdf' },
    { id: 6, year: '2nd Year', code: '2005302', name: 'Database Management Systems', progress: 100, attendance: 85, result: 'O', syllabus: 'DBMS_Syllabus.pdf' },
    { id: 7, year: '2nd Year', code: '2005303', name: 'Object Oriented Programming through Java', progress: 100, attendance: 92, result: 'A+', syllabus: 'Java_Syllabus.pdf' },
    { id: 8, year: '2nd Year', code: '2005304', name: 'Digital Logic Design', progress: 100, attendance: 80, result: 'B+', syllabus: 'DLD_Syllabus.pdf' },
    { id: 9, year: '2nd Year', code: '2005401', name: 'Design and Analysis of Algorithms', progress: 100, attendance: 96, result: 'O', syllabus: 'DAA_Syllabus.pdf' },
    { id: 10, year: '2nd Year', code: '2005402', name: 'Operating Systems', progress: 100, attendance: 88, result: 'A', syllabus: 'OS_Syllabus.pdf' },
    
    // 3rd Year
    { id: 11, year: '3rd Year', code: '2005501', name: 'Computer Networks', progress: 80, attendance: 82, result: 'Pending', syllabus: 'CN_Syllabus.pdf' },
    { id: 12, year: '3rd Year', code: '2005502', name: 'Compiler Design', progress: 75, attendance: 78, result: 'Pending', syllabus: 'Compiler_Syllabus.pdf' },
    { id: 13, year: '3rd Year', code: '2005503', name: 'Artificial Intelligence', progress: 85, attendance: 91, result: 'Pending', syllabus: 'AI_Syllabus.pdf' },
    { id: 14, year: '3rd Year', code: '2005504', name: 'Web Technologies', progress: 90, attendance: 89, result: 'Pending', syllabus: 'WebTech_Syllabus.pdf' },
    { id: 15, year: '3rd Year', code: '2005601', name: 'Machine Learning', progress: 40, attendance: 85, result: 'Pending', syllabus: 'ML_Syllabus.pdf' },
    { id: 16, year: '3rd Year', code: '2005602', name: 'Cryptography and Network Security', progress: 50, attendance: 80, result: 'Pending', syllabus: 'CNS_Syllabus.pdf' },
    
    // 4th Year
    { id: 17, year: '4th Year', code: '2005701', name: 'Big Data Analytics', progress: 10, attendance: 90, result: 'Pending', syllabus: 'BigData_Syllabus.pdf' },
    { id: 18, year: '4th Year', code: '2005702', name: 'Internet of Things', progress: 15, attendance: 85, result: 'Pending', syllabus: 'IoT_Syllabus.pdf' },
    { id: 19, year: '4th Year', code: '2005703', name: 'Deep Learning', progress: 5, attendance: 95, result: 'Pending', syllabus: 'DeepLearning_Syllabus.pdf' },
    { id: 20, year: '4th Year', code: '2005801', name: 'Major Project', progress: 20, attendance: 100, result: 'Pending', syllabus: 'Project_Guidelines.pdf' },
  ];

  const assignments = [
    { id: 1, course: 'Machine Learning', title: 'Linear Regression Implementation', due: 'Oct 15, 2026', status: 'pending' },
    { id: 2, course: 'Artificial Intelligence', title: 'A* Search Algorithm', due: 'Oct 10, 2026', status: 'submitted' },
  ];

  const materials = [
    { id: 1, course: 'Machine Learning', title: 'Unit 3: Neural Networks.pdf', size: '2.4 MB', date: 'Oct 01, 2026' },
    { id: 2, course: 'Artificial Intelligence', title: 'Knowledge Representation Note.pdf', size: '1.1 MB', date: 'Oct 05, 2026' },
  ];

  const filteredCourses = selectedYear === 'All' 
    ? courseData 
    : courseData.filter(course => course.year === selectedYear);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-indigo-400" />
            My Courses
          </h1>
          <p className="text-indigo-200 mt-2">Access your courses from 1st Year to Final Year.</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-white/10 p-1 rounded-xl backdrop-blur-md">
          {['courses', 'assignments', 'materials'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
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

      {/* Content Area */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'courses' && (
          <>
            {/* Year Filter */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {['All', '1st Year', '2nd Year', '3rd Year', '4th Year'].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedYear === year 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <GlassCard key={course.id} className="p-6 flex flex-col group cursor-pointer hover:border-indigo-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg text-xs font-bold border border-indigo-500/30">
                      {course.code}
                    </div>
                    <div className="px-3 py-1 bg-white/10 text-white/60 rounded-lg text-xs font-bold">
                      {course.year}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-indigo-300 transition-colors min-h-[56px] line-clamp-2">
                    {course.name}
                  </h3>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                      <p className="text-white/50 text-xs flex items-center gap-1 mb-1"><Calendar className="w-3 h-3"/> Attendance</p>
                      <p className={`font-bold ${course.attendance >= 85 ? 'text-green-400' : 'text-amber-400'}`}>{course.attendance}%</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                      <p className="text-white/50 text-xs flex items-center gap-1 mb-1"><Award className="w-3 h-3"/> Result</p>
                      <p className={`font-bold ${course.result === 'Pending' ? 'text-indigo-300' : 'text-green-400'}`}>{course.result}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-white/80 mb-2">
                        <span>Course Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`} 
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <button className="w-full py-2 bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-500/30 text-indigo-300 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" /> Download Syllabus
                    </button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </>
        )}

        {activeTab === 'assignments' && (
          <GlassCard className="overflow-hidden">
            <div className="divide-y divide-white/10">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${assignment.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-pink-500/20 text-pink-400'}`}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-1">{assignment.course}</p>
                      <h4 className="text-lg font-medium text-white">{assignment.title}</h4>
                      <p className="text-sm text-white/50 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" /> Due: {assignment.due}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {assignment.status === 'submitted' ? (
                      <span className="flex items-center gap-1 text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-sm font-medium">
                        <CheckCircle className="w-4 h-4" /> Submitted
                      </span>
                    ) : (
                      <button className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition-colors">
                        Submit Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        )}

        {activeTab === 'materials' && (
          <GlassCard className="overflow-hidden">
            <div className="divide-y divide-white/10">
              {materials.map((mat) => (
                <div key={mat.id} className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                      <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-indigo-300 transition-colors">{mat.title}</h4>
                      <p className="text-xs text-white/50 mt-1">{mat.course} • {mat.size} • Uploaded: {mat.date}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </GlassCard>
        )}
      </motion.div>
    </div>
  );
}
