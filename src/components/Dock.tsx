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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl px-3 py-2 border border-gray-700/50 shadow-2xl">
        <div className="flex items-center gap-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className="group relative p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 hover:scale-110"
              title={item.label}
            >
              <div className="text-gray-300 group-hover:text-blue-400 transition-colors">
                {item.icon}
              </div>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-mono">
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
