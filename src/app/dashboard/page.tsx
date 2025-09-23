"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Settings, LogOut, Home, Bot, Phone, Mail, Calendar, BarChart3 } from 'lucide-react';

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn');
    const email = localStorage.getItem('userEmail');
    
    if (loggedIn === 'true' && email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    router.push('/');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0d133b' }}>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cn-blue-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d133b' }}>
      {/* Navigation */}
      <nav className="border-b border-gray-600/30 backdrop-blur-sm" style={{ backgroundColor: '#0e143e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-cn-blue-400 rounded-xl flex items-center justify-center mr-3">
                <span className="text-cn-navy-900 font-bold text-lg">CN</span>
              </div>
              <h1 className="text-xl font-bold text-white">CogNodes Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">{userEmail}</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 404 Content */}
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-cn-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-16 h-16 text-cn-blue-400" />
            </div>
            <h1 className="heading-1 text-white mb-4">Dashboard Coming Soon</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              We&apos;re working hard to build your personalized dashboard. This will be your command center for managing all your AI automation tools.
            </p>
          </div>

          {/* Feature Preview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm" style={{ backgroundColor: '#0e143e' }}>
              <div className="w-12 h-12 bg-cn-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-cn-navy-900" />
              </div>
              <h3 className="heading-5 text-white mb-2">AI Receptionist</h3>
              <p className="text-gray-400 text-sm">Monitor call logs and performance</p>
            </div>

            <div className="rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm" style={{ backgroundColor: '#0e143e' }}>
              <div className="w-12 h-12 bg-cn-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-cn-navy-900" />
              </div>
              <h3 className="heading-5 text-white mb-2">Chatbot Analytics</h3>
              <p className="text-gray-400 text-sm">Track conversations and leads</p>
            </div>

            <div className="rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm" style={{ backgroundColor: '#0e143e' }}>
              <div className="w-12 h-12 bg-cn-lavender-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-cn-navy-900" />
              </div>
              <h3 className="heading-5 text-white mb-2">Email Campaigns</h3>
              <p className="text-gray-400 text-sm">Manage automated sequences</p>
            </div>

            <div className="rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm" style={{ backgroundColor: '#0e143e' }}>
              <div className="w-12 h-12 bg-cn-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-cn-gray-300" />
              </div>
              <h3 className="heading-5 text-white mb-2">Analytics</h3>
              <p className="text-gray-400 text-sm">View performance metrics</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="btn-primary inline-flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </a>
            <a
              href="mailto:cognodes@gmail.com"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Support
            </a>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12">
            <div className="inline-flex items-center bg-cn-blue-400/10 border border-cn-blue-400/20 rounded-full px-6 py-3">
              <div className="flex space-x-2 mr-4">
                <div className="w-2 h-2 bg-cn-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cn-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-cn-lavender-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-white font-medium text-sm">Dashboard in Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
