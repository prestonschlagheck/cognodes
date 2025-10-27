"use client";

import { useState } from 'react';
import { ArrowRight, ArrowLeft, Home, Calendar, Phone, Mail, Clock, Users, TrendingUp, Zap, Bot, CheckCircle, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link';

interface Answer {
  questionId: string;
  answer: string;
  value: string;
}

export default function SolutionFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'business_type',
      question: 'What type of business do you operate?',
      icon: Target,
      options: [
        { label: 'Service-based (HVAC, Plumbing, Contractors)', value: 'service' },
        { label: 'Professional Services (Law, Consulting, Agency)', value: 'professional' },
        { label: 'Healthcare & Medical', value: 'healthcare' },
        { label: 'Retail & E-commerce', value: 'retail' },
        { label: 'Hospitality (Hotels, Restaurants)', value: 'hospitality' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      id: 'biggest_challenge',
      question: 'What\'s your biggest business challenge right now?',
      icon: Lightbulb,
      options: [
        { label: 'Missing customer calls and losing leads', value: 'missed_calls' },
        { label: 'Too much time on scheduling and admin work', value: 'admin_time' },
        { label: 'Slow response times to customer inquiries', value: 'slow_response' },
        { label: 'Inconsistent customer service quality', value: 'inconsistent_service' },
        { label: 'Need 24/7 customer support coverage', value: 'after_hours' },
        { label: 'Struggling to scale operations efficiently', value: 'scaling' },
      ],
    },
    {
      id: 'team_size',
      question: 'How many people are on your team?',
      icon: Users,
      options: [
        { label: 'Just me (Solo entrepreneur)', value: 'solo' },
        { label: '2-5 employees', value: 'small' },
        { label: '6-20 employees', value: 'medium' },
        { label: '20+ employees', value: 'large' },
      ],
    },
    {
      id: 'priority',
      question: 'What\'s most important to you right now?',
      icon: TrendingUp,
      options: [
        { label: 'Capture more leads and grow revenue', value: 'revenue' },
        { label: 'Save time and reduce workload', value: 'time' },
        { label: 'Improve customer satisfaction', value: 'satisfaction' },
        { label: 'Reduce operational costs', value: 'costs' },
        { label: 'Scale my business faster', value: 'scale' },
      ],
    },
    {
      id: 'timeline',
      question: 'When are you looking to implement a solution?',
      icon: Clock,
      options: [
        { label: 'As soon as possible', value: 'immediate' },
        { label: 'Within the next month', value: 'month' },
        { label: 'Within 2-3 months', value: 'quarter' },
        { label: 'Just exploring options', value: 'exploring' },
      ],
    },
  ];

  const getSolutionRecommendations = () => {
    const challengeAnswer = answers.find(a => a.questionId === 'biggest_challenge')?.value;
    const priorityAnswer = answers.find(a => a.questionId === 'priority')?.value;

    const solutions = [];

    // AI Receptionist recommendation
    if (challengeAnswer === 'missed_calls' || challengeAnswer === 'after_hours' || priorityAnswer === 'revenue') {
      solutions.push({
        title: '24/7 AI Receptionist',
        icon: Phone,
        description: 'Capture every revenue opportunity with instant call answering. Our AI qualifies leads, books appointments, and answers questions around the clock.',
        benefits: [
          'Never lose a lead to voicemail again',
          'Instantly book qualified appointments',
          'Answer customer questions 24/7',
          'Professional service at a fraction of the cost',
        ],
        color: 'cn-blue-400',
      });
    }

    // Smart Email & Scheduling Assistant
    if (challengeAnswer === 'admin_time' || challengeAnswer === 'slow_response' || priorityAnswer === 'time') {
      solutions.push({
        title: 'Smart Email & Scheduling Assistant',
        icon: Mail,
        description: 'Reclaim 20+ hours per week. Automate email responses, eliminate scheduling back-and-forth, and never miss a follow-up.',
        benefits: [
          'Instant, personalized email responses',
          'Zero-friction appointment booking',
          'Automatic follow-ups that convert',
          'Free up time to focus on revenue',
        ],
        color: 'cn-pink-400',
      });
    }

    // Website Chatbot
    if (challengeAnswer === 'slow_response' || challengeAnswer === 'after_hours' || priorityAnswer === 'satisfaction') {
      solutions.push({
        title: 'Intelligent Website Chatbot',
        icon: Bot,
        description: 'Turn website visitors into customers. Engage instantly, answer questions, provide quotes, and book appointments without human intervention.',
        benefits: [
          'Engage every visitor immediately',
          'Answer questions that close sales',
          'Provide instant, accurate quotes',
          'Convert traffic while you sleep',
        ],
        color: 'cn-lavender-400',
      });
    }

    // Custom Automation Solutions
    if (challengeAnswer === 'scaling' || challengeAnswer === 'inconsistent_service' || priorityAnswer === 'scale') {
      solutions.push({
        title: 'Custom Automation & Workflow',
        icon: Zap,
        description: 'Scale operations without scaling headcount. We build AI agents tailored to your unique processes, from lead intake to customer success.',
        benefits: [
          'Eliminate repetitive bottlenecks',
          'Integrate seamlessly with your tools',
          'Automate complex workflows',
          'Grow revenue without growing payroll',
        ],
        color: 'cn-blue-400',
      });
    }

    // Default recommendation if nothing matched
    if (solutions.length === 0) {
      solutions.push({
        title: '24/7 AI Receptionist',
        icon: Phone,
        description: 'Our most popular solution. Capture every lead with instant call answering, smart qualification, and automatic appointment booking.',
        benefits: [
          'Never lose a lead to voicemail again',
          'Instantly book qualified appointments',
          'Answer customer questions 24/7',
          'Professional service at a fraction of the cost',
        ],
        color: 'cn-blue-400',
      });
    }

    return solutions;
  };

  const handleAnswer = (questionId: string, label: string, value: string) => {
    const newAnswers = [...answers, { questionId, answer: label, value }];
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const resetFinder = () => {
    setStep(0);
    setAnswers([]);
    setShowResults(false);
  };

  const progress = ((step + 1) / questions.length) * 100;

  if (showResults) {
    const recommendations = getSolutionRecommendations();
    
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#0d133b' }}>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-cn-blue-400 to-cn-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-cn-navy-900" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Your Custom Growth Plan
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Based on your specific challenges, here are the AI solutions that will drive revenue and save you time:
              </p>
            </div>

            {/* Recommended Solutions */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {recommendations.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm"
                    style={{ 
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      backgroundColor: '#0e143e'
                    }}
                  >
                    <div className={`w-16 h-16 bg-${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-cn-navy-900" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {solution.description}
                    </p>
                    <div className="space-y-3">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className={`w-5 h-5 text-${solution.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Why This Works Section */}
            <div className="rounded-2xl p-8 lg:p-10 border border-gray-600/30 backdrop-blur-sm mb-12" style={{ 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              backgroundColor: '#0e143e'
            }}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Why CogNodes is Different
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cn-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-cn-navy-900" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Custom Built</h4>
                  <p className="text-gray-300 text-sm">Tailored specifically to your business needs and processes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cn-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-cn-navy-900" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Quick Setup</h4>
                  <p className="text-gray-300 text-sm">Get up and running in days, not months</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cn-lavender-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-cn-navy-900" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Ongoing Support</h4>
                  <p className="text-gray-300 text-sm">Continuous optimization and dedicated support</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Growing?
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Get a free consultation. We&apos;ll analyze your business and build a custom plan to maximize your ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/cognodes/discovery-call"
                  className="btn-primary inline-flex items-center justify-center px-8 py-4"
                >
                  Book Your Free Consultation
                  <Calendar className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/"
                  className="btn-secondary inline-flex items-center justify-center px-8 py-4"
                >
                  <Home className="mr-2 w-5 h-5" />
                  Back to Home
                </Link>
              </div>
              <button
                onClick={resetFinder}
                className="mt-6 text-cn-blue-400 hover:text-cn-blue-300 transition-colors text-sm"
              >
                Retake the Assessment
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const currentQuestion = questions[step];
  const IconComponent = currentQuestion.icon;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d133b' }}>
      <section className="pt-24 sm:pt-24 lg:pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {step === 0 && (
            <div className="text-center mb-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Build Your Growth Plan
              </h1>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
                5 quick questions to discover which AI solutions will drive the most revenue for your specific business
              </p>
            </div>
          )}

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Question {step + 1} of {questions.length}</span>
              <span className="text-sm text-cn-blue-400 font-semibold">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cn-blue-400 to-cn-pink-400 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="rounded-2xl p-6 lg:p-8 border border-gray-600/30 backdrop-blur-sm transition-all duration-300" style={{ 
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: '#0e143e'
          }}>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-cn-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-7 h-7 text-cn-navy-900" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion.id, option.label, option.value)}
                  className="w-full p-4 rounded-xl border border-gray-600/30 bg-cn-navy-900/30 hover:bg-cn-navy-900/60 hover:border-cn-blue-400/50 transition-all duration-200 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base text-white font-medium group-hover:text-cn-blue-400 transition-colors">
                      {option.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cn-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index <= step 
                    ? 'w-8 bg-cn-blue-400' 
                    : 'w-2 bg-gray-600'
                }`}
              ></div>
            ))}
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-cn-blue-400 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

