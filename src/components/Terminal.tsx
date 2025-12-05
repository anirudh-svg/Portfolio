import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TerminalSquare, ChevronRight, X, Maximize2 } from 'lucide-react';
import { AppWindow } from './AppWindow';
import { CoinFlip } from './CoinFlip';
import { BSOD } from './BSOD';

interface Command {
  input: string;
  output: string[];
  timestamp: string;
}

interface OpenApp {
  id: string;
  command: string;
  title: string;
}

const AVAILABLE_COMMANDS = {
  help: [
    'Available commands:',
    '  about        - Learn more about me',
    '  skills       - View my technical skills',
    '  projects     - See my projects',
    '  experience   - View my work experience',
    '  education    - View my educational background',
    '  contact      - Get in touch',
    '  achievements - View my achievements',
    '  quote        - Get inspired with a tech quote',
    '  whoami       - Find out who you are',
    '  sudo         - Try to get superpowers',
    '  close        - Close the most recent window',
    '  clear        - Clear terminal (or use Ctrl+L)',
    '  help         - Show this help message',
  ],
};

export function Terminal() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [openApps, setOpenApps] = useState<OpenApp[]>([]);
  const [commandCount, setCommandCount] = useState(0);
  const [showBSOD, setShowBSOD] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addCommand = useCallback((input: string, output: string[]) => {
    const timestamp = new Date().toLocaleTimeString();
    setCommands((prev) => [...prev, { input, output, timestamp }]);
  }, []);

  useEffect(() => {
    // Cursor blink effect
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commands]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      // Ctrl+L to clear terminal
      if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        setCommands([]);
        setCurrentInput('');
      }
      // ESC to close last window
      if (e.key === 'Escape' && openApps.length > 0) {
        const lastApp = openApps[openApps.length - 1];
        closeApp(lastApp.id);
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [openApps]);

  const handleBSODComplete = useCallback(() => {
    setShowBSOD(false);
    setCommands([]);
    setCommandCount(0);
    setOpenApps([]);
    // Add welcome back message
    setTimeout(() => {
      setCommands([{
        input: 'system',
        output: [
          '',
          '=========================================',
          '  TERMINAL RESTORED',
          '=========================================',
          '',
          'Sorry about that crash...',
          'Turns out Windows isn\'t as stable as Linux.',
          '',
          'System has been migrated to Linux kernel.',
          'You may now continue with confidence.',
          '',
          'Type "help" to see available commands.',
          '',
        ],
      }]);
    }, 300);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim() || isTyping) return;

    const input = currentInput.trim().toLowerCase();
    let output: string[];

    if (input === 'clear') {
      setCommands([]);
      setCurrentInput('');
      return;
    }

    // Close command - closes the most recent window
    if (input === 'close') {
      if (openApps.length > 0) {
        const lastApp = openApps[openApps.length - 1];
        closeApp(lastApp.id);
        addCommand(currentInput, [`Closed ${lastApp.title}`]);
      } else {
        addCommand(currentInput, ['No windows to close.']);
      }
      setCurrentInput('');
      return;
    }

    // Quote command
    if (input === 'quote') {
      const quotes = [
        '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
        '"First, solve the problem. Then, write the code." - John Johnson',
        '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
        '"The best way to predict the future is to invent it." - Alan Kay',
        '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
        '"Programming isn\'t about what you know; it\'s about what you can figure out." - Chris Pine',
        '"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie',
        '"Simplicity is the soul of efficiency." - Austin Freeman',
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      addCommand(currentInput, ['', randomQuote, '']);
      setCurrentInput('');
      
      // Increment command count
      const newCount = commandCount + 1;
      setCommandCount(newCount);
      if (newCount >= 7) {
        setTimeout(() => setShowBSOD(true), 500);
      }
      return;
    }

    // whoami Easter egg
    if (input === 'whoami') {
      addCommand(currentInput, [
        '',
        '#!/bin/bash',
        '# Identity Resolution Script',
        '',
        'echo "You are: A Curious Visitor"',
        'echo "Location: Anirudhan\'s Portfolio Terminal"',
        'echo "Permission Level: Guest (read-only)"',
        'echo "Fun Fact: You have excellent taste in portfolios!"',
        '',
        '# System says: Welcome aboard!',
        '',
      ]);
      setCurrentInput('');
      
      // Increment command count
      const newCount = commandCount + 1;
      setCommandCount(newCount);
      if (newCount >= 7) {
        setTimeout(() => setShowBSOD(true), 500);
      }
      return;
    }

    // sudo Easter egg
    if (input.startsWith('sudo ')) {
      const attemptedCommand = input.substring(5);
      addCommand(currentInput, [
        '',
        '[sudo] password for guest: ',
        'Sorry, user guest is not in the sudoers file.',
        'This incident will be reported to Anirudhan.',
        '',
        'Nice try though!',
        `(You tried to run: ${attemptedCommand})`,
        '',
      ]);
      setCurrentInput('');
      
      // Increment command count
      const newCount = commandCount + 1;
      setCommandCount(newCount);
      if (newCount >= 7) {
        setTimeout(() => setShowBSOD(true), 500);
      }
      return;
    }

    if (input === 'sudo') {
      addCommand(currentInput, [
        'usage: sudo <command>',
        'Try \'sudo help\' for more disappointment.',
      ]);
      setCurrentInput('');
      
      // Increment command count
      const newCount = commandCount + 1;
      setCommandCount(newCount);
      if (newCount >= 7) {
        setTimeout(() => setShowBSOD(true), 500);
      }
      return;
    }

    // Commands that open apps
    const appCommands = ['about', 'skills', 'projects', 'contact', 'achievements', 'experience', 'education'];
    if (appCommands.includes(input)) {
      addCommand(currentInput, [`Opening ${input}...`]);
      setCurrentInput('');
      
      // Increment command count
      const newCount = commandCount + 1;
      setCommandCount(newCount);
      
      // Check if we should show BSOD
      if (newCount >= 7) {
        setTimeout(() => {
          setShowBSOD(true);
        }, 500);
        return;
      }
      
      // Open app window with delay for effect
      setTimeout(() => {
        const appId = Date.now().toString();
        const titles: Record<string, string> = {
          about: 'about.sh',
          skills: 'skills.sh',
          projects: 'projects.sh',
          contact: 'contact.sh',
          achievements: 'achievements.sh',
          experience: 'experience.sh',
          education: 'education.sh',
        };
        setOpenApps((prev) => [
          ...prev,
          { id: appId, command: input, title: titles[input] || input },
        ]);
      }, 300);
      return;
    }

    if (input in AVAILABLE_COMMANDS) {
      output = AVAILABLE_COMMANDS[input as keyof typeof AVAILABLE_COMMANDS];
    } else if (input === '') {
      setCurrentInput('');
      return;
    } else {
      output = [
        `Command not found: ${input}`,
        'Type "help" for available commands.',
      ];
    }

    setIsTyping(true);
    addCommand(currentInput, []);
    setCurrentInput('');

    // Simulate typing effect for output
    let currentLine = 0;
    const typingInterval = setInterval(() => {
      if (currentLine < output.length) {
        setCommands((prev) => {
          const newCommands = [...prev];
          const lastCommand = newCommands[newCommands.length - 1];
          lastCommand.output = output.slice(0, currentLine + 1);
          return newCommands;
        });
        currentLine++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);
  };

  const closeApp = (appId: string) => {
    setOpenApps((prev) => prev.filter((app) => app.id !== appId));
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-8 border-2 border-green-400 rounded-lg shadow-lg shadow-green-400/20"
      >
        {/* Terminal Header */}
        <div className="bg-green-400 text-black px-4 py-2 flex items-center gap-2">
          <TerminalSquare size={18} />
          <span>portfolio@terminal:~$</span>
          <div className="ml-auto flex gap-2">
            <div className="w-3 h-3 rounded-full bg-black/20"></div>
            <div className="w-3 h-3 rounded-full bg-black/20"></div>
            <div className="w-3 h-3 rounded-full bg-black/20"></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          onClick={focusInput}
          className="bg-black/90 p-6 pr-40 min-h-[400px] max-h-[600px] overflow-y-auto cursor-text relative"
        >
          {/* Coin Flip Component */}
          <CoinFlip />
          <AnimatePresence>
            {commands.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4"
              >
                {cmd.input !== 'welcome' && (
                  <div className="flex items-center gap-2 text-green-400">
                    <ChevronRight size={16} />
                    <span className="text-green-500">anirudhan@portfolio</span>
                    <span className="text-green-300">~</span>
                    <span>$ {cmd.input}</span>
                  </div>
                )}
                <div className="mt-1 ml-6 text-green-300/90">
                  {cmd.output.map((line, i) => (
                    <div key={i} className="leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Input Line */}
          <div className="flex items-center gap-2">
            <ChevronRight size={16} className="text-green-400" />
            <span className="text-green-500">anirudhan@portfolio</span>
            <span className="text-green-300">~</span>
            <span className="text-green-400">$</span>
            <form onSubmit={handleSubmit} className="flex-1">
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className="bg-transparent outline-none text-green-400 w-full caret-transparent"
                autoFocus
                disabled={isTyping}
                placeholder={!isTyping ? 'type "help" for commands...' : ''}
                style={{ 
                  caretColor: 'transparent',
                }}
              />
            </form>
            {showCursor && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-block w-2 h-5 bg-green-400 ml-1"
              />
            )}
          </div>
          <div ref={terminalEndRef} />
        </div>
      </motion.div>

      {/* App Windows */}
      <AnimatePresence>
        {openApps.map((app, index) => (
          <AppWindow
            key={app.id}
            app={app}
            index={index}
            onClose={() => closeApp(app.id)}
          />
        ))}
      </AnimatePresence>

      {/* BSOD */}
      <AnimatePresence mode="wait">
        {showBSOD && <BSOD key="bsod" onComplete={handleBSODComplete} />}
      </AnimatePresence>
    </>
  );
}