import { Mail, Github, Linkedin, Code2, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactLink {
  icon: any;
  label: string;
  value: string;
  url: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'anirudhan.m004@gmail.com',
    url: 'mailto:anirudhan.m004@gmail.com',
  },
  {
    icon: Phone,
    label: 'PHONE',
    value: '+91 7975865113',
    url: 'tel:+917975865113',
  },
  {
    icon: Github,
    label: 'GITHUB',
    value: 'github.com/anirudh-svg',
    url: 'https://github.com/anirudh-svg',
  },
  {
    icon: Linkedin,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/m-anirudhan',
    url: 'https://www.linkedin.com/in/m-anirudhan-33a6612aa/',
  },
  {
    icon: Code2,
    label: 'LEETCODE',
    value: 'leetcode.com/u/Anirudh404',
    url: 'https://leetcode.com/u/Anirudh404/',
  },
  {
    icon: MapPin,
    label: 'LOCATION',
    value: 'Bangalore, Karnataka, India',
    url: 'https://maps.google.com/?q=Bangalore,Karnataka,India',
  },
];

export function ContactSection() {
  return (
    <div className="space-y-6">
      <div className="text-cyan-300 text-sm">
        <div>#!/bin/bash</div>
        <div className="text-cyan-600"># contact.sh - Contact Information</div>
        <div className="mt-4">echo "Establishing connection..."</div>
      </div>

      <div className="border-t border-cyan-400/30 pt-4">
        <div className="text-green-400 mb-4">CONTACT INFORMATION</div>
        <div className="grid grid-cols-1 gap-3">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 border border-cyan-400/30 rounded hover:border-cyan-400 hover:bg-cyan-400/10 transition-all group"
            >
              <div className="p-2 bg-cyan-400/20 rounded group-hover:bg-cyan-400/30 transition-colors">
                <link.icon size={20} className="text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-cyan-600">{link.label}</div>
                <div className="text-cyan-300">{link.value}</div>
              </div>
              <div className="text-cyan-600 group-hover:text-cyan-400 transition-colors">
                →
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="border-t border-cyan-400/30 pt-4 text-cyan-300/60 text-sm space-y-2">
        <div>NAME: M Anirudhan</div>
        <div>ROLE: AI Engineer & Full-Stack Developer</div>
        <div>AVAILABILITY: Open to opportunities</div>
        <div>RESPONSE_TIME: Within 24 hours</div>
        <div>PREFERRED_CONTACT: Email</div>
      </div>

      <div className="text-cyan-300 text-sm mt-4">
        <div>echo "Connection established"</div>
      </div>
    </div>
  );
}
