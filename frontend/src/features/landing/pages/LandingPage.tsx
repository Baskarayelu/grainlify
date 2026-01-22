import React, { ReactNode, useState, useRef, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Code, GitBranch, Award, Shield, Zap, Users, TrendingUp, CheckCircle, Star, Quote } from 'lucide-react';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import { useLandingStats } from '../../../shared/hooks/useLandingStats';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../shared/contexts/AuthContext';

export function LandingPage() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { login } = useAuth();
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      navigate(`/auth/callback?token=${token}`, { replace: true });
    }
  }, [navigate]);
  
  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-[#1a1512] via-[#231c17] to-[#2d241d]'
        : 'bg-gradient-to-br from-[#e8dfd0] via-[#d4c5b0] to-[#c9b89a]'
    }`}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

// --- SUB-COMPONENTS ---

function Features() {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: Code,
      title: 'Smart Matching',
      description: 'AI-powered algorithm matches contributors with projects that fit their skills and interests.',
    },
    {
      icon: GitBranch,
      title: 'Seamless Integration',
      description: 'Connect your GitHub, track contributions, and manage everything in one place.',
    },
    {
      icon: Award,
      title: 'Rewards & Recognition',
      description: 'Get compensated for your contributions with transparent grant distribution.',
    },
    {
      icon: Shield,
      title: 'Secure & Transparent',
      description: 'Built on blockchain technology ensuring secure, transparent transactions.',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Stay informed with instant notifications about project updates and opportunities.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join a thriving community of developers, maintainers, and open-source enthusiasts.',
    },
  ];

  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${
            theme === 'dark' ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
          }`}>
            Everything You Need to Succeed
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors ${
            theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
          }`}>
            Powerful features designed to streamline your open-source journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group backdrop-blur-[40px] border rounded-[24px] p-8 transition-all hover:scale-105 hover:border-[#c9983a]/30 hover:shadow-[0_12px_36px_rgba(201,152,58,0.15)] ${
                theme === 'dark'
                  ? 'bg-white/[0.08] border-white/15 hover:bg-white/[0.12]'
                  : 'bg-white/[0.15] border-white/25 hover:bg-white/[0.2]'
              }`}
            >
              <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-[#c9983a]/25 to-[#d4af37]/15 border border-[#c9983a]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_4px_12px_rgba(201,152,58,0.15)]">
                <feature.icon className="w-7 h-7 text-[#c9983a]" />
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                theme === 'dark' ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
              }`}>{feature.title}</h3>
              <p className={`transition-colors ${
                theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
              }`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { theme } = useTheme();
  
  const steps = [
    { number: '01', title: 'Create Your Profile', description: 'Sign up and showcase your skills, interests, and open-source experience.' },
    { number: '02', title: 'Discover Projects', description: 'Browse through curated projects or get matched with opportunities that fit you.' },
    { number: '03', title: 'Start Contributing', description: 'Connect with maintainers, pick up tasks, and start making an impact.' },
    { number: '04', title: 'Earn Rewards', description: 'Receive grants and recognition for your valuable contributions.' },
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${
            theme === 'dark' ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
          }`}>
            How It Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`backdrop-blur-[40px] border rounded-[24px] p-8 transition-all hover:border-[#c9983a]/30 ${
                theme === 'dark' ? 'bg-white/[0.08] border-white/15' : 'bg-white/[0.15] border-white/25'
              }`}>
                <div className="text-6xl font-bold bg-gradient-to-r from-[#c9983a] to-[#d4af37] bg-clip-text text-transparent mb-6">
                  {step.number}
                </div>
                <h3 className={`text-2xl font-semibold mb-4 transition-colors ${
                  theme === 'dark' ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
                }`}>{step.title}</h3>
                <p className={`transition-colors ${
                  theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
                }`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const { theme } = useTheme();
  const { display } = useLandingStats();
  
  return (
    <section id="why-choose-us" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-[#e8dfd0]' : 'text-[#2d2820]'}`}>
          Why Choose Grainlify?
        </h2>
        {/* Simplified for brevity */}
        <p className="dark:text-[#b8a898] text-[#7a6b5a]">Active Projects: {display.activeProjects}</p>
      </div>
    </section>
  );
}

function Testimonials() {
  const { theme } = useTheme();
  return (
    <section id="testimonials" className="relative py-32 px-6 text-center">
       <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-[#e8dfd0]' : 'text-[#2d2820]'}`}>What Builders Say</h2>
    </section>
  );
}

function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="py-16 text-center border-t border-white/20">
      <p className="dark:text-[#b8a898] text-[#7a6b5a]">&copy; 2024 Grainlify. All rights reserved.</p>
    </footer>
  );
}