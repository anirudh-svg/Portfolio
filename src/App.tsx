import { useState, useEffect } from "react";
import { Terminal } from "./components/Terminal";
import { LoadingScreen } from "./components/LoadingScreen";
import { Desktop } from "./components/Desktop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showDesktop, setShowDesktop] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    // Update document title based on state
    if (isLoading) {
      document.title = "Loading... | Anirudhan Portfolio";
    } else if (showDesktop) {
      document.title = "Desktop | Anirudhan Portfolio";
    } else if (showTerminal) {
      document.title =
        "anirudhan@portfolio:~$ | Terminal Portfolio";
    }
  }, [isLoading, showDesktop, showTerminal]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleOpenTerminal = () => {
    setShowDesktop(false);
    setShowTerminal(true);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (showDesktop) {
    return <Desktop onOpenTerminal={handleOpenTerminal} />;
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Terminal />
      </div>
    </div>
  );
}