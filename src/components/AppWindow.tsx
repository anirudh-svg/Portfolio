import { motion, useMotionValue, useTransform } from 'motion/react';
import { X, Minus, Square, TerminalSquare } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ContactSection } from './ContactSection';
import { SkillsSection } from './SkillsSection';
import { playWindowPopSound } from '../utils/sound';

interface AppWindowProps {
  app: {
    id: string;
    command: string;
    title: string;
  };
  index: number;
  onClose: () => void;
}

const APP_CONTENT: Record<string, { lines: string[]; delay: number }> = {
  about: {
    lines: [
      '#!/bin/bash',
      '# about.sh - Profile Information',
      '',
      'NAME="M Anirudhan"',
      'ROLE="AI Engineer & Full-Stack Developer"',
      'EDUCATION="B.Tech Computer Science | Alliance University | CGPA: 8.0"',
      '',
      'echo "Initializing profile..."',
      'sleep 0.5',
      '',
      'cat << EOF',
      '================================',
      'ABOUT ME',
      '================================',
      '',
      'Results-driven AI and Full-Stack Developer passionate',
      'about building scalable apps, intelligent automation',
      'systems, and data-driven solutions.',
      '',
      'SPECIALIZATIONS:',
      '  - NLP & Sentiment Analysis',
      '  - Full-Stack Web Development (MERN & Java)',
      '  - DevOps',
      '',
      'EXPERTISE:',
      '  - Building intelligent, data-driven applications',
      '  - Scalable backend systems with Node.js, FastAPI, Spring Boot',
      '  - Modern web interfaces with React, TypeScript',
      '  - AI-powered dashboards and automation tools',
      '  - DevOps with Docker, Kubernetes, GitHub Actions',
      '',
      'PASSION:',
      'Solving complex problems, optimizing user experience,',
      'and turning innovative ideas into production-ready systems.',
      '',
      'EOF',
      '',
      'echo "Profile loaded successfully"',
    ],
    delay: 30,
  },
  skills: {
    lines: [
      '#!/bin/bash',
      '# skills.sh - Technical Skills Matrix',
      '',
      'echo "Scanning skill database..."',
      'sleep 0.3',
      '',
      'printf "\\n[DEVOPS & CLOUD]\\n"',
      'skills_devops=(',
      '  "Docker"',
      '  "Kubernetes"',
      '  "Jenkins"',
      '  "GitLab CI"',
      '  "GitHub Actions"',
      '  "ArgoCD"',
      '  "Terraform"',
      '  "Ansible"',
      '  "AWS"',
      '  "Azure"',
      '  "Google Cloud Platform"',
      ')',
      '',
      'printf "\\n[DEVELOPMENT]\\n"',
      'skills_dev=(',
      '  "JavaScript / TypeScript"',
      '  "Python"',
      '  "Go"',
      '  "Bash / Shell Scripting"',
      '  "React / Next.js"',
      '  "Node.js / Express"',
      '  "FastAPI / Django"',
      '  "PostgreSQL / MySQL"',
      '  "MongoDB / Redis"',
      ')',
      '',
      'printf "\\n[TOOLS & PRACTICES]\\n"',
      'skills_tools=(',
      '  "Git / Version Control"',
      '  "Prometheus / Grafana"',
      '  "ELK Stack"',
      '  "Nginx / Traefik"',
      '  "Linux Administration"',
      '  "Agile / Scrum"',
      '  "TDD / BDD"',
      ')',
      '',
      'echo "Skill scan complete"',
    ],
    delay: 25,
  },
  projects: {
    lines: [
      '#!/bin/bash',
      '# projects.sh - Project Repository',
      '',
      'echo "Fetching project data from GitHub..."',
      'git fetch --all',
      '',
      'cat << EOF',
      '',
      '[PROJECT_001] CheckMate - Event & Business Planner',
      'YEAR: 2024',
      'STACK: TypeScript, React, Node.js, Firebase',
      'LINK: github.com/anirudh-svg/Check-Mate',
      'HIGHLIGHTS:',
      '  - Role-based event groups',
      '  - Calendar logging & scheduling',
      '  - Payment integration',
      '  - Real-time updates',
      '',
      '[PROJECT_002] Stock Trend Prediction with Sentiment Analysis',
      'YEAR: 2023-2024',
      'STACK: Python, Streamlit, TensorFlow, VADER, yfinance',
      'LINK: github.com/anirudh-svg/Stock-Prediction-Using-Sentimental-Analysis-',
      'HIGHLIGHTS:',
      '  - LSTM model + sentiment analysis',
      '  - Real-time stock prediction',
      '  - API integrated market data',
      '  - Published research paper in Springer',
      '',
      '[PROJECT_003] PeerLift - AI Mental Health Platform',
      'YEAR: 2024-2025',
      'STACK: React, Convex, OpenAI API, HTML/CSS',
      'LINK: github.com/anirudh-svg/Peer-Lift-',
      'HIGHLIGHTS:',
      '  - AI emotional analysis',
      '  - Privacy-focused encrypted conversations',
      '  - Fully responsive UI',
      '',
      '[PROJECT_004] Expense Tracker Application - MERN',
      'YEAR: 2024-2025',
      'STACK: React, MongoDB, Node.js, Express.js, JWT',
      'LINK: github.com/anirudh-svg/My-Expense-Tracker',
      'HIGHLIGHTS:',
      '  - Analytics dashboard',
      '  - Personal finance tracking',
      '  - Secure JWT authentication',
      '',
      '',
      '[PROJECT_005] No-Code DAO Builder',
      'YEAR: 2025-Present',
      'STACK: React, TypeScript, Web3.js, Solidity, Docker, Minikube',
      'LINK: github.com/anirudh-svg/No-Code-Platform-for-building-DAO',
      'HIGHLIGHTS:',
      '  - Create and deploy DAOs visually',
      '  - Smart contract deployment',
      '  - Governance UI',
      '  - Conference paper published in IJEST',
      '',
      '[PROJECT_006] Snipper - Code Snippet Platform',
      'YEAR: 2025-Present',
      'STACK: Java, Spring Boot, SQL, React, Docker, K8s, JWT',
      'LINK: github.com/anirudh-svg/Snipper',
      'HIGHLIGHTS:',
      '  - Create, edit, share code snippets',
      '  - JWT auth + CI/CD pipeline',
      '  - Nginx + Docker + Kubernetes deployment',
      '',
      'EOF',
      '',
      'echo "Repository fetch complete"',
      'echo "Total projects: 6 | Status: Active Development"',
      '',
      'echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"',
      'echo ""',
      'echo "For more projects, visit:"',
      'echo "→ https://github.com/anirudh-svg"',
    ],
    delay: 25,
  },
  contact: {
    lines: [
      '#!/bin/bash',
      '# contact.sh - Contact Information',
      '',
      'echo "Establishing connection..."',
      'sleep 0.3',
      '',
      'declare -A contact_info',
      '',
      'contact_info[email]="your.email@example.com"',
      'contact_info[github]="github.com/yourusername"',
      'contact_info[linkedin]="linkedin.com/in/yourprofile"',
      'contact_info[website]="yourwebsite.com"',
      'contact_info[timezone]="UTC+0"',
      '',
      'cat << EOF',
      '',
      '================================',
      'CONTACT INFORMATION',
      '================================',
      '',
      'EMAIL:    ${contact_info[email]}',
      'GITHUB:   ${contact_info[github]}',
      'LINKEDIN: ${contact_info[linkedin]}',
      'WEBSITE:  ${contact_info[website]}',
      'TIMEZONE: ${contact_info[timezone]}',
      '',
      '--------------------------------',
      '',
      'AVAILABILITY: Open to opportunities',
      'RESPONSE_TIME: Within 24 hours',
      'PREFERRED_CONTACT: Email',
      '',
      '--------------------------------',
      '',
      'Feel free to reach out for:',
      '  - Collaboration opportunities',
      '  - Technical discussions',
      '  - Consulting inquiries',
      '  - Open source contributions',
      '',
      'EOF',
      '',
      'echo "Connection established"',
    ],
    delay: 30,
  },
  experience: {
    lines: [
      '#!/bin/bash',
      '# experience.sh - Work Experience',
      '',
      'echo "Loading work experience..."',
      'sleep 0.3',
      '',
      'cat << EOF',
      '',
      '================================',
      'WORK EXPERIENCE',
      '================================',
      '',
      '[CURRENT] Full Stack Developer',
      'COMPANY: Oasisinfobyte',
      'PERIOD: 2025 (September) - 2025 (December)',
      'RESPONSIBILITIES:',
      '  - Built full-stack pizza delivery platform',
      '  - Technologies: React, Node.js, MongoDB',
      '  - Implemented secure admin/user authentication',
      '  - Added real-time order tracking system',
      '  - Created inventory management dashboards',
      '  - Integrated Razorpay payment gateway',
      '  - Built automated order confirmation system',
      '  - Developed inventory alerts & real-time status sync',
      '',
      '[CURRENT] Software Tester',
      'COMPANY: TestBird',
      'PERIOD: 2025 - Present',
      'ACHIEVEMENTS:',
      '  - Completed multiple testing cycles',
      '  - Earned 2000+ points on platform',
      '  - Detailed issue reporting and documentation',
      'FOCUS AREAS:',
      '  - UI/UX Testing',
      '  - Performance Testing',
      '  - Functionality Testing',
      '  - QA Documentation',
      '  - Bug Analysis & Reporting',
      '',
      'EOF',
      '',
      'echo "Experience data loaded"',
      'echo "Total positions: 2 | Status: Currently employed"',
    ],
    delay: 30,
  },
  education: {
    lines: [
      '#!/bin/bash',
      '# education.sh - Educational Background',
      '',
      'echo "Loading educational records..."',
      'sleep 0.3',
      '',
      'cat << EOF',
      '',
      '================================',
      'EDUCATION',
      '================================',
      '',
      '[CURRENT] Bachelor of Technology',
      'DEGREE: B.Tech - Computer Science',
      'INSTITUTION: Alliance University',
      'PERIOD: 2022 - 2026',
      'CGPA: 8.0 / 10.0',
      'FOCUS AREAS:',
      '  - Artificial Intelligence & Machine Learning',
      '  - Data Structures & Algorithms',
      '  - Database Management Systems',
      '  - Software Engineering',
      '  - Web Technologies',
      '  - Cloud Computing',
      '',
      '[COMPLETED] Pre-University Course (PUC)',
      'STREAM: PCMC (Physics, Chemistry, Mathematics, Computer Science)',
      'INSTITUTION: Narayana PU College',
      'PERIOD: 2020 - 2022',
      'PERCENTAGE: 74%',
      '',
      '[COMPLETED] Secondary School (10th)',
      'STREAM: PCMBHE',
      'INSTITUTION: Sri Chaitanya School',
      'YEAR: 2020',
      'PERCENTAGE: 90%',
      '',
      '================================',
      'ADDITIONAL LEARNING',
      '================================',
      '',
      'CERTIFICATIONS:',
      '  - IBM Generative AI Engineering (Professional)',
      '  - Amazon Junior Software Developer with GenAI',
      '  - CertNexus Certified AI Practitioner',
      '  - Oracle Generative AI (Professional)',
      '  - IBM Applied DevOps Engineering',
      '  - Java Testing - Coursera',
      '',
      'CLUBS & ACTIVITIES:',
      '  - Unity AR/VR Club (Manager)',
      '  - Google Developer Student Clubs (Member)',
      '  - NSS Volunteer',
      '',
      'EOF',
      '',
      'echo "Education records loaded successfully"',
    ],
    delay: 30,
  },
  achievements: {
    lines: [
      '#!/bin/bash',
      '# achievements.sh - Career Achievements',
      '',
      'echo "Loading achievement records..."',
      'sleep 0.4',
      '',
      'cat << EOF',
      '',
      '================================',
      'ACHIEVEMENTS & MILESTONES',
      '================================',
      '',
      '[COMPETITIONS & RANKINGS]',
      '  - 4th Rank in Campus Coding Challenge (2025)',
      '    Solved 100 Java-based algorithm problems',
      '    University-wide competition',
      '',
      '  - 200+ LeetCode Problems Solved (2025-Present)',
      '    Strong in Dynamic Programming, Graphs, Arrays, Hashing',
      '    Consistent problem-solving practice',
      '',
      '  - 2000+ Points on TestBird Platform',
      '    Multiple testing cycles with detailed issue reports',
      '    UI/UX, performance, and functionality testing',
      '',
      '[PUBLICATIONS]',
      '  - Research Paper: Stock Trend Prediction (2023-2024)',
      '    Published in Springer',
      '    LSTM + Sentiment Analysis approach',
      '',
      '  - Conference Paper: DAO Creation Platform (2025)',
      '    Published in IJEST',
      '    No-code blockchain governance systems',
      '',
      '[CERTIFICATIONS]',
      '  - IBM Generative AI Engineering (Professional) - Coursera',
      '  - Amazon Junior Software Developer with GenAI',
      '  - CertNexus Certified AI Practitioner',
      '  - Java Testing - Coursera',
      '  - Oracle Generative AI (Professional)',
      '  - IBM Applied DevOps Engineering',
      '',
      '[LEADERSHIP & ROLES]',
      '  - Club Manager - Unity AR/VR Club',
      '    Organized game dev tournaments',
      '    Led Unity 2D/3D & Blender sessions',
      '',
      '  - Member - Google Developer Student Clubs',
      '    Participated in tech events, hackathons, workshops',
      '',
      '  - Volunteer - NSS',
      '    Environmental cleanups',
      '    Women empowerment rallies',
      '    Traffic awareness campaigns',
      '',
      '[PERSONAL ACHIEVEMENTS]',
      '  - Completed Manaslu Circuit Trek (Nepal)',
      '    High-altitude trekking expedition',
      '',
      '  - Competitive Football Player',
      '    Team sports and leadership skills',
      '',
      '  - Music Enthusiast',
      '    Passionate about productivity playlists',
      '',
      'EOF',
      '',
      'echo "Achievement data loaded successfully"',
      'echo "Total certifications: 6 | Publications: 2 | LeetCode: 200+"',
    ],
    delay: 25,
  },
};

