"use client";

import { useState } from 'react';
import { ArrowRight, DollarSign, Clock, TrendingUp, CheckCircle, Zap, Phone } from 'lucide-react';

interface AssessmentData {
  dailyCalls: number;
  missedCallsPercent: number;
  avgCallDuration: number;
  employeeCount: number;
  avgHourlyRate: number;
  adminHoursPerWeek: number;
}

export default function SavingsAssessment() {
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    dailyCalls: 0,
    missedCallsPercent: 0,
    avgCallDuration: 0,
    employeeCount: 0,
    avgHourlyRate: 0,
    adminHoursPerWeek: 0,
  });

  const questions = [
    {
      id: 'dailyCalls',
      question: 'How many customer calls does your business receive daily?',
      icon: Phone,
      options: [
        { label: '1-10 calls', value: 5 },
        { label: '11-25 calls', value: 18 },
        { label: '26-50 calls', value: 38 },
        { label: '50+ calls', value: 75 },
      ],
    },
    {
      id: 'missedCallsPercent',
      question: 'What percentage of calls do you estimate are missed or go to voicemail?',
      icon: TrendingUp,
      options: [
        { label: 'Less than 10%', value: 5 },
        { label: '10-25%', value: 17 },
        { label: '26-50%', value: 38 },
        { label: 'More than 50%', value: 60 },
      ],
    },
    {
      id: 'employeeCount',
      question: 'How many employees handle customer service, scheduling, or admin tasks?',
      icon: Clock,
      options: [
        { label: '1-2 employees', value: 1.5 },
        { label: '3-5 employees', value: 4 },
        { label: '6-10 employees', value: 8 },
        { label: '10+ employees', value: 15 },
      ],
    },
    {
      id: 'adminHoursPerWeek',
      question: 'How many hours per week does your team spend on repetitive tasks?',
      icon: Zap,
      subtitle: '(e.g., scheduling, follow-ups, data entry)',
      options: [
        { label: '1-10 hours', value: 5 },
        { label: '11-20 hours', value: 15 },
        { label: '21-40 hours', value: 30 },
        { label: '40+ hours', value: 50 },
      ],
    },
  ];

  const calculateSavings = () => {
    // Calculate missed revenue opportunities (conservative)
    const dailyMissedCalls = (assessmentData.dailyCalls * assessmentData.missedCallsPercent) / 100;
    const conversionRate = 0.25; // Only 25% of recovered calls convert
    const avgLeadValue = 150; // Conservative estimate per converted lead
    const monthlyMissedRevenue = dailyMissedCalls * conversionRate * avgLeadValue * 20; // 20 working days

    // Calculate time savings (conservative)
    const hoursSavedPerWeek = assessmentData.adminHoursPerWeek * 0.5; // AI saves 50% of time
    const avgHourlyRate = 20; // Conservative labor cost estimate
    const monthlyCostSavings = hoursSavedPerWeek * 4 * avgHourlyRate; // 4 weeks

    // Calculate efficiency gains (very conservative)
    const employeeCostSavings = assessmentData.employeeCount * 200; // Modest efficiency improvement

    const totalMonthlySavings = monthlyMissedRevenue + monthlyCostSavings + employeeCostSavings;
    const yearlyROI = totalMonthlySavings * 12;
    const timeSaved = hoursSavedPerWeek;

    return {
      monthlySavings: Math.round(totalMonthlySavings),
      yearlySavings: Math.round(yearlyROI),
      hoursSaved: Math.round(timeSaved),
      missedLeadsRecovered: Math.round(dailyMissedCalls * 20 * conversionRate), // Only count converted leads
    };
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAssessmentData(prev => ({
      ...prev,
      [questionId]: value,
    }));

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const resetAssessment = () => {
    setStep(0);
    setShowResults(false);
    setAssessmentData({
      dailyCalls: 0,
      missedCallsPercent: 0,
      avgCallDuration: 0,
      employeeCount: 0,
      avgHourlyRate: 0,
      adminHoursPerWeek: 0,
    });
  };

  const results = showResults ? calculateSavings() : null;
  // Progress starts at 0%, increases after each answer
  const progress = step === 0 && !assessmentData.dailyCalls 
    ? 0 
    : ((step + 1) / questions.length) * 100;

  if (showResults && results) {
    return (
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 lg:p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: '#0e143e'
          }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cn-blue-400 to-cn-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-cn-navy-900" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Your Potential ROI
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Based on your inputs, here&apos;s what AI automation could deliver for your business:
              </p>
            </div>

            {/* Results Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-6 bg-gradient-to-br from-cn-blue-400/10 to-cn-blue-400/5 border border-cn-blue-400/30">
                <DollarSign className="w-8 h-8 text-cn-blue-400 mb-3" />
                <div className="text-4xl font-bold text-white mb-2">
                  ${results.monthlySavings.toLocaleString()}
                </div>
                <div className="text-gray-300">Saved per month</div>
              </div>

              <div className="rounded-xl p-6 bg-gradient-to-br from-cn-pink-400/10 to-cn-pink-400/5 border border-cn-pink-400/30">
                <TrendingUp className="w-8 h-8 text-cn-pink-400 mb-3" />
                <div className="text-4xl font-bold text-white mb-2">
                  ${results.yearlySavings.toLocaleString()}
                </div>
                <div className="text-gray-300">Annual ROI potential</div>
              </div>

              <div className="rounded-xl p-6 bg-gradient-to-br from-cn-lavender-400/10 to-cn-lavender-400/5 border border-cn-lavender-400/30">
                <Clock className="w-8 h-8 text-cn-lavender-400 mb-3" />
                <div className="text-4xl font-bold text-white mb-2">
                  {results.hoursSaved}
                </div>
                <div className="text-gray-300">Hours saved per week</div>
              </div>

              <div className="rounded-xl p-6 bg-gradient-to-br from-cn-blue-400/10 to-cn-lavender-400/5 border border-cn-blue-400/30">
                <Zap className="w-8 h-8 text-cn-blue-400 mb-3" />
                <div className="text-4xl font-bold text-white mb-2">
                  {results.missedLeadsRecovered}
                </div>
                <div className="text-gray-300">Leads recovered per month</div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center pt-6 border-t border-gray-600/30">
              <p className="text-lg text-gray-300 mb-6">
                These numbers are conservative estimates. Want to see your exact ROI? Let&apos;s build a custom solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/cognodes/discovery-call"
                  className="btn-primary inline-flex items-center justify-center px-8 py-4"
                >
                  Schedule Your Free Analysis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <button
                  onClick={resetAssessment}
                  className="btn-secondary inline-flex items-center justify-center px-8 py-4"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[step];
  const IconComponent = currentQuestion.icon;

  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-8 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
      <div className="max-w-4xl mx-auto">
        {step === 0 && (
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:whitespace-nowrap">
              Calculate Your Business ROI
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto">
              60 seconds to discover how much revenue you&apos;re leaving on the table and how to capture it
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
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
              {currentQuestion.question}
            </h3>
            {currentQuestion.subtitle && (
              <p className="text-gray-400 text-sm">{currentQuestion.subtitle}</p>
            )}
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
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
      </div>
    </section>
  );
}

