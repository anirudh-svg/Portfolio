import { motion } from 'motion/react';
import {
  Container,
  Cloud,
  Boxes,
  GitBranch,
  Code2,
  Database,
  Server,
  Terminal,
  Layers,
  Gauge,
  Shield,
  Workflow,
  Braces,
  FileCode,
} from 'lucide-react';

interface Skill {
  name: string;
  icon: any;
  url: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'PROGRAMMING LANGUAGES',
    skills: [
      { name: 'Java', icon: Code2, url: 'https://www.java.com/' },
      { name: 'Python', icon: Code2, url: 'https://www.python.org/' },
      { name: 'JavaScript', icon: Code2, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: Code2, url: 'https://www.typescriptlang.org/' },
      { name: 'SQL', icon: Database, url: 'https://en.wikipedia.org/wiki/SQL' },
    ],
  },
  {
    title: 'FRONTEND',
    skills: [
      { name: 'HTML', icon: FileCode, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', icon: FileCode, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'React', icon: Code2, url: 'https://react.dev/' },
      { name: 'Vite', icon: Workflow, url: 'https://vitejs.dev/' },
    ],
  },
  {
    title: 'BACKEND',
    skills: [
      { name: 'Node.js', icon: Server, url: 'https://nodejs.org/' },
      { name: 'Express.js', icon: Server, url: 'https://expressjs.com/' },
      { name: 'FastAPI', icon: Server, url: 'https://fastapi.tiangolo.com/' },
      { name: 'Spring Boot', icon: Server, url: 'https://spring.io/projects/spring-boot' },
    ],
  },
  {
    title: 'DATABASES',
    skills: [
      { name: 'MongoDB', icon: Database, url: 'https://www.mongodb.com/' },
      { name: 'MySQL', icon: Database, url: 'https://www.mysql.com/' },
      { name: 'Prisma', icon: Database, url: 'https://www.prisma.io/' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'PyTorch', icon: Braces, url: 'https://pytorch.org/' },
      { name: 'TensorFlow', icon: Braces, url: 'https://www.tensorflow.org/' },
      { name: 'NLP', icon: Code2, url: 'https://en.wikipedia.org/wiki/Natural_language_processing' },
      { name: 'VADER', icon: Code2, url: 'https://github.com/cjhutto/vaderSentiment' },
    ],
  },
  {
    title: 'DEVOPS & CLOUD',
    skills: [
      { name: 'Git', icon: GitBranch, url: 'https://git-scm.com/' },
      { name: 'Docker', icon: Container, url: 'https://www.docker.com/' },
      { name: 'Minikube', icon: Boxes, url: 'https://minikube.sigs.k8s.io/' },
      { name: 'GitHub Actions', icon: Workflow, url: 'https://github.com/features/actions' },
      { name: 'Nginx', icon: Server, url: 'https://www.nginx.com/' },
    ],
  },
  {
    title: 'WEB3 / BLOCKCHAIN',
    skills: [
      { name: 'Web3.js', icon: Code2, url: 'https://web3js.org/' },
      { name: 'Ether.js', icon: Code2, url: 'https://ethers.org/' },
      { name: 'Solidity', icon: FileCode, url: 'https://soliditylang.org/' },
      { name: 'Slither', icon: Shield, url: 'https://github.com/crytic/slither' },
    ],
  },
];

export function SkillsSection() {
  return (
    <div className="space-y-6">
      <div className="text-cyan-300 text-sm">
        <div>#!/bin/bash</div>
        <div className="text-cyan-600"># skills.sh - Technical Skills Matrix</div>
        <div className="mt-4">echo "Scanning skill database..."</div>
        <div className="text-yellow-400 mt-2">echo "M Anirudhan - AI Engineer & Full-Stack Developer"</div>
      </div>

      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.2 }}
          className="border-t border-cyan-400/30 pt-4"
        >
          <div className="text-green-400 mb-3">{category.title}</div>
          <div className="grid grid-cols-2 gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.a
                key={skill.name}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                className="flex items-center gap-2 p-2 border border-cyan-400/30 rounded hover:border-cyan-400 hover:bg-cyan-400/10 transition-all group cursor-pointer"
              >
                <div className="p-1.5 bg-cyan-400/20 rounded group-hover:bg-cyan-400/30 transition-colors">
                  <skill.icon size={16} className="text-cyan-400" />
                </div>
                <span className="text-cyan-300 text-sm">{skill.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      ))}

      <div className="text-cyan-300 text-sm mt-4">
        <div>echo "Skill scan complete"</div>
        <div className="text-green-400">Status: 200+ LeetCode problems solved | Expert in Java, Python, React</div>
      </div>
    </div>
  );
}