export function AppWindow({ app, index, onClose }: AppWindowProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const content = APP_CONTENT[app.command];
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (!content) return;

    let currentLine = 0;
    setIsLoading(true);

    const interval = setInterval(() => {
      if (currentLine < content.lines.length) {
        setDisplayedLines((prev) => [...prev, content.lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, content.delay);

    return () => clearInterval(interval);
  }, [content]);

  const offsetX = index * 30;
  const offsetY = index * 30;

  // Play sound when window opens
  useEffect(() => {
    playWindowPopSound();
  }, []);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
      className="fixed border-2 border-cyan-400 rounded-lg shadow-2xl shadow-cyan-400/30 bg-black z-50"
      style={{
        left: `${100 + offsetX}px`,
        top: `${100 + offsetY}px`,
        width: '600px',
        maxWidth: 'calc(100vw - 40px)',
        x,
        y,
      }}
    >
      {/* Window Header */}
      <div className={`bg-cyan-400 text-black px-4 py-2 flex items-center justify-between ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
        <div className="flex items-center gap-2">
          <TerminalSquare size={16} />
          <span className="text-sm">{app.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="hover:bg-black/20 p-1 rounded transition-colors"
            onClick={onClose}
          >
            <Minus size={14} />
          </button>
          <button className="hover:bg-black/20 p-1 rounded transition-colors">
            <Square size={14} />
          </button>
          <button
            className="hover:bg-red-500 hover:text-white p-1 rounded transition-colors"
            onClick={onClose}
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Window Body */}
      <div className="bg-black/95 p-4 h-[500px] overflow-y-auto">
        {app.command === 'contact' ? (
          <ContactSection />
        ) : app.command === 'skills' ? (
          <SkillsSection />
        ) : (
          <div className="text-cyan-300 text-sm font-mono space-y-1">
            {displayedLines.map((line, index) => {
              const lineStr = line || '';
              
              // Check if line contains a URL
              const urlMatch = lineStr.match(/(https?:\/\/[^\s]+|github\.com\/[^\s]+|linkedin\.com\/[^\s]+|leetcode\.com\/[^\s]+)/);
              const hasUrl = urlMatch !== null;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  className={`${
                    lineStr.startsWith('#') || lineStr.startsWith('//') 
                      ? 'text-cyan-600' 
                      : lineStr.startsWith('echo') || lineStr.includes('EOF') || lineStr.startsWith('cat')
                      ? 'text-yellow-400'
                      : lineStr.startsWith('[') || lineStr.startsWith('NAME:') || lineStr.startsWith('ROLE=')
                      ? 'text-green-400'
                      : lineStr.includes('=') && lineStr.includes('"')
                      ? 'text-purple-400'
                      : 'text-cyan-300/90'
                  }`}
                >
                  {hasUrl && urlMatch ? (
                    <>
                      {lineStr.substring(0, urlMatch.index)}
                      <a
                        href={urlMatch[0].startsWith('http') ? urlMatch[0] : `https://${urlMatch[0]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {urlMatch[0]}
                      </a>
                      {lineStr.substring((urlMatch.index || 0) + urlMatch[0].length)}
                    </>
                  ) : (
                    lineStr || '\u00A0'
                  )}
                </motion.div>
              );
            })}
            {isLoading && (
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-cyan-400 ml-1"
              />
            )}
          </div>
        )}
      </div>

      {/* Window Footer */}
      <div className="bg-cyan-400/20 px-4 py-1 text-xs text-cyan-400 border-t border-cyan-400/30 flex items-center justify-between">
        <span>Process ID: {app.id.slice(-6)}</span>
        <span>Lines: {displayedLines.length}/{content?.lines.length || 0}</span>
      </div>
    </motion.div>
  );
}