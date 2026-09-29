import React, { useState } from 'react';
import { Github, ExternalLink, Play, Code2, ArrowUpRight } from 'lucide-react';
import { ProjectSimulatorModal, ProjectData } from './ProjectSimulatorModal.tsx';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const confirmedRepoUrl = 'https://github.com/nutalapatidimplesri9-collab/dimple-sri-python';

  const projectsList: ProjectData[] = [
    {
      id: 'voter',
      title: 'Voter Eligibility Calculator',
      description: 'A beginner-friendly Python project that determines whether a person meets the required age criteria for voting eligibility.',
      technology: 'Python',
      category: 'Python / Logic Building',
      repoUrl: confirmedRepoUrl,
      pythonCode: `# Voter Eligibility Calculator
# Author: Dimple Sri Nutalapati
# B.Tech 1st Semester - Python Foundations

def check_voter_eligibility(age: int, is_citizen: bool = True):
    print("=== Voter Eligibility Verification System ===")
    
    if age < 0:
        return "Invalid age entered. Please input a positive number."
    
    if age >= 18 and is_citizen:
        return f"Eligible to Vote: Applicant is {age} years old and meets national criteria."
    elif age < 18 and is_citizen:
        years_left = 18 - age
        return f"Not Eligible: Applicant is {age} years old. Eligible in {years_left} year(s)."
    else:
        return "Not Eligible: Must hold verified citizenship to register for voting."

# Sample Execution
if __name__ == "__main__":
    test_age = 19
    result = check_voter_eligibility(test_age, is_citizen=True)
    print(result)`
    },
    {
      id: 'atm',
      title: 'ATM Management System',
      description: 'A Python-based beginner project that simulates basic ATM operations and focuses on applying programming logic to a practical use case.',
      technology: 'Python',
      category: 'Python / Application Logic',
      repoUrl: confirmedRepoUrl,
      pythonCode: `# ATM Management System
# Author: Dimple Sri Nutalapati
# Focus: Practical Conditional Logic & State Updates

class SimpleATM:
    def __init__(self, initial_balance=5000.0):
        self.balance = initial_balance
        print("ATM Initialized with Balance: INR", self.balance)

    def check_balance(self):
        return f"Current Available Balance: INR {self.balance:.2f}"

    def deposit(self, amount: float):
        if amount <= 0:
            return "Invalid deposit amount. Must be greater than zero."
        self.balance += amount
        return f"Successfully credited INR {amount:.2f}. New Balance: INR {self.balance:.2f}"

    def withdraw(self, amount: float):
        if amount <= 0:
            return "Invalid withdrawal amount."
        if amount > self.balance:
            return "Transaction Declined: Insufficient account funds."
        self.balance -= amount
        return f"Dispensed INR {amount:.2f}. Remaining Balance: INR {self.balance:.2f}"

if __name__ == "__main__":
    atm = SimpleATM()
    print(atm.check_balance())
    print(atm.deposit(1200))
    print(atm.withdraw(500))`
    },
    {
      id: 'grade',
      title: 'Student Grade Calculator',
      description: 'A Python project designed to calculate student grades based on marks and demonstrate the use of conditional logic and basic programming concepts.',
      technology: 'Python',
      category: 'Python / Education',
      repoUrl: confirmedRepoUrl,
      pythonCode: `# Student Grade Calculator
# Author: Dimple Sri Nutalapati
# Focus: Multi-Branch Conditionals & Aggregate Calculations

def calculate_student_grade(subject_marks: dict):
    print("=== Academic Grade Evaluation ===")
    
    total_marks = sum(subject_marks.values())
    subject_count = len(subject_marks)
    percentage = total_marks / subject_count
    
    # Conditional logic based on standard academic grading
    if percentage >= 90:
        grade = "A+ (Outstanding)"
    elif percentage >= 80:
        grade = "A (Excellent)"
    elif percentage >= 70:
        grade = "B (Good)"
    elif percentage >= 60:
        grade = "C (Satisfactory)"
    elif percentage >= 50:
        grade = "D (Pass)"
    else:
        grade = "F (Needs Improvement)"

    return {
        "total": total_marks,
        "percentage": round(percentage, 2),
        "grade": grade
    }

if __name__ == "__main__":
    scores = {
        "Mathematics": 88,
        "Python": 92,
        "Digital Logic": 81,
        "English": 85
    }
    report = calculate_student_grade(scores)
    print(f"Percentage: {report['percentage']}% | Grade: {report['grade']}")`
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase">
            Portfolio Showcase
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Projects I've Built
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Foundational software projects developed to apply core Python syntax, algorithmic reasoning, and practical control flow.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projectsList.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Clean Unboxed Metadata (Zero-Pill Rule) */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-700 font-semibold">{project.technology}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Python 3</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                >
                  <Play className="w-3.5 h-3.5 text-blue-600" />
                  <span>Test Live Demo & Code</span>
                </button>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Verification Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>All repository links point directly to Dimple Sri's confirmed GitHub Python repository.</span>
          </div>
          <a
            href={confirmedRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 whitespace-nowrap"
          >
            <span>Browse Full Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Simulator Modal */}
      <ProjectSimulatorModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
