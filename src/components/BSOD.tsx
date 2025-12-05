import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface BSODProps {
  onComplete: () => void;
}

export function BSOD({ onComplete }: BSODProps) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Animate dots
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    // Auto complete after 5 seconds
    const timeout = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-blue-700 z-50 flex items-center justify-center p-8"
    >
      <div className="max-w-3xl w-full space-y-8 font-mono text-white">
        <div className="space-y-4">
          <h1 className="text-4xl">A problem has been detected and Windows has been shut down to prevent damage to your portfolio.</h1>
          
          <div className="space-y-2 text-sm">
            <p>WINDOWS_IS_NOT_AS_GOOD_AS_LINUX</p>
            
            <p className="mt-4">If this is the first time you've seen this stop error screen, restart your terminal. If this screen appears again, follow these steps:</p>
            
            <p className="mt-4">Check to make sure you're using a proper operating system. If you are, try switching to Linux.</p>
            
            <p className="mt-4">If problems continue, disable or remove any newly installed Windows features. Disable BIOS memory options such as using Windows instead of Linux. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode (or just use Linux).</p>
          </div>

          <div className="mt-8">
            <p>Technical information:</p>
            <p className="mt-2">*** STOP: 0x00000001 (0xDEADBEEF, 0xCAFEBABE, 0x8BADF00D, 0xC0FFEE)</p>
          </div>

          <div className="mt-8">
            <p>Rebooting to Linux mode{dots}</p>
          </div>
        </div>

        <div className="h-4 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            className="h-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
}
