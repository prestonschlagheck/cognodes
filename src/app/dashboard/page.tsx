"use client";

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Settings, LogOut, Home, Users, CheckCircle, ArrowRight, Phone, Mail, Calendar, Clock, DollarSign, FileText, CreditCard, Star, Bot, Zap, BarChart3, Target, Award, TrendingUp, Shield } from 'lucide-react';

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  
  const totalSlides = 8;

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn');
    const email = localStorage.getItem('userEmail');
    
    if (loggedIn === 'true' && email) {
      setIsLoggedIn(true);
      setUserEmail(email);
      // Add body class to prevent vertical scrolling
      document.body.classList.add('dashboard-page');
    } else {
      router.push('/login');
    }

    // Cleanup function to remove body class when component unmounts
    return () => {
      document.body.classList.remove('dashboard-page');
    };
  }, [router]);

  // Navigation functions
  const goToSlide = useCallback((slideIndex: number) => {
    const scrollContainer = document.querySelector('.horizontal-scroll') as HTMLElement;
    if (!scrollContainer) return;
    
    const slideWidth = window.innerWidth;
    scrollContainer.scrollLeft = slideIndex * slideWidth;
    setCurrentSlide(slideIndex);
  }, []);


  // Separate useEffect for scroll functionality
  useEffect(() => {
    if (!isLoggedIn) return;

    const scrollContainer = document.querySelector('.horizontal-scroll') as HTMLElement;
    if (!scrollContainer) return;

    // Make container focusable for keyboard navigation
    scrollContainer.tabIndex = 0;
    scrollContainer.focus();

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const slideWidth = window.innerWidth;
      const currentScrollLeft = scrollContainer.scrollLeft;
      const threshold = 50; // Minimum scroll distance to trigger slide change
      
      // Only trigger slide change if scroll distance is significant
      if (Math.abs(e.deltaY) > threshold) {
        if (e.deltaY > 0) {
          // Scrolling down - go to next slide
          const nextSlide = Math.min(Math.floor(currentScrollLeft / slideWidth) + 1, totalSlides - 1);
          goToSlide(nextSlide);
        } else {
          // Scrolling up - go to previous slide
          const prevSlide = Math.max(Math.floor(currentScrollLeft / slideWidth) - 1, 0);
          goToSlide(prevSlide);
        }
      }
    };

        const handleKeyDown = (e: KeyboardEvent) => {
          switch (e.key) {
            case 'Home':
              e.preventDefault();
              goToSlide(0);
              break;
            case 'End':
              e.preventDefault();
              goToSlide(totalSlides - 1);
              break;
          }
        };

    const handleScroll = () => {
      const slideWidth = window.innerWidth;
      const currentScrollLeft = scrollContainer.scrollLeft;
      const newSlide = Math.round(currentScrollLeft / slideWidth);
      setCurrentSlide(Math.min(Math.max(newSlide, 0), totalSlides - 1));
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    scrollContainer.addEventListener('keydown', handleKeyDown);
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('keydown', handleKeyDown);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [isLoggedIn, goToSlide]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    // Dispatch custom event to notify navigation component
    window.dispatchEvent(new Event('authChange'));
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
    <div className="h-screen overflow-hidden" style={{ backgroundColor: '#0d133b' }}>
      {/* Navigation */}
      <nav className="border-b border-gray-600/30 backdrop-blur-sm" style={{ backgroundColor: '#0e143e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cn-blue-400 rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-cn-navy-900 font-bold text-sm sm:text-lg">CN</span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-white">CogNodes Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-gray-300 text-xs sm:text-sm hidden sm:block">{userEmail}</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-300 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <LogOut className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Horizontal Sales Pitch Container */}
      <div className="h-screen horizontal-scroll dashboard-scroll-container relative">
        {/* Oblique Background Texture with Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-96 z-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cn-navy-900 via-cn-navy-900/50 to-transparent z-10"></div>
          {/* Oblique pattern */}
          <div className="absolute inset-0 opacity-10">
            <Image 
              src="/Logos/CN Oblique.png" 
              alt="CogNodes Oblique Background" 
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>
        
        <div className="flex h-full relative z-10" style={{ width: '1200vw' }}>
          
          {/* Navigation Arrows */}

          {/* Slide Indicators */}
          <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-2 bg-cn-navy-900/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-cn-blue-400/20">
            <div className="flex space-x-1 sm:space-x-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    i === currentSlide 
                      ? 'bg-cn-blue-400 scale-125' 
                      : 'bg-cn-blue-400/30 hover:bg-cn-blue-400/60'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-cn-blue-400 ml-2 sm:ml-3 font-medium">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>
          
          {/* Slide 1: Hero Section */}
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8 scroll-snap-align-start" style={{ backgroundColor: '#0d133b' }}>
            <div className="max-w-6xl mx-auto text-center">
              {/* Company Logo Placeholder */}
              <div className="w-32 h-32 bg-cn-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <span className="text-2xl font-bold text-cn-navy-900">[Company Logo]</span>
              </div>
              
              <h1 className="heading-1 text-white mb-6">
                Your Custom AI Solution
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Tailored specifically for [Company Name] - Transform your business operations with our intelligent automation package
              </p>
              
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Bot className="w-6 h-6 text-cn-blue-400" />
                  <span className="text-gray-300">AI Receptionist</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-6 h-6 text-cn-pink-400" />
                  <span className="text-gray-300">Email Automation</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-cn-lavender-400" />
                  <span className="text-gray-300">Smart Scheduling</span>
                </div>
              </div>
              
              <div className="text-cn-blue-400 text-lg font-semibold">
                Package: Professional AI Agent Suite
              </div>
            </div>
          </div>

          {/* Slide 2: Meet the Team */}
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8 scroll-snap-align-start" style={{ backgroundColor: '#0d133b' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-1 text-white text-center mb-16">Meet the Team</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="text-center">
                      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-cn-blue-400">
                        <Image 
                          src="/Logos/far-sq.png" 
                          alt="Preston Schlagheck" 
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                          quality={100}
                          priority
                        />
                      </div>
                      <h3 className="heading-3 text-white mb-2">Preston Schlagheck</h3>
                      <p className="text-gray-300 mb-4">Specialized in web development and UI design</p>
                    </div>
                
                    <div className="text-center">
                      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-cn-pink-400">
                        <Image 
                          src="/Logos/headshot.jpeg" 
                          alt="Dylan Cobb" 
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                          quality={100}
                          priority
                        />
                      </div>
                      <h3 className="heading-3 text-white mb-2">Dylan Cobb</h3>
                      <p className="text-gray-300 mb-4">Specialized in automations and back-end development</p>
                    </div>
              </div>
              
                  <div className="text-center">
                    <div className="bg-cn-blue-400/10 rounded-2xl p-6 border border-cn-blue-400/20">
                      <div className="flex items-center justify-center space-x-4 mb-6">
                        <Award className="w-8 h-8 text-cn-blue-400" />
                        <span className="text-white text-lg">Previously employed by</span>
                      </div>
                      <div className="flex flex-col space-y-3 text-sm">
                        <span className="text-cn-blue-400">US HealthConnect</span>
                        <span className="text-cn-blue-400">Direct Journeyline Holdings</span>
                        <span className="text-cn-blue-400">Charkol</span>
                        <span className="text-cn-blue-400">Guilford Fund for Education</span>
                        <span className="text-cn-blue-400">Trinity Institute for Applied Neurosciences and Spirituality</span>
                      </div>
                    </div>
                  </div>
            </div>
          </div>

          {/* Slide 3: What's Included */}
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8 scroll-snap-align-start" style={{ backgroundColor: '#0d133b' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-1 text-white text-center mb-16">What&apos;s Included in Your Session</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-elevated">
                  <div className="w-16 h-16 bg-cn-blue-400 rounded-2xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="heading-3 text-white mb-4">Workflow Analysis</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cn-blue-400 mr-3" />
                      Current process audit
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cn-blue-400 mr-3" />
                      Bottleneck identification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cn-blue-400 mr-3" />
                      Optimization opportunities
                    </li>
                  </ul>
                </div>
                
                <div className="card-elevated">
                  <div className="w-16 h-16 bg-cn-pink-400 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="heading-3 text-white mb-4">Custom AI Roadmap</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cn-pink-400 mr-3" />
                      Implementation plan
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cn-pink-400 mr-3" />
                      Timeline & milestones
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cn-pink-400 mr-3" />
                      ROI projections
                    </li>
                  </ul>
                </div>
                
                <div className="card-elevated">
                  <div className="w-16 h-16 bg-cn-lavender-400 rounded-2xl flex items-center justify-center mb-6">
                    <Settings className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="heading-3 text-white mb-4">Tools & Integrations</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cn-lavender-400 mr-3" />
                      CRM integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cn-lavender-400 mr-3" />
                      Calendar systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cn-lavender-400 mr-3" />
                      Next steps planning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4: Results You Can Expect */}
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8 scroll-snap-align-start" style={{ backgroundColor: '#0d133b' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-1 text-white text-center mb-16">Results You Can Expect</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-24 h-24 bg-cn-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-cn-navy-900">75%</span>
                  </div>
                  <h3 className="heading-3 text-white mb-2">Faster Response</h3>
                  <p className="text-gray-300">Average response time improvement</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-cn-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-cn-navy-900">40%</span>
                  </div>
                  <h3 className="heading-3 text-white mb-2">Revenue Increase</h3>
                  <p className="text-gray-300">Typical business growth</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-cn-lavender-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-cn-navy-900">98%</span>
                  </div>
                  <h3 className="heading-3 text-white mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-300">Client satisfaction rate</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-cn-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-cn-gray-300">24/7</span>
                  </div>
                  <h3 className="heading-3 text-white mb-2">Availability</h3>
                  <p className="text-gray-300">Round-the-clock service</p>
                </div>
              </div>
              
              <div className="card-elevated">
                <h3 className="heading-3 text-white text-center mb-6">Real Client Outcomes</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="heading-4 text-cn-blue-400 mb-2">Direct Journeyline Holdings</h4>
                    <p className="text-gray-300">60% revenue increase in 6 months</p>
                  </div>
                  <div className="text-center">
                    <h4 className="heading-4 text-cn-pink-400 mb-2">Charkol</h4>
                    <p className="text-gray-300">85% reduction in administrative time</p>
                  </div>
        <div className="text-center">
                    <h4 className="heading-4 text-cn-lavender-400 mb-2">US HealthConnect</h4>
                    <p className="text-gray-300">300% increase in lead conversion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5: Timeline */}
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8 scroll-snap-align-start" style={{ backgroundColor: '#0d133b' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-1 text-white text-center mb-16">Implementation Timeline</h2>
              
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-cn-blue-400 rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                    <span className="text-2xl font-bold text-cn-navy-900">1</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="heading-3 text-white mb-2">Phase 1: Consultation & Discovery</h3>
                    <p className="text-gray-300 mb-2">Week 1-2: Deep dive into your business processes, current challenges, and goals</p>
                    <div className="flex items-center text-cn-blue-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">2 weeks</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-cn-pink-400 rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                    <span className="text-2xl font-bold text-cn-navy-900">2</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="heading-3 text-white mb-2">Phase 2: Build Out Custom Agent</h3>
                    <p className="text-gray-300 mb-2">Week 3-6: Develop and customize your AI agent with your specific business logic</p>
                    <div className="flex items-center text-cn-pink-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">4 weeks</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-cn-lavender-400 rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                    <span className="text-2xl font-bold text-cn-navy-900">3</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="heading-3 text-white mb-2">Phase 3: Testing & Optimization</h3>
                    <p className="text-gray-300 mb-2">Week 7-8: Comprehensive testing, refinement, and performance optimization</p>
                    <div className="flex items-center text-cn-lavender-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">2 weeks</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-cn-slate-600 rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                    <span className="text-2xl font-bold text-cn-gray-300">4</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="heading-3 text-white mb-2">Phase 4: Dashboard Setup & Results</h3>
                    <p className="text-gray-300 mb-2">Week 9-10: Launch your dashboard, train your team, and start seeing results</p>
                    <div className="flex items-center text-cn-slate-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">2 weeks</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-cn-blue-400 rounded-full flex items-center justify-center mr-8 flex-shrink-0">
                    <span className="text-2xl font-bold text-cn-navy-900">5</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="heading-3 text-white mb-2">Phase 5: Ongoing Support</h3>
                    <p className="text-gray-300 mb-2">Continuous: Monitor performance, provide updates, and scale as you grow</p>
                    <div className="flex items-center text-cn-blue-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">Ongoing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 6: Pricing Structure */}
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8 scroll-snap-align-start" style={{ backgroundColor: '#0d133b' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-1 text-white text-center mb-16">Pricing Structure</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="card-elevated text-center">
                  <div className="w-20 h-20 bg-cn-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-10 h-10 text-cn-navy-900" />
                  </div>
                  <h3 className="heading-3 text-white mb-4">Startup Fee</h3>
                  <div className="text-4xl font-bold text-cn-blue-400 mb-4">$X,XXX</div>
                  <p className="text-gray-300 mb-6">One-time setup and implementation cost</p>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cn-blue-400 mr-2" />
                      Initial consultation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cn-blue-400 mr-2" />
                      Custom agent development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cn-blue-400 mr-2" />
                      Integration setup
                    </li>
                  </ul>
                </div>
                
                <div className="card-elevated text-center border-2 border-cn-blue-400">
                  <div className="w-20 h-20 bg-cn-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-cn-navy-900" />
                  </div>
                  <h3 className="heading-3 text-white mb-4">Agent Training Fee</h3>
                  <div className="text-4xl font-bold text-cn-pink-400 mb-4">$X,XXX</div>
                  <p className="text-gray-300 mb-6">Comprehensive training and optimization</p>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cn-pink-400 mr-2" />
                      Performance optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cn-pink-400 mr-2" />
                      Team training sessions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cn-pink-400 mr-2" />
                      Go-live support
                    </li>
                  </ul>
                </div>
                
                <div className="card-elevated text-center">
                  <div className="w-20 h-20 bg-cn-lavender-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-cn-navy-900" />
                  </div>
                  <h3 className="heading-3 text-white mb-4">Monthly Retainer</h3>
                  <div className="text-4xl font-bold text-cn-lavender-400 mb-4">$XXX</div>
                  <p className="text-gray-300 mb-6">Ongoing support and maintenance</p>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cn-lavender-400 mr-2" />
                      24/7 monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cn-lavender-400 mr-2" />
                      Regular updates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-cn-lavender-400 mr-2" />
                      Priority support
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <div className="inline-flex items-center space-x-4 bg-cn-blue-400/10 rounded-2xl p-6 border border-cn-blue-400/20">
                  <Star className="w-8 h-8 text-cn-blue-400" />
                  <span className="text-white text-lg">Total Investment: $XX,XXX (setup) + $XXX/month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 7: Terms & Conditions */}
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8 scroll-snap-align-start" style={{ backgroundColor: '#0d133b' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="heading-1 text-white text-center mb-16">Terms & Conditions</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-elevated">
                  <h3 className="heading-3 text-white mb-6 flex items-center">
                    <FileText className="w-6 h-6 text-cn-blue-400 mr-3" />
                    Payment Terms
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-blue-400 mr-3 mt-0.5" />
                      <span>Startup fee due upon contract signing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-blue-400 mr-3 mt-0.5" />
                      <span>Training fee due before Phase 3 begins</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-blue-400 mr-3 mt-0.5" />
                      <span>Monthly retainer billed in advance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="card-elevated">
                  <h3 className="heading-3 text-white mb-6 flex items-center">
                    <Shield className="w-6 h-6 text-cn-pink-400 mr-3" />
                    Guarantees
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-pink-400 mr-3 mt-0.5" />
                      <span>30-day satisfaction guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-pink-400 mr-3 mt-0.5" />
                      <span>Performance benchmarks included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-pink-400 mr-3 mt-0.5" />
                      <span>Free reconfiguration if needed</span>
                    </li>
                  </ul>
                </div>
                
                <div className="card-elevated">
                  <h3 className="heading-3 text-white mb-6 flex items-center">
                    <Clock className="w-6 h-6 text-cn-lavender-400 mr-3" />
                    Timeline Commitment
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-lavender-400 mr-3 mt-0.5" />
                      <span>10-week implementation timeline</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-lavender-400 mr-3 mt-0.5" />
                      <span>Weekly progress updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-lavender-400 mr-3 mt-0.5" />
                      <span>Flexible scheduling for your team</span>
                    </li>
                  </ul>
                </div>
                
                <div className="card-elevated">
                  <h3 className="heading-3 text-white mb-6 flex items-center">
                    <Users className="w-6 h-6 text-cn-slate-600 mr-3" />
                    Support & Maintenance
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-slate-600 mr-3 mt-0.5" />
                      <span>24/7 system monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-slate-600 mr-3 mt-0.5" />
                      <span>Monthly performance reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cn-slate-600 mr-3 mt-0.5" />
                      <span>Priority customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 8: Investment & Next Steps */}
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8 scroll-snap-align-start" style={{ backgroundColor: '#0d133b' }}>
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="heading-1 text-white mb-8">Ready to Transform Your Business?</h2>
              
                  <div className="mb-12">
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                      <div className="bg-cn-blue-400/10 rounded-2xl p-6 border border-cn-blue-400/20">
                        <div className="flex items-center space-x-3 mb-4">
                          <CreditCard className="w-8 h-8 text-cn-blue-400" />
                          <h3 className="heading-4 text-white">Total Investment</h3>
                        </div>
                        <div className="text-2xl font-bold text-cn-blue-400">$XX,XXX Setup + $XXX/Month</div>
                      </div>
                      
                      <div className="bg-cn-pink-400/10 rounded-2xl p-6 border border-cn-pink-400/20">
                        <div className="flex items-center space-x-3 mb-4">
                          <TrendingUp className="w-8 h-8 text-cn-pink-400" />
                          <h3 className="heading-4 text-white">Total Potential Savings</h3>
                        </div>
                        <div className="text-2xl font-bold text-cn-pink-400">$XXX,XXX+ Annually</div>
                        <p className="text-gray-300 text-sm mt-2">From reduced labor costs and increased efficiency</p>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                      Join numerous businesses that have already transformed their operations with CogNodes AI
                    </p>
                  </div>
              
              <div className="space-y-6 mb-12">
                <h3 className="heading-3 text-white">Next Steps:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-cn-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-cn-navy-900 font-bold">1</span>
                    </div>
                    <span className="text-gray-300">Sign the contract</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-cn-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-cn-navy-900 font-bold">2</span>
                    </div>
                    <span className="text-gray-300">Initial consultation call</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-cn-lavender-400 rounded-full flex items-center justify-center">
                      <span className="text-cn-navy-900 font-bold">3</span>
                    </div>
                    <span className="text-gray-300">Begin implementation</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <a
                  href="mailto:cognodes@gmail.com?subject=Ready to Get Started - [Company Name]"
                  className="btn-primary inline-flex items-center justify-center text-lg px-12 py-4"
                >
                  Get Started Today
                  <ArrowRight className="ml-3 w-6 h-6" />
                </a>
                
                <div className="flex justify-center space-x-6 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call: (XXX) XXX-XXXX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>cognodes@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
