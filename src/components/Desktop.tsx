import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  Terminal as TerminalIcon,
  Folder,
  File,
  X,
  Cpu,
  HardDrive,
  Monitor,
  BarChart3,
} from "lucide-react";
import wallpaper from "figma:asset/d9ccc31d703eb252ded66f4ec4e5cdf80df29d47.png";

interface DesktopProps {
  onOpenTerminal: () => void;
}

export function Desktop({ onOpenTerminal }: DesktopProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(
    null,
  );
  const [time, setTime] = useState(new Date());
  const [showMyComputer, setShowMyComputer] = useState(false);
  const [showMyDocuments, setShowMyDocuments] = useState(false);
  const [showStats, setShowStats] = useState(false);

  // Update time every second for Kolkata timezone
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    return time.toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = () => {
    return time.toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Windows XP Bliss Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${wallpaper}')`,
        }}
      />

      {/* Desktop Icons */}
      <div className="relative z-10 p-4 md:p-6 grid grid-cols-1 gap-4 md:gap-6 w-fit">
        {/* Portfolio Terminal Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          }}
          onMouseEnter={() => setHoveredIcon("portfolio")}
          onMouseLeave={() => setHoveredIcon(null)}
          onDoubleClick={onOpenTerminal}
          className={`
            flex flex-col items-center gap-2 p-3 md:p-4 rounded cursor-pointer
            transition-all duration-200 w-24 md:w-32
            ${hoveredIcon === "portfolio" ? "bg-blue-500/30" : "bg-transparent"}
          `}
        >
          <div className="relative">
            <div
              className={`
              p-3 md:p-4 rounded-lg transition-all duration-200
              ${hoveredIcon === "portfolio" ? "bg-white/20 shadow-lg" : "bg-white/10"}
            `}
            >
              <TerminalIcon
                size={40}
                className="text-white md:w-12 md:h-12"
              />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 md:w-12 h-2 bg-black/20 blur-sm rounded-full" />
          </div>
          <span
            className={`
            text-white text-xs md:text-sm text-center px-2 py-1 rounded
            ${hoveredIcon === "portfolio" ? "bg-blue-800" : "bg-transparent"}
            shadow-sm
          `}
          >
            Portfolio
          </span>
        </motion.div>

        {/* My Computer Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 200,
          }}
          onMouseEnter={() => setHoveredIcon("computer")}
          onMouseLeave={() => setHoveredIcon(null)}
          onDoubleClick={() => setShowMyComputer(true)}
          className={`
            flex flex-col items-center gap-2 p-3 md:p-4 rounded cursor-pointer
            transition-all duration-200 w-24 md:w-32
            ${hoveredIcon === "computer" ? "bg-blue-500/30" : "bg-transparent"}
          `}
        >
          <div className="relative">
            <div
              className={`
              p-3 md:p-4 rounded-lg transition-all duration-200
              ${hoveredIcon === "computer" ? "bg-white/20 shadow-lg" : "bg-white/10"}
            `}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-12 md:h-12"
              >
                <path
                  d="M20 13H4V6H20V13Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 13V17H16V13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 17H18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 md:w-12 h-2 bg-black/20 blur-sm rounded-full" />
          </div>
          <span
            className={`
            text-white text-xs md:text-sm text-center px-2 py-1 rounded
            ${hoveredIcon === "computer" ? "bg-blue-800" : "bg-transparent"}
            shadow-sm
          `}
          >
            My Computer
          </span>
        </motion.div>

        {/* My Documents Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 200,
          }}
          onMouseEnter={() => setHoveredIcon("documents")}
          onMouseLeave={() => setHoveredIcon(null)}
          onDoubleClick={() => setShowMyDocuments(true)}
          className={`
            flex flex-col items-center gap-2 p-3 md:p-4 rounded cursor-pointer
            transition-all duration-200 w-24 md:w-32
            ${hoveredIcon === "documents" ? "bg-blue-500/30" : "bg-transparent"}
          `}
        >
          <div className="relative">
            <div
              className={`
              p-3 md:p-4 rounded-lg transition-all duration-200
              ${hoveredIcon === "documents" ? "bg-white/20 shadow-lg" : "bg-white/10"}
            `}
            >
              <Folder
                size={40}
                className="text-yellow-300 md:w-12 md:h-12"
              />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 md:w-12 h-2 bg-black/20 blur-sm rounded-full" />
          </div>
          <span
            className={`
            text-white text-xs md:text-sm text-center px-2 py-1 rounded
            ${hoveredIcon === "documents" ? "bg-blue-800" : "bg-transparent"}
            shadow-sm
          `}
          >
            My Documents
          </span>
        </motion.div>
      </div>

      {/* Stats Icon - Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 200,
        }}
        onMouseEnter={() => setHoveredIcon("stats")}
        onMouseLeave={() => setHoveredIcon(null)}
        onDoubleClick={() => setShowStats(true)}
        className={`
          absolute top-4 md:top-6 right-4 md:right-6 z-10
          flex flex-col items-center gap-2 p-3 md:p-4 rounded cursor-pointer
          transition-all duration-200 w-24 md:w-32
          ${hoveredIcon === "stats" ? "bg-blue-500/30" : "bg-transparent"}
        `}
      >
        <div className="relative">
          <div
            className={`
            p-3 md:p-4 rounded-lg transition-all duration-200
            ${hoveredIcon === "stats" ? "bg-white/20 shadow-lg" : "bg-white/10"}
          `}
          >
            <BarChart3
              size={40}
              className="text-white md:w-12 md:h-12"
            />
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 md:w-12 h-2 bg-black/20 blur-sm rounded-full" />
        </div>
        <span
          className={`
          text-white text-xs md:text-sm text-center px-2 py-1 rounded
          ${hoveredIcon === "stats" ? "bg-blue-800" : "bg-transparent"}
          shadow-sm
        `}
        >
          Stats
        </span>
      </motion.div>

      {/* Welcome Text - Centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 text-center pointer-events-none px-4"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 md:px-8 py-4 md:py-6 shadow-2xl border border-white/20">
          <h2 className="text-white text-lg md:text-2xl">
            Welcome, double click on icon
          </h2>
        </div>
      </motion.div>

      {/* My Computer Window */}
      <AnimatePresence>
        {showMyComputer && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[90vw] bg-white rounded-lg shadow-2xl z-50"
          >
            {/* Window Title Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu size={16} />
                <span className="text-sm">
                  My Computer - System Information
                </span>
              </div>
              <button
                onClick={() => setShowMyComputer(false)}
                className="hover:bg-red-500 p-1 rounded transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Window Content */}
            <div className="p-6 space-y-4 text-sm">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded border border-blue-200">
                <Monitor className="text-blue-600" size={32} />
                <div>
                  <div className="font-semibold text-blue-900">
                    Computer Name
                  </div>
                  <div className="text-blue-700">
                    ANIRUDHAN-PORTFOLIO-PC
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <Cpu className="text-purple-600" size={20} />
                  <div className="flex-1">
                    <div className="text-gray-600">
                      Processor
                    </div>
                    <div className="font-mono">
                      Intel Core Coffee++ @ 420.69 GHz
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <HardDrive
                    className="text-green-600"
                    size={20}
                  />
                  <div className="flex-1">
                    <div className="text-gray-600">RAM</div>
                    <div className="font-mono">
                      69 GB DDR5 (Definitely Dedicated RAM)
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-orange-600"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      strokeWidth="2"
                    />
                    <path d="M8 21h8" strokeWidth="2" />
                    <path d="M12 17v4" strokeWidth="2" />
                  </svg>
                  <div className="flex-1">
                    <div className="text-gray-600">
                      Graphics
                    </div>
                    <div className="font-mono">
                      NVIDIA GeForce RTX 9090 Ti Super Ultra
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <HardDrive
                    className="text-blue-600"
                    size={20}
                  />
                  <div className="flex-1">
                    <div className="text-gray-600">Storage</div>
                    <div className="font-mono">
                      1 PB SSD (Pretty Big Storage)
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-red-600"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      strokeWidth="2"
                    />
                    <path d="M12 6v6l4 2" strokeWidth="2" />
                  </svg>
                  <div className="flex-1">
                    <div className="text-gray-600">Uptime</div>
                    <div className="font-mono">
                      420 days, 69 hours (Never sleeps!)
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center text-xs text-gray-500 pt-2 border-t">
                Running on Windows XP Professional Edition
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* My Documents Window */}
      <AnimatePresence>
        {showMyDocuments && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[90vw] bg-white rounded-lg shadow-2xl z-50"
          >
            {/* Window Title Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Folder size={16} />
                <span className="text-sm">My Documents</span>
              </div>
              <button
                onClick={() => setShowMyDocuments(false)}
                className="hover:bg-red-500 p-1 rounded transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Window Content */}
            <div className="p-6 space-y-2 text-sm max-h-[60vh] overflow-y-auto">
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <File className="text-blue-600" size={20} />
                <span>how_to_exit_vim.txt</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <File className="text-green-600" size={20} />
                <span>definitely_not_memes.jpg</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <File className="text-red-600" size={20} />
                <span>
                  backup_of_backup_of_backup_FINAL_v2.docx
                </span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <Folder className="text-yellow-600" size={20} />
                <span>New Folder (23)</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <File className="text-purple-600" size={20} />
                <span>TODO_list_from_2019.txt</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <File className="text-orange-600" size={20} />
                <span>passwords_totally_secure.txt</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <File className="text-blue-600" size={20} />
                <span>why_my_code_doesnt_work.pdf</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <File className="text-green-600" size={20} />
                <span>stack_overflow_saved_my_life.html</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <Folder className="text-yellow-600" size={20} />
                <span>Totally_Important_Work_Files</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <File className="text-red-600" size={20} />
                <span>resume_v47_final_ACTUALLY_FINAL.pdf</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <File className="text-purple-600" size={20} />
                <span>coffee_recipes_for_debugging.txt</span>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded cursor-pointer">
                <File className="text-blue-600" size={20} />
                <span>git_commands_i_always_forget.md</span>
              </div>
            </div>

            <div className="px-6 py-3 border-t text-xs text-gray-500">
              12 items (All very important, definitely not
              random)
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Window */}
      <AnimatePresence>
        {showStats && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[95vw] bg-white rounded-lg shadow-2xl z-50"
          >
            {/* Window Title Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 size={16} />
                <span className="text-sm">
                  Activity Heatmaps - GitHub & LeetCode
                </span>
              </div>
              <button
                onClick={() => setShowStats(false)}
                className="hover:bg-red-500 p-1 rounded transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Window Content */}
            <div className="p-4 md:p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {/* GitHub Stats */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-800"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <h3 className="font-semibold text-gray-800">
                    GitHub Contributions
                  </h3>
                  <a
                    href="https://github.com/anirudh-svg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    View Profile →
                  </a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
                  <img
                    src="https://ghchart.rshah.org/409ba5/anirudh-svg"
                    alt="GitHub Contribution Graph"
                    className="w-full max-w-full"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-lg border border-purple-200">
                    <div className="text-xs text-purple-700 mb-1">
                      Total Commits
                    </div>
                    <div className="text-lg font-mono text-purple-900">
                      Live
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200">
                    <div className="text-xs text-blue-700 mb-1">
                      Repositories
                    </div>
                    <div className="text-lg font-mono text-blue-900">
                      Auto
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg border border-green-200">
                    <div className="text-xs text-green-700 mb-1">
                      Current Streak
                    </div>
                    <div className="text-lg font-mono text-green-900">
                      Updated
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 rounded-lg border border-orange-200">
                    <div className="text-xs text-orange-700 mb-1">
                      Contributions
                    </div>
                    <div className="text-lg font-mono text-orange-900">
                      Real-time
                    </div>
                  </div>
                </div>
              </div>

              {/* LeetCode Stats */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-orange-600"
                  >
                    <path
                      d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"
                      fill="#FFA116"
                    />
                  </svg>
                  <h3 className="font-semibold text-gray-800">
                    LeetCode Stats
                  </h3>
                  <a
                    href="https://leetcode.com/u/Anirudh404/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-orange-600 hover:text-orange-700 hover:underline"
                  >
                    View Profile →
                  </a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <img
                    src="https://leetcard.jacoblin.cool/Anirudh404?theme=light&font=Noto%20Sans&ext=heatmap"
                    alt="LeetCode Stats"
                    className="w-full max-w-full rounded"
                  />
                </div>
              </div>

              {/* Combined Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Live updating stats from GitHub and LeetCode
                  </p>
                  <p className="text-xs text-gray-500">
                    Data refreshes automatically when you open
                    this window
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Taskbar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-600 to-blue-700 border-t-2 border-blue-400 shadow-xl"
      >
        <div className="h-full flex items-center justify-between px-2">
          {/* Start Button */}
          <button className="flex items-center gap-2 px-4 py-1.5 bg-green-600 hover:bg-green-500 rounded shadow-md transition-colors border border-green-700">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
            <span className="text-white font-semibold">
              Start
            </span>
          </button>

          {/* Taskbar Icons */}
          <div className="flex items-center gap-2 flex-1 ml-2">
            {/* Running apps would appear here */}
          </div>

          {/* System Tray */}
          <div className="flex items-center gap-3 bg-blue-500/30 px-3 py-1 rounded">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="text-white text-xs font-medium text-right">
              <div>{formatTime()}</div>
              <div className="text-[10px] opacity-80">
                {formatDate()}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hint for mobile users */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 text-center pointer-events-none"
      >
        <div className="bg-black/60 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
          <p className="text-white text-sm">
            Tap any icon twice to open
          </p>
        </div>
      </motion.div>
    </div>
  );
}