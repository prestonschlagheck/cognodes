"use client";

import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white border-t" style={{ backgroundColor: 'var(--cn-charcoal-900)', borderColor: 'rgba(245, 245, 245, 0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="/logos/CN W_B Full.png" 
                alt="CogNodes Logo" 
                className="h-8 w-auto mb-4"
              />
            </div>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--cn-gray-050)', fontFamily: 'DM Sans, sans-serif' }}>
              Transform your service-based business with AI automation. Make more money and optimize workflows with intelligent automation solutions.
            </p>
            <a
              href="mailto:cognodes@gmail.com"
              className="btn-primary inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--cn-gray-050)' }}>Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm" style={{ color: 'var(--cn-slate-600)', fontFamily: 'DM Sans, sans-serif' }}>
                  Automated Quote Generator
                </span>
              </li>
              <li>
                <span className="text-sm" style={{ color: 'var(--cn-slate-600)', fontFamily: 'DM Sans, sans-serif' }}>
                  Customer Engagement & Follow-Up
                </span>
              </li>
              <li>
                <span className="text-sm" style={{ color: 'var(--cn-slate-600)', fontFamily: 'DM Sans, sans-serif' }}>
                  Smart Email Assistant
                </span>
              </li>
              <li>
                <span className="text-sm" style={{ color: 'var(--cn-slate-600)', fontFamily: 'DM Sans, sans-serif' }}>
                  AI Receptionist
                </span>
              </li>
              <li>
                <span className="text-sm" style={{ color: 'var(--cn-slate-600)', fontFamily: 'DM Sans, sans-serif' }}>
                  Website Chatbot
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--cn-gray-050)' }}>Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="transition-colors text-sm block" style={{ color: 'var(--cn-slate-600)', fontFamily: 'DM Sans, sans-serif' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-slate-600)'; }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors text-sm block" style={{ color: 'var(--cn-slate-600)', fontFamily: 'DM Sans, sans-serif' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-slate-600)'; }}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors text-sm block" style={{ color: 'var(--cn-slate-600)', fontFamily: 'DM Sans, sans-serif' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-slate-600)'; }}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors text-sm block" style={{ color: 'var(--cn-slate-600)', fontFamily: 'DM Sans, sans-serif' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-slate-600)'; }}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: 'rgba(245, 245, 245, 0.08)' }}>
          <p className="text-sm font-medium" style={{ color: 'var(--cn-slate-600)', fontFamily: 'DM Sans, sans-serif' }}>
            © 2025 CogNodes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
