import React from 'react';
import { Calendar, Users, Rocket, Award, PlusCircle, Sparkles } from 'lucide-react';

export const Hackathons: React.FC = () => {
  // Placeholders clearly labeled for future updates without fake data
  const futureEntries = [
    {
      slotId: '01',
      status: 'Ready for Log',
      eventPlaceholder: 'Hackathon / Ideathon Name',
      yearPlaceholder: '2026',
      rolePlaceholder: 'Role / Contribution (e.g. Logic & Python Prototyping)',
      projectPlaceholder: 'Project or Idea (To be updated upon participation)',
      achievementPlaceholder: 'Achievement or Finalist Milestone (If applicable)'
    },
    {
      slotId: '02',
      status: 'Upcoming Opportunity',
      eventPlaceholder: 'Next Campus / Open Ideathon',
      yearPlaceholder: '2026',
      rolePlaceholder: 'Collaborative Problem Solver & Developer',
      projectPlaceholder: 'Idea Exploration & Practical Solution Prototype',
      achievementPlaceholder: 'Recognition or Participation Documentation'
    }
  ];

  return (
    <section id="hackathons" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            Collaboration & Innovation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Hackathons & Ideathons
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            "I enjoy participating in hackathons and ideathons as opportunities to explore ideas, collaborate, think creatively, and learn through practical problem solving."
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Informative Note & Philosophy */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs mb-8">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                Early-Stage Collaborative Spirit
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As a first-semester B.Tech student, I view hackathons and ideathons as vital learning labs. They provide the ideal high-energy environment to team up with peers, brainstorm innovative approaches to pressing challenges, test algorithmic ideas, and communicate technical concepts clearly.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Timeline / Structure Cards Ready for Updates */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">
            <span>Participation Log & Timeline</span>
            <span className="text-blue-700">Schema Ready for Upcoming Events</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureEntries.map((entry) => (
              <div
                key={entry.slotId}
                className="bg-white rounded-2xl border border-dashed border-slate-300 p-6 sm:p-7 space-y-5 hover:border-blue-300 transition-colors relative"
              >
                {/* Header of Entry */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      SLOT {entry.slotId}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {entry.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Template Field
                  </span>
                </div>

                {/* Clearly labeled placeholders with NO fake achievements */}
                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Hackathon Name
                    </span>
                    <div className="font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                      {entry.eventPlaceholder}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Year
                      </span>
                      <div className="text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60 flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{entry.yearPlaceholder}</span>
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Role / Contribution
                      </span>
                      <div className="text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60 truncate flex items-center gap-1.5" title={entry.rolePlaceholder}>
                        <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{entry.rolePlaceholder}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Project or Idea
                    </span>
                    <div className="text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60 flex items-start gap-1.5">
                      <Rocket className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{entry.projectPlaceholder}</span>
                    </div>
                  </div>

                  <div>
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Achievement, if applicable
                    </span>
                    <div className="text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{entry.achievementPlaceholder}</span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 flex items-center gap-1.5">
                  <PlusCircle className="w-3.5 h-3.5 text-blue-500" />
                  <span>Will be updated with verified participation details after future events.</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
