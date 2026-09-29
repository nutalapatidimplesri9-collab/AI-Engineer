import React from 'react';
import { ArrowDown, Code2, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import portraitImg from '../assets/images/student_dimple_portrait_1790680577071.jpg';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-slate-50">
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Introduction */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Minimal Subtitle / Context Indicator (Zero-Pill Discipline) */}
            <div className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide uppercase flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600"></span>
              <span>B.Tech 1st Semester Student</span>
              <span aria-hidden="true">·</span>
              <span>Python & Web Development</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Dimple Sri Nutalapati
            </h1>

            {/* Main Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 text-balance">
              Aspiring AI Engineer | Python Developer | B.Tech Student
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Building my foundation in Python, web development, and Generative AI while turning ideas into practical projects.
            </p>

            {/* Small supporting indicator text */}
            <div className="text-xs sm:text-sm text-slate-500 pt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>B.Tech 1st Semester Student</span>
              <span aria-hidden="true">•</span>
              <span>Python</span>
              <span aria-hidden="true">•</span>
              <span>Web Development</span>
              <span aria-hidden="true">•</span>
              <span>Generative AI</span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              >
                <span>Let's Connect</span>
              </button>
            </div>
          </div>

          {/* Right Column: Subtle Visual Element (Student Portrait + Minimal Python Console) */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start lg:items-end">
            <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
              
              {/* Profile Card Header with Portrait */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={portraitImg}
                    alt="Dimple Sri Nutalapati"
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-slate-100 shadow-xs"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full border-2 border-white" title="Active Student">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <div className="text-base font-bold text-slate-900">Dimple Sri Nutalapati</div>
                  <div className="text-xs text-slate-500">First-Year B.Tech Student</div>
                  <div className="text-xs text-blue-700 font-medium">Aspiring AI Engineer</div>
                </div>
              </div>

              {/* Minimal Code Card (Python Foundation Syntax) */}
              <div className="bg-slate-900 rounded-xl p-4 text-xs font-mono text-slate-200 overflow-hidden shadow-inner border border-slate-800">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>student_journey.py</span>
                  </div>
                  <span className="text-slate-500">Python 3.12</span>
                </div>
                
                <div className="space-y-1 leading-relaxed text-slate-300">
                  <div><span className="text-blue-400">class</span> <span className="text-yellow-300">StudentEngineer</span>:</div>
                  <div className="pl-4">
                    <span className="text-blue-400">def</span> <span className="text-yellow-300">__init__</span>(self):
                  </div>
                  <div className="pl-8">
                    self.name = <span className="text-emerald-400">"Dimple Sri"</span>
                  </div>
                  <div className="pl-8">
                    self.semester = <span className="text-amber-400">1</span>
                  </div>
                  <div className="pl-8">
                    self.focus = [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"Web"</span>, <span className="text-emerald-400">"GenAI"</span>]
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">def</span> <span className="text-yellow-300">build</span>(self, problem):
                  </div>
                  <div className="pl-8">
                    <span className="text-purple-400">return</span> <span className="text-emerald-400">"Practical solution with code"</span>
                  </div>
                </div>
              </div>

              {/* Subtle status indicator */}
              <div className="pt-1 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Currently Learning
                </span>
                <span className="font-medium text-slate-700">Foundations in Progress</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
