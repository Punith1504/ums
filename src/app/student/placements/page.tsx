'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/VibeCard';
import { Briefcase, Upload, CheckCircle2, Sparkles, Building2, DollarSign, MapPin, ChevronRight, FileText } from 'lucide-react';

const allJobs = [
  { id: 1, company: 'TCS Digital', role: 'System Engineer', package: '7.0 LPA', location: 'Hyderabad / Pune', type: 'Full Time', match: 92, skills: ['Java', 'Python', 'SQL'] },
  { id: 2, company: 'Infosys', role: 'Specialist Programmer', package: '8.0 LPA', location: 'Bangalore', type: 'Full Time', match: 88, skills: ['React', 'Node.js', 'AWS'] },
  { id: 3, company: 'Amazon', role: 'SDE-1', package: '24.0 LPA', location: 'Hyderabad', type: 'Full Time', match: 65, skills: ['Data Structures', 'Algorithms', 'System Design'] },
  { id: 4, company: 'Wipro', role: 'Project Engineer', package: '3.5 LPA', location: 'Chennai', type: 'Full Time', match: 98, skills: ['C++', 'DBMS', 'Communication'] },
  { id: 5, company: 'Tech Mahindra', role: 'Software Associate', package: '4.5 LPA', location: 'Hyderabad', type: 'Full Time', match: 85, skills: ['Java', 'Spring Boot', 'MySQL'] },
];

export default function PlacementsPage() {
  const [activeTab, setActiveTab] = useState('recommendations');
  const [resumeState, setResumeState] = useState<'idle' | 'analyzing' | 'analyzed'>('idle');
  const [extractedSkills, setExtractedSkills] = useState<string[]>([]);
  
  const handleUploadResume = () => {
    setResumeState('analyzing');
    // Simulate AI parsing delay
    setTimeout(() => {
      setExtractedSkills(['React.js', 'Next.js', 'Java', 'Python', 'Tailwind CSS', 'SQL']);
      setResumeState('analyzed');
    }, 2500);
  };

  const handleRemoveResume = () => {
    setResumeState('idle');
    setExtractedSkills([]);
  };

  const recommendedJobs = resumeState === 'analyzed' 
    ? allJobs.filter(job => job.match >= 85).sort((a, b) => b.match - a.match)
    : [];

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
            <Briefcase className="w-8 h-8 text-indigo-400" />
            Placement Cell
          </h1>
          <p className="text-indigo-200 mt-2">AI-driven job matching and campus recruitment portal.</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-white/10 p-1 rounded-xl backdrop-blur-md overflow-x-auto">
          {['recommendations', 'job_board', 'my_applications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all capitalize whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.replace('_', ' ')}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'recommendations' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: AI Resume Parser */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" /> AI Resume Matcher
              </h2>
              
              <GlassCard className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
                
                {resumeState === 'idle' && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-white/20">
                      <Upload className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-white font-medium mb-2">Upload your Latest Resume</h3>
                    <p className="text-sm text-white/50 mb-6">PDF or DOCX (Max 5MB). We will auto-extract your skills to find the best jobs.</p>
                    <button 
                      onClick={handleUploadResume}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors w-full"
                    >
                      Browse Files
                    </button>
                  </div>
                )}

                {resumeState === 'analyzing' && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin mx-auto mb-4" />
                    <h3 className="text-white font-medium mb-2 animate-pulse">Analyzing Resume...</h3>
                    <p className="text-sm text-white/50">Extracting skills, projects, and caliber.</p>
                  </div>
                )}

                {resumeState === 'analyzed' && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">Punith_Resume_v2.pdf</h3>
                          <p className="text-xs text-green-400 flex items-center gap-1 mt-1">
                            <CheckCircle2 className="w-3 h-3" /> Successfully parsed
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-sm font-medium text-white/70 mb-3">Extracted Skills Profile:</h4>
                      <div className="flex flex-wrap gap-2">
                        {extractedSkills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-indigo-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button 
                        onClick={handleRemoveResume}
                        className="flex-1 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Update Resume
                      </button>
                    </div>
                  </div>
                )}
              </GlassCard>
            </div>

            {/* Right Column: AI Recommendations */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold text-white">Recommended Opportunities</h2>
              
              {resumeState === 'idle' && (
                <GlassCard className="p-12 text-center border-dashed border-2 border-white/10 bg-white/5">
                  <Briefcase className="w-12 h-12 text-white/20 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No Resume Found</h3>
                  <p className="text-white/50">Upload your resume on the left to see personalized job recommendations tailored to your caliber.</p>
                </GlassCard>
              )}

              {resumeState === 'analyzing' && (
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <GlassCard key={i} className="p-6 h-32 animate-pulse bg-white/5 border-white/5" />
                  ))}
                </div>
              )}

              {resumeState === 'analyzed' && (
                <div className="space-y-4">
                  <AnimatePresence>
                    {recommendedJobs.map((job, i) => (
                      <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <GlassCard className="p-6 hover:bg-white/5 transition-colors group relative overflow-hidden">
                          <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-green-400 to-emerald-500 opacity-50" />
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Building2 className="w-4 h-4 text-white/50" />
                                <span className="text-sm font-medium text-white/70">{job.company}</span>
                              </div>
                              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                                {job.role}
                              </h3>
                              <div className="flex flex-wrap gap-4 text-sm">
                                <span className="flex items-center gap-1 text-green-400 bg-green-400/10 px-2 py-1 rounded-md">
                                  <DollarSign className="w-4 h-4" /> {job.package}
                                </span>
                                <span className="flex items-center gap-1 text-white/60">
                                  <MapPin className="w-4 h-4" /> {job.location}
                                </span>
                                <span className="flex items-center gap-1 text-white/60">
                                  <Briefcase className="w-4 h-4" /> {job.type}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-4 border-l border-white/10 pl-6">
                              <div className="text-right">
                                <span className="text-2xl font-black text-green-400">{job.match}%</span>
                                <p className="text-[10px] text-white/50 uppercase tracking-wider font-bold">Match Score</p>
                              </div>
                              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                Apply Now <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>

                          </div>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'job_board' && (
          <div className="space-y-6">
             <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">All Open Roles</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Search companies..." 
                  className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-64"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allJobs.map(job => (
                <GlassCard key={job.id} className="p-6 hover:border-indigo-500/30 transition-colors flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <p className="text-sm text-indigo-300">{job.company}</p>
                    </div>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold">{job.package}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="text-[10px] bg-white/5 text-white/70 px-2 py-1 rounded border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-xs text-white/40 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                    <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                      View Details & Apply
                    </button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
