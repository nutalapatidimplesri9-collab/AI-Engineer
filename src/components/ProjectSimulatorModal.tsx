import React, { useState } from 'react';
import { X, Play, RefreshCw, Terminal, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technology: string;
  category: string;
  repoUrl: string;
  pythonCode: string;
}

interface ProjectSimulatorModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectSimulatorModal: React.FC<ProjectSimulatorModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'simulator' | 'code'>('simulator');
  const [copied, setCopied] = useState(false);

  // Voter State
  const [voterAge, setVoterAge] = useState<string>('19');
  const [voterCitizen, setVoterCitizen] = useState<string>('yes');
  const [voterResult, setVoterResult] = useState<string | null>(null);

  // ATM State
  const [atmBalance, setAtmBalance] = useState<number>(5000);
  const [atmAmount, setAtmAmount] = useState<string>('500');
  const [atmLogs, setAtmLogs] = useState<string[]>([
    'System initialized. Current balance: ₹5000.00'
  ]);

  // Grade State
  const [gradeMarks, setGradeMarks] = useState<{ [subject: string]: number }>({
    'Mathematics': 88,
    'Python Programming': 92,
    'Digital Logic': 81,
    'English Communication': 85
  });
  const [gradeResult, setGradeResult] = useState<{ total: number; percentage: number; grade: string } | null>(null);

  const copyCode = () => {
    navigator.clipboard.writeText(project.pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Run Voter Calculation
  const runVoterCalc = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(voterAge, 10);
    if (isNaN(age) || age < 0) {
      setVoterResult('Please enter a valid age (0 or higher).');
      return;
    }
    const isCitizen = voterCitizen.toLowerCase() === 'yes';

    if (age >= 18 && isCitizen) {
      setVoterResult(`Eligible to Vote: Age ${age} meets the legal requirement (≥ 18) and citizenship criteria.`);
    } else if (age < 18 && isCitizen) {
      setVoterResult(`Not Eligible: Age ${age} is under 18. You will be eligible in ${18 - age} year(s).`);
    } else {
      setVoterResult(`Not Eligible: Must be a verified citizen to register to vote.`);
    }
  };

  // Run ATM Actions
  const handleAtmAcount = (action: 'check' | 'deposit' | 'withdraw') => {
    const val = parseFloat(atmAmount);

    if (action === 'check') {
      setAtmLogs(prev => [`[CHECK] Current Balance: ₹${atmBalance.toFixed(2)}`, ...prev.slice(0, 5)]);
      return;
    }

    if (isNaN(val) || val <= 0) {
      setAtmLogs(prev => [`[ERROR] Please enter a valid positive amount.`, ...prev.slice(0, 5)]);
      return;
    }

    if (action === 'deposit') {
      const newBal = atmBalance + val;
      setAtmBalance(newBal);
      setAtmLogs(prev => [`[DEPOSIT] Successfully credited ₹${val.toFixed(2)}. New balance: ₹${newBal.toFixed(2)}`, ...prev.slice(0, 5)]);
    } else if (action === 'withdraw') {
      if (val > atmBalance) {
        setAtmLogs(prev => [`[DECLINED] Insufficient balance! Tried to withdraw ₹${val.toFixed(2)}, Available: ₹${atmBalance.toFixed(2)}`, ...prev.slice(0, 5)]);
      } else {
        const newBal = atmBalance - val;
        setAtmBalance(newBal);
        setAtmLogs(prev => [`[WITHDRAWAL] Successfully debited ₹${val.toFixed(2)}. Remaining: ₹${newBal.toFixed(2)}`, ...prev.slice(0, 5)]);
      }
    }
  };

  // Run Grade Calculation
  const runGradeCalc = () => {
    const marks = Object.values(gradeMarks);
    const total = marks.reduce((a, b) => a + b, 0);
    const percentage = total / marks.length;
    let grade = 'F';

    if (percentage >= 90) grade = 'A+ (Outstanding)';
    else if (percentage >= 80) grade = 'A (Excellent)';
    else if (percentage >= 70) grade = 'B (Good)';
    else if (percentage >= 60) grade = 'C (Satisfactory)';
    else if (percentage >= 50) grade = 'D (Pass)';
    else grade = 'F (Needs Improvement)';

    setGradeResult({ total, percentage: Math.round(percentage * 10) / 10, grade });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-0.5">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.technology}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
          </div>
          
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center px-6 pt-3 border-b border-slate-100 gap-2 bg-white">
          <button
            type="button"
            onClick={() => setActiveTab('simulator')}
            className={`pb-3 text-xs sm:text-sm font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Logic Demo</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`pb-3 text-xs sm:text-sm font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'code'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Python Source Code</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            {project.description}
          </p>

          {activeTab === 'simulator' && (
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-5">
              
              {/* Voter Project Simulation */}
              {project.id === 'voter' && (
                <form onSubmit={runVoterCalc} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Age of Applicant (Years)
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="120"
                        value={voterAge}
                        onChange={(e) => setVoterAge(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        placeholder="e.g. 19"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Citizen Status
                      </label>
                      <select
                        value={voterCitizen}
                        onChange={(e) => setVoterCitizen(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                      >
                        <option value="yes">Yes, Registered Citizen</option>
                        <option value="no">No, Non-Citizen</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    Run Python Age Verification
                  </button>

                  {voterResult && (
                    <div className="mt-3 p-3.5 bg-white rounded-lg border border-slate-200 text-xs flex items-start gap-2.5">
                      {voterResult.startsWith('Eligible') ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      )}
                      <div className="text-slate-800 font-medium">{voterResult}</div>
                    </div>
                  )}
                </form>
              )}

              {/* ATM Project Simulation */}
              {project.id === 'atm' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-xs text-slate-500 font-medium">Account Balance</span>
                    <span className="text-lg font-bold text-slate-900 font-mono">₹{atmBalance.toFixed(2)}</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Transaction Amount (₹)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="1"
                        value={atmAmount}
                        onChange={(e) => setAtmAmount(e.target.value)}
                        className="flex-1 px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => handleAtmAcount('deposit')}
                      className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
                    >
                      Deposit Funds
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAtmAcount('withdraw')}
                      className="px-3.5 py-1.5 text-xs font-semibold text-slate-800 bg-slate-200 hover:bg-slate-300 rounded-lg transition-colors"
                    >
                      Withdraw Funds
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAtmAcount('check')}
                      className="px-3.5 py-1.5 text-xs font-semibold text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                    >
                      Check Balance
                    </button>
                  </div>

                  <div className="mt-3">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      Console Transaction Log:
                    </div>
                    <div className="bg-slate-900 rounded-lg p-3 text-xs font-mono text-slate-300 space-y-1">
                      {atmLogs.map((log, i) => (
                        <div key={i} className="text-emerald-400">› {log}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Student Grade Project Simulation */}
              {project.id === 'grade' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(gradeMarks).map(([subj, val]) => (
                      <div key={subj}>
                        <label className="block text-xs text-slate-700 font-medium mb-1">
                          {subj} (0-100)
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={val}
                          onChange={(e) => {
                            const num = parseInt(e.target.value, 10) || 0;
                            setGradeMarks(prev => ({ ...prev, [subj]: Math.min(100, Math.max(0, num)) }));
                          }}
                          className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={runGradeCalc}
                    className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    Compute Grade & Percentage
                  </button>

                  {gradeResult && (
                    <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-1.5 text-xs">
                      <div className="flex justify-between text-slate-600">
                        <span>Total Marks:</span>
                        <span className="font-semibold text-slate-900">{gradeResult.total} / 400</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Aggregate Percentage:</span>
                        <span className="font-semibold text-slate-900">{gradeResult.percentage}%</span>
                      </div>
                      <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-100">
                        <span className="font-medium text-slate-800">Final Grade:</span>
                        <span className="font-bold text-blue-700">{gradeResult.grade}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

          {activeTab === 'code' && (
            <div className="relative">
              <button
                type="button"
                onClick={copyCode}
                className="absolute top-3 right-3 px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded flex items-center gap-1.5 z-10 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <pre className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800 max-h-96">
                <code>{project.pythonCode}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 flex items-center justify-between bg-slate-50/70">
          <span className="text-xs text-slate-500">
            Confirmed Repository: nutalapatidimplesri9-collab/dimple-sri-python
          </span>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 hover:underline"
          >
            Open on GitHub &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};
