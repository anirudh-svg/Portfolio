import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Check, Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const PIPELINE_STAGES = [
  { name: 'Source', delay: 0.5, duration: 1.2 },
  { name: 'Build', delay: 1.7, duration: 1.5 },
  { name: 'Test', delay: 3.2, duration: 1.3 },
  { name: 'Package', delay: 4.5, duration: 1.2 },
  { name: 'Deploy', delay: 5.7, duration: 1.5 },
];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [currentStage, setCurrentStage] = useState<number>(-1);

  useEffect(() => {
    PIPELINE_STAGES.forEach((stage, index) => {
      // Start stage
      setTimeout(() => {
        setCurrentStage(index);
      }, stage.delay * 1000);

      // Complete stage
      setTimeout(() => {
        setCompletedStages((prev) => [...prev, index]);
        if (index === PIPELINE_STAGES.length - 1) {
          // All stages complete, wait a bit then transition
          setTimeout(() => {
            onComplete();
          }, 800);
        }
      }, (stage.delay + stage.duration) * 1000);
    });
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(34 197 94 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(34 197 94 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 px-4 max-w-5xl w-full">
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-green-400 mb-4"
          >
            Welcome to M Anirudhan's Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-green-300/80 text-xl"
          >
            AI Engineer & Full-Stack Developer
          </motion.p>
        </motion.div>

        {/* CI/CD Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl"
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {PIPELINE_STAGES.map((stage, index) => (
              <div key={stage.name} className="flex items-center">
                {/* Stage Box */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: stage.delay }}
                  className="relative"
                >
                  <div
                    className={`
                      px-6 py-4 rounded-lg border-2 transition-all duration-500 min-w-[140px] text-center
                      ${completedStages.includes(index)
                        ? 'bg-green-500/20 border-green-400 shadow-lg shadow-green-400/50'
                        : currentStage === index
                        ? 'bg-yellow-500/20 border-yellow-400 shadow-lg shadow-yellow-400/50 animate-pulse'
                        : 'bg-gray-800/50 border-gray-600'
                      }
                    `}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {completedStages.includes(index) ? (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        >
                          <Check size={18} className="text-green-400" />
                        </motion.div>
                      ) : currentStage === index ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Loader2 size={18} className="text-yellow-400" />
                        </motion.div>
                      ) : (
                        <div className="w-[18px]" />
                      )}
                      <span
                        className={`transition-colors duration-500 ${
                          completedStages.includes(index)
                            ? 'text-green-400'
                            : currentStage === index
                            ? 'text-yellow-400'
                            : 'text-gray-500'
                        }`}
                      >
                        {stage.name}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar under active stage */}
                  {currentStage === index && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400/30 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="h-full bg-yellow-400"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: stage.duration, ease: 'linear' }}
                      />
                    </motion.div>
                  )}
                </motion.div>

                {/* Arrow between stages */}
                {index < PIPELINE_STAGES.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: stage.delay + 0.3, duration: 0.5 }}
                    className="flex items-center mx-2"
                  >
                    <div className="flex items-center">
                      <div
                        className={`h-0.5 w-8 transition-colors duration-500 ${
                          completedStages.includes(index) ? 'bg-green-400' : 'bg-gray-600'
                        }`}
                      />
                      <div
                        className={`w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent transition-colors duration-500 ${
                          completedStages.includes(index) ? 'border-l-green-400' : 'border-l-gray-600'
                        }`}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Status text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <p className="text-green-400/70 text-sm font-mono">
              {completedStages.length === PIPELINE_STAGES.length
                ? '✓ Pipeline complete - Initializing terminal...'
                : currentStage >= 0
                ? `Running: ${PIPELINE_STAGES[currentStage]?.name}...`
                : 'Starting CI/CD pipeline...'}
            </p>
          </motion.div>
        </motion.div>

        {/* Glowing orbs for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </div>
  );
}
