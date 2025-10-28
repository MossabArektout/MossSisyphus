import { useState, useEffect } from 'react';
import Window from './components/Window';
import Terminal from './components/Terminal';
import CommandPalette from './components/CommandPalette';
import Dock, { Folder, Terminal as TerminalIcon, Mail, Github, Linkedin, User, Briefcase } from './components/Dock';
import { Activity } from 'lucide-react';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import ExperienceSection from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Performance from './components/sections/Performance';

interface WindowState {
  id: string;
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  position: { x: number; y: number };
}

function App() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [nextZIndex, setNextZIndex] = useState(10);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      } else if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openWindow = (id: string, title: string, content: React.ReactNode) => {
    const existingWindow = windows.find((w) => w.id === id);

    if (existingWindow) {
      if (existingWindow.isMinimized) {
        setWindows((prev) =>
          prev.map((w) =>
            w.id === id ? { ...w, isMinimized: false, zIndex: nextZIndex } : w
          )
        );
        setActiveWindow(id);
        setNextZIndex((prev) => prev + 1);
      } else {
        setActiveWindow(id);
        setWindows((prev) =>
          prev.map((w) => (w.id === id ? { ...w, zIndex: nextZIndex } : w))
        );
        setNextZIndex((prev) => prev + 1);
      }
      return;
    }

    const offset = windows.length * 30;
    const newWindow: WindowState = {
      id,
      title,
      content,
      isOpen: true,
      isMinimized: false,
      zIndex: nextZIndex,
      position: { x: 100 + offset, y: 100 + offset },
    };

    setWindows((prev) => [...prev, newWindow]);
    setActiveWindow(id);
    setNextZIndex((prev) => prev + 1);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const focusWindow = (id: string) => {
    setActiveWindow(id);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: nextZIndex } : w))
    );
    setNextZIndex((prev) => prev + 1);
  };

  const handleTerminalCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    if (cmd === 'about') {
      openWindow('about', 'about.txt', <About />);
    } else if (cmd === 'projects') {
      openWindow('projects', 'projects/', <Projects />);
    } else if (cmd === 'experience') {
      openWindow('experience', 'experience.log', <ExperienceSection />);
    } else if (cmd === 'contact') {
      openWindow('contact', 'contact.sh', <Contact />);
    } else if (cmd === 'cv' || cmd === 'stats') {
      openWindow('cv', 'cv', <Performance />);
    }
  };

  const commands = [
    { id: 'about', label: 'Open About', action: () => openWindow('about', 'about.txt', <About />) },
    { id: 'projects', label: 'Open Projects', action: () => openWindow('projects', 'projects/', <Projects />) },
    { id: 'experience', label: 'Open Experience', action: () => openWindow('experience', 'experience.log', <ExperienceSection />) },
    { id: 'cv', label: 'Open cv', action: () => openWindow('cv', 'cv', <Performance />) },
    { id: 'contact', label: 'Open Contact', action: () => openWindow('contact', 'contact.sh', <Contact />) },
    { id: 'terminal', label: 'Open Terminal', action: () => openWindow('terminal', 'terminal', <Terminal onCommand={handleTerminalCommand} />) },
  ];

  const dockItems = [
    { id: 'about', icon: <User size={24} />, label: 'About', onClick: () => openWindow('about', 'about.txt', <About />) },
    { id: 'projects', icon: <Folder size={24} />, label: 'Projects', onClick: () => openWindow('projects', 'projects/', <Projects />) },
    { id: 'experience', icon: <Briefcase size={24} />, label: 'Experience', onClick: () => openWindow('experience', 'experience.log', <ExperienceSection />) },
    { id: 'cv', icon: <Activity size={24} />, label: 'CV', onClick: () => openWindow('cv', 'cv', <Performance />) },
    { id: 'terminal', icon: <TerminalIcon size={24} />, label: 'Terminal', onClick: () => openWindow('terminal', 'terminal', <Terminal onCommand={handleTerminalCommand} />) },
    { id: 'contact', icon: <Mail size={24} />, label: 'Contact', onClick: () => openWindow('contact', 'contact.sh', <Contact />) },
    { id: 'github', icon: <Github size={24} />, label: 'GitHub', onClick: () => window.open('https://github.com/MossabArektout', '_blank') },
    { id: 'linkedin', icon: <Linkedin size={24} />, label: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/in/mossab-arektout/', '_blank') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1NSwgNjUsIDgxLCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

      {/* Header */}
      <header className="relative z-10 bg-gray-900/50 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-gray-300 font-mono text-sm">Mossab Arektout</span>
          </div>
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50 text-gray-400 hover:text-gray-200 hover:border-blue-500/50 transition-all duration-200 font-mono text-sm"
          >
            <span>Command Palette</span>
            <kbd className="px-2 py-0.5 bg-gray-700 rounded text-xs">⌘K</kbd>
          </button>
        </div>
      </header>

      {/* Windows */}
      <main className="relative z-10">
        {windows.map(
          (window) =>
            !window.isMinimized && (
              <Window
                key={window.id}
                id={window.id}
                title={window.title}
                onClose={() => closeWindow(window.id)}
                onMinimize={() => minimizeWindow(window.id)}
                isActive={activeWindow === window.id}
                onFocus={() => focusWindow(window.id)}
                initialPosition={window.position}
              >
                {window.content}
              </Window>
            )
        )}
      </main>

      {/* Dock */}
      <Dock items={dockItems} />

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        commands={commands}
      />

      {/* Centered Hero Section (Name + Image) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-12 pointer-events-none">
        {/* Left Text */}
        <div className="text-right">
          <h1 className="text-6xl font-bold text-white-700/20 mb-4">Mossab Arektout</h1>
          <p className="text-xl text-white-100/20 font-mono">
            Software Engineering Student | AI Enthusiast
          </p>
        </div>

        {/* Right Image */}
        <div className="w-52 h-52 rounded-full overflow-hidden shadow-2xl border-2 border-gray-700/20 animate-fadeIn">
          <img
            src="mossab.png"
            alt="Mossab Arektout"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
