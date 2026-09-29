import React from 'react';
import { BookOpen, Compass, Lightbulb, Code, Brain, Target } from 'lucide-react';

export const About: React.FC = () => {
  const exploringTopics = [
    { name: 'Python', desc: 'Core syntax, data types, logic structures, and functions' },
    { name: 'Web Development', desc: 'Semantic HTML, CSS layouts, and fundamental JavaScript' },
    { name: 'Generative AI', desc: 'Foundational concepts and exploring prompt mechanics' },
    { name: 'Problem Solving', desc: 'Breaking real-world scenarios into algorithmic steps' },
    { name: 'AI Engineering', desc: 'Long-term learning goal toward building intelligent systems' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            Background & Focus
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p className="text-slate-800 font-medium leading-relaxed">
              I am a first-semester B.Tech student passionate about technology, problem solving, and artificial intelligence. I am currently building my foundations in Python, web development, and Generative AI. Through hands-on projects, hackathons, and ideathons, I am exploring how technology can be used to solve practical problems.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              As an early-stage student, I prioritize strong foundational concepts over quick shortcuts. I believe that writing code daily, understanding how logic flows from inputs to outputs, and learning by debugging mistakes is the most authentic way to grow into a proficient engineer.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Rather than viewing artificial intelligence as an abstract theory, I am excited about the practical intersection where computer logic meets real-life utility. I am eager to participate in hackathons and collaborate with mentors, peers, and senior developers who share a commitment to continuous learning.
            </p>

            {/* Quick Principles / Student Mindset */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>Growth Mindset</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Actively learning every week through practice, university coursework, and project iteration.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-1">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  <span>Curiosity & Rigor</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Focusing on core programming fundamentals before moving on to complex frameworks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: "Currently Exploring" Area */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Active Learning Tracks
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Currently Exploring
                </h3>
                <p className="text-xs text-slate-600">
                  Key areas I am focusing on during my first semester of B.Tech studies.
                </p>
              </div>

              <div className="space-y-3">
                {exploringTopics.map((topic, index) => (
                  <div
                    key={topic.name}
                    className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-colors"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-900">
                        {topic.name}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200/60 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Documenting progress as I build new projects.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
