import { Folder, Terminal, Mail, Github, Linkedin, User, Briefcase } from 'lucide-react';

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface DockProps {
  items: DockItem[];
}

export default function Dock({ items }: DockProps) {
  return (
    <div className="fixed bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <div className="bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 border border-gray-700/50 shadow-2xl overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className="group relative p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl hover:bg-gray-800/50 active:bg-gray-800/70 transition-all duration-200 hover:scale-110 active:scale-95 flex-shrink-0 touch-manipulation"
              title={item.label}
              aria-label={item.label}
            >
              <div className="text-gray-300 group-hover:text-blue-400 group-active:text-blue-500 transition-colors scale-75 sm:scale-90 md:scale-100">
                {item.icon}
              </div>
              <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono hidden sm:block">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Folder, Terminal, Mail, Github, Linkedin, User, Briefcase };
