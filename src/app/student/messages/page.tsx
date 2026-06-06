'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/VibeCard';
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Info, FileText as FileIcon, Image as ImageIcon } from 'lucide-react';

const contacts = [
  { id: 1, name: 'Dr. V. Lokeswara Reddy', role: 'Faculty - DAA', lastMessage: 'Please submit the assignment by tomorrow.', time: '10:45 AM', unread: 2, online: true },
  { id: 2, name: 'Placement Cell', role: 'Administration', lastMessage: 'TCS Ninja mock test link is live.', time: 'Yesterday', unread: 0, online: false },
  { id: 3, name: 'Dr. M. Sreenivasulu', role: 'HOD - CSE', lastMessage: 'The syllabus for mid-terms has been updated.', time: 'Yesterday', unread: 0, online: true },
  { id: 4, name: 'CSE Section A (Group)', role: 'Class Group', lastMessage: 'Rahul: Is the lab cancelled today?', time: 'Mon', unread: 5, online: false },
  { id: 5, name: 'Library Desk', role: 'Support', lastMessage: 'Your book "Introduction to Algorithms" is due.', time: 'Mon', unread: 0, online: true },
];

const initialMessages = [
  { id: 1, text: 'Good morning sir, here is my latest DAA assignment submission as requested.', sender: 'me', time: '10:30 AM', attachment: { type: 'pdf', name: 'DAA_Assignment_Punith.pdf', size: '2.4 MB' } },
  { id: 2, text: 'Thank you, Punith. Let me review it.', sender: 'them', time: '10:35 AM' },
  { id: 3, text: 'I also attached a screenshot of the output for the Master Theorem problem.', sender: 'me', time: '10:40 AM', attachment: { type: 'image', name: 'output_screenshot.png', size: '1.1 MB' } },
  { id: 4, text: 'Looks perfect. You can submit the physical copy by tomorrow.', sender: 'them', time: '10:45 AM' },
];

export default function MessagesPage() {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages([...messages, {
      id: Date.now(),
      text: inputMessage,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setInputMessage('');
  };

  return (
    <div className="w-full max-w-7xl mx-auto h-[calc(100vh-8rem)] min-h-[600px] flex gap-6 pb-4">
      
      {/* Left Sidebar - Contact List */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-80 flex-shrink-0 flex flex-col gap-4"
      >
        <GlassCard className="p-4 flex-shrink-0">
          <h2 className="text-xl font-bold text-white mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>
        </GlassCard>

        <GlassCard className="flex-1 overflow-y-auto overflow-hidden divide-y divide-white/5">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setActiveContact(contact)}
              className={`p-4 cursor-pointer transition-all ${activeContact.id === contact.id ? 'bg-indigo-500/20 border-l-2 border-indigo-500' : 'hover:bg-white/5 border-l-2 border-transparent'}`}
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className={`font-semibold text-sm ${activeContact.id === contact.id ? 'text-indigo-300' : 'text-white'}`}>
                  {contact.name}
                </h3>
                <span className="text-xs text-white/40">{contact.time}</span>
              </div>
              <p className="text-xs text-white/50 mb-2">{contact.role}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-white/70 truncate pr-4">{contact.lastMessage}</p>
                {contact.unread > 0 && (
                  <span className="bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {contact.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </GlassCard>
      </motion.div>

      {/* Main Chat Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex-1 hidden md:flex flex-col"
      >
        <GlassCard className="h-full flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {activeContact.name.charAt(0)}
                </div>
                {activeContact.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1a1a2e] rounded-full"></span>
                )}
              </div>
              <div>
                <h2 className="text-lg font-bold text-white leading-tight">{activeContact.name}</h2>
                <p className="text-xs text-indigo-300">{activeContact.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white/50">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors hover:text-white"><Phone className="w-5 h-5" /></button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors hover:text-white"><Video className="w-5 h-5" /></button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors hover:text-white"><Info className="w-5 h-5" /></button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors hover:text-white"><MoreVertical className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="text-center">
              <span className="text-xs font-medium text-white/30 bg-white/5 px-3 py-1 rounded-full">Today</span>
            </div>
            
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] ${msg.sender === 'me' ? 'order-2' : 'order-1'}`}>
                  <div 
                    className={`px-4 py-3 rounded-2xl shadow-sm ${
                      msg.sender === 'me' 
                        ? 'bg-indigo-500 text-white rounded-tr-sm' 
                        : 'bg-white/10 text-white rounded-tl-sm'
                    }`}
                  >
                    {msg.attachment && (
                      <div className="flex items-center gap-3 p-3 bg-white/10 rounded-xl mb-3 border border-white/5 cursor-pointer hover:bg-white/20 transition-colors">
                        <div className={`p-2 rounded-lg ${msg.attachment.type === 'pdf' ? 'bg-red-500/20 text-red-300' : 'bg-blue-500/20 text-blue-300'}`}>
                          {msg.attachment.type === 'pdf' ? <FileIcon className="w-6 h-6" /> : <ImageIcon className="w-6 h-6" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold truncate">{msg.attachment.name}</p>
                          <p className="text-xs opacity-70">{msg.attachment.size}</p>
                        </div>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  <p className={`text-[10px] text-white/40 mt-1 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-white/10 bg-white/5 flex-shrink-0">
            <form onSubmit={handleSendMessage} className="flex items-center gap-3">
              <button type="button" className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
              <button 
                type="submit"
                disabled={!inputMessage.trim()}
                className="p-3 bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-500/50 disabled:cursor-not-allowed text-white rounded-xl transition-colors shadow-lg"
              >
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </form>
          </div>
        </GlassCard>
      </motion.div>
      
    </div>
  );
}
