import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import sideA from 'figma:asset/37692a2c52dfb57aeb22d3318f7943c4b5faab6d.png';
import sideB from 'figma:asset/f098f4d1fdaf0f984f5cd27eb8787bd877425472.png';

export function CoinFlip() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="absolute top-6 right-6 z-50">
      <motion.div
        className="relative cursor-pointer select-none"
        style={{ 
          perspective: '1500px',
          width: '120px',
          height: '120px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setRotation(0);
        }}
        onMouseMove={(e) => {
          if (isHovered) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const centerX = rect.width / 2;
            const offsetX = (x - centerX) / centerX;
            // Continuous rotation based on mouse position
            setRotation(offsetX * 180);
          }
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
          animate={{
            rotateY: isHovered ? rotation : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
        >
          {/* Front Side - Outdoor Photo */}
          <motion.div
            className="absolute w-full h-full rounded-full overflow-hidden border-3 shadow-xl"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              willChange: 'transform',
            }}
            animate={{
              borderColor: isHovered ? 'rgba(34, 211, 238, 1)' : 'rgba(34, 211, 238, 0.6)',
              boxShadow: isHovered 
                ? '0 0 30px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 211, 238, 0.4)' 
                : '0 0 15px rgba(34, 211, 238, 0.5)',
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={sideA}
              alt="Profile"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </motion.div>

          {/* Back Side - Gaming Setup */}
          <motion.div
            className="absolute w-full h-full rounded-full overflow-hidden border-3 shadow-xl"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              willChange: 'transform',
            }}
            animate={{
              borderColor: isHovered ? 'rgba(168, 85, 247, 1)' : 'rgba(168, 85, 247, 0.6)',
              boxShadow: isHovered 
                ? '0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.4)' 
                : '0 0 15px rgba(168, 85, 247, 0.5)',
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={sideB}
              alt="Gaming Setup"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </motion.div>
        </motion.div>

        {/* Animated ring on hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: 1.3, 
                  opacity: [0, 0.5, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                style={{
                  border: '2px solid rgba(34, 211, 238, 0.6)',
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: 1.3, 
                  opacity: [0, 0.5, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 0.75,
                }}
                style={{
                  border: '2px solid rgba(168, 85, 247, 0.6)',
                }}
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="absolute top-full mt-3 right-0 bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-3 py-1.5 rounded-md text-xs whitespace-nowrap shadow-lg"
            style={{ 
              fontWeight: 500,
            }}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
              Two sides of my world
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
