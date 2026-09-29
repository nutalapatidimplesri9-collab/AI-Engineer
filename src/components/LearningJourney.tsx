import React from 'react';
import { ArrowRight, GraduationCap, Terminal, Globe, Brain, Cpu, CheckCircle } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'B.Tech Student',
      status: 'Current Phase',
      icon: GraduationCap,
      description: 'Starting 1st semester undergraduate studies in engineering, establishing academic discipline and core mathematical thinking.',
      isActive: true,
      isCompleted: true
    },
    {
      step: '02',
      title: 'Python Foundations',
      status: 'In Progress',
      icon: Terminal,
      description: 'Mastering data types, conditional branching, loops, functions, and structured problem-solving through console projects.',
      isActive: true,
      isCompleted: false
    },
    {
      step: '03',
      title: 'Web Development',
      status: 'Active Track',
      icon: Globe,
      description: 'Learning HTML, CSS, and JavaScript fundamentals to build responsive and user-centered web interfaces.',
      isActive: false,
      isCompleted: false
    },
    {
      step: '04',
      title: 'Generative AI',
      status: 'Beginner Exploration',
      icon: Brain,
      description: 'Understanding LLM concepts, prompting workflows, and generative mechanisms to apply AI creatively.',
      isActive: false,
      isCompleted: false
    },
    {
      step: '05',
      title: 'AI Engineering',
      status: 'Long-Term Vision',
      icon: Cpu,
      description: 'Synthesizing software engineering, model orchestration, and practical algorithms into production-grade systems.',
      isActive: false,
      isCompleted: false
    }
  ];

  return (
    <section id="journey" className="py-16 md:py-24 bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            Growth Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            My Learning Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            An honest progression path tracing my trajectory from first-semester engineering foundations to future AI engineering.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Visual Progression Ribbon */}
        <div className="p-4 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-12">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 text-center sm:text-left">
            Progression Pipeline
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-800">
            <span className="text-blue-700">B.Tech Student</span>
            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-blue-700">Python Foundations</span>
            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-slate-700">Web Development</span>
            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-slate-700">Generative AI</span>
            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="text-slate-500">AI Engineering</span>
          </div>
        </div>

        {/* Detailed Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  item.isActive
                    ? 'bg-blue-50/40 border-blue-200 shadow-2xs'
                    : 'bg-white border-slate-200/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STEP {item.step}
                    </span>
                    <div className={`p-2 rounded-lg ${
                      item.isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>

                  <div className="text-[11px] font-semibold text-blue-700 mb-2.5">
                    {item.status}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px]">
                  {item.isCompleted ? (
                    <span className="text-emerald-700 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Enrolled & Active
                    </span>
                  ) : item.isActive ? (
                    <span className="text-blue-700 font-medium">
                      Actively Practicing
                    </span>
                  ) : (
                    <span className="text-slate-400">
                      Upcoming Goal
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Statement */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-slate-200">
          <div className="max-w-3xl space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-white">
              An Evolving Digital Portfolio
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              This learning journey is ongoing and deliberately grounded in continuous practice. As I complete coursework, build new web and Python applications, and participate in hackathons, this portfolio will evolve to reflect verified technical progress.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
