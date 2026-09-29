/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Personal Portfolio Website for Dimple Sri Nutalapati
 * B.Tech 1st Semester Student | Aspiring AI Engineer | Python Developer
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Hackathons } from './components/Hackathons.tsx';
import { LearningJourney } from './components/LearningJourney.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* 1. Header & Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section: Personal Introduction & Foundational Focus */}
        <Hero />

        {/* 3. About Me: Authentic Student Narrative & Currently Exploring Tracks */}
        <About />

        {/* 4. Skills: Structured Technical Categories (No fake percentages) */}
        <Skills />

        {/* 5. Projects: Practical Python Projects with Live Demos and Code */}
        <Projects />

        {/* 6. Hackathons & Ideathons: Future-Ready Timelines and Participation Slots */}
        <Hackathons />

        {/* 7. Learning Journey: Visual Roadmap from Student to AI Engineer */}
        <LearningJourney />

        {/* 8 & 9. Connect & Contact: LinkedIn, GitHub, and Message Composer */}
        <Contact />
      </main>

      {/* 10. Footer: Minimal Copyright & Direct Links */}
      <Footer />
    </div>
  );
}
