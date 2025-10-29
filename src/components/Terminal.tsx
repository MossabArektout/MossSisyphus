import { useState, useRef, useEffect } from 'react';

interface TerminalProps {
  onCommand: (command: string) => void;
}

export default function Terminal({ onCommand }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Welcome to Mossab\'s Portfolio Terminal',
    'Type "help" for available commands',
    '',
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [...history, `$ ${input}`];

    const cmd = input.toLowerCase().trim();

    if (cmd === 'help') {
      newHistory.push(
        'Available commands:',
        '  about       - View about me',
        '  projects    - View my projects',
        '  experience  - View my experience',
        '  cv          - View my cv',
        '  contact     - Get contact information',
        '  skills      - List my skills',
        '  ls          - List all sections',
        '  clear       - Clear terminal',
        ''
      );
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'ls') {
      newHistory.push(
        'about.txt  projects/  experience.log  cv  contact.sh  skills.json',
        ''
      );
    } else if (cmd === 'skills') {
      newHistory.push(
        'Programming:  Java, Python, C, PHP, SQL',
        'Databases:  MySQL, PostgreSQL, MongoDB, OracleDB',
        'Cloud & Devops: Oracle Cloud, Docker, Prometheus, Grafana, OpenTelemetry, CI/CD, Git',
        'Framework : Java EE, Spring Boot, Laravel, Flask',
        'AI/ML: TensorFlow, spaCy, openCV',
        ''
      );
    } else if (cmd === 'about' || cmd === 'projects' || cmd === 'experience' || cmd === 'contact' || cmd === 'cv' || cmd === 'stats') {
      onCommand(cmd);
      newHistory.push(`Opening ${cmd}...`, '');
    } else {
      newHistory.push(`Command not found: ${input}`, 'Type "help" for available commands', '');
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="h-full flex flex-col font-mono text-sm">
      <div
        ref={historyRef}
        className="flex-1 overflow-y-auto text-green-400 space-y-1 mb-4"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('$') ? 'text-blue-400' : ''}>
            {line}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span className="text-blue-400">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-green-400"
          autoFocus
        />
      </form>
    </div>
  );
}
