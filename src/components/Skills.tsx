import React from 'react';
import { Terminal, Globe, Cpu, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Programming',
      icon: Terminal,
      description: 'Core logic building, standard syntax, and foundational scripts',
      skills: [
        { name: 'Python', level: 'Core Language' }
      ]
    },
    {
      category: 'Web Development',
      icon: Globe,
      description: 'Foundational front-end technologies for structuring and styling interfaces',
      skills: [
        { name: 'HTML', level: 'Page Structure' },
        { name: 'CSS', level: 'Styling & Layouts' },
        { name: 'JavaScript', level: 'Fundamental Interactions' },
        { name: 'Basic Web Development', level: 'Front-End Basics' }
      ]
    },
    {
      category: 'AI',
      icon: Cpu,
      description: 'Early-stage exploration of modern AI paradigms and learning goals',
      skills: [
        { name: 'Generative AI', level: 'Beginner' },
        { name: 'AI Engineering', level: 'Exploring' }
      ]
    },
    {
      category: 'Development & Problem Solving',
      icon: Wrench,
      description: 'Methodical approaches to breaking down challenges and building software',
      skills: [
        { name: 'Logical Thinking', level: 'Foundational' },
        { name: 'Problem Solving', level: 'Algorithmic' },
        { name: 'Project Development', level: 'Hands-on Practice' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            Technical Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Skills & Foundations
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A transparent overview of the programming languages, web fundamentals, and cognitive competencies I am actively learning.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Clean Skill Items (No fake percentage bars, no static pills) */}
                  <div className="mt-5 divide-y divide-slate-100">
                    {group.skills.map((item) => (
                      <div
                        key={item.name}
                        className="py-3 flex items-center justify-between text-sm"
                      >
                        <span className="font-medium text-slate-800">
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                  Practiced through academic coursework & personal projects
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Honest reflection of my current 1st semester knowledge base. No exaggerated claims, no unearned certifications, and no inflated proficiency percentages.
        </div>

      </div>
    </section>
  );
};
