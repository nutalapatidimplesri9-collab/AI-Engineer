import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, MessageSquare, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    purpose: 'Collaboration / Hackathon',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const linkedinUrl = 'https://www.linkedin.com/in/dimple-sri-nutalapati-635755434';
  const githubUrl = 'https://github.com/nutalapatidimplesri9-collab/dimple-sri-python';

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(type);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Let's Build and Learn Together
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            I'm always interested in learning, exploring ideas, and connecting with people who are passionate about technology and innovation.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Profile Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-900">
                Direct Profiles
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with me on professional networks to follow project updates, discuss hackathon ideas, or share student learning resources.
              </p>

              {/* LinkedIn Button Card */}
              <div className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors flex items-center justify-between group bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center font-bold text-lg">
                    {/* SVG LinkedIn Icon */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      LinkedIn
                    </div>
                    <div className="text-xs text-slate-500">
                      dimple-sri-nutalapati
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleCopy(linkedinUrl, 'linkedin')}
                    className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-white"
                    title="Copy Profile URL"
                  >
                    {copiedLink === 'linkedin' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-[#0077b5] hover:bg-[#006097] rounded-lg transition-colors"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* GitHub Button Card */}
              <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-400 transition-colors flex items-center justify-between group bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                    {/* SVG GitHub Icon */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      GitHub
                    </div>
                    <div className="text-xs text-slate-500">
                      dimple-sri-python
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleCopy(githubUrl, 'github')}
                    className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-white"
                    title="Copy Repo URL"
                  >
                    {copiedLink === 'github' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <span>Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-600 space-y-1">
              <span className="font-semibold text-blue-900 block">Open to Conversations</span>
              <p>
                Whether discussing student hackathon ideas, foundational Python logic, or study resources, feel free to reach out via LinkedIn.
              </p>
            </div>
          </div>

          {/* Right Column: Connection Note Drafter */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Compose a Message Note</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Draft a Note for Dimple Sri
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Fill out this quick form to preview or prepare a message for LinkedIn or collaboration.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Your note has been formatted. You can copy it directly into a LinkedIn connection request to connect with Dimple Sri Nutalapati.
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 font-mono text-left overflow-x-auto">
                    "{formData.message}"
                  </div>
                  <div className="pt-2 flex justify-center gap-3">
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg inline-flex items-center gap-1.5"
                    >
                      <span>Send on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Sharma"
                        className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Purpose of Connect
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                      >
                        <option value="Collaboration / Hackathon">Hackathon / Project Collaboration</option>
                        <option value="Tech Discussion">Tech & AI Discussion</option>
                        <option value="Student Mentorship / Feedback">Mentorship / Constructive Feedback</option>
                        <option value="General Professional Connect">General Professional Connect</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Dimple Sri, I came across your student portfolio and would love to connect..."
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Format & Connect</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
