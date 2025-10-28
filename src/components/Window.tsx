import { X, Minus, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  isActive: boolean;
  onFocus: () => void;
  initialPosition?: { x: number; y: number };
}

export default function Window({
  title,
  children,
  onClose,
  onMinimize,
  isActive,
  onFocus,
  initialPosition = { x: 100, y: 100 },
}: WindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    onFocus();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useState(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  });

  return (
    <div
      className={`fixed bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-700/50 overflow-hidden transition-all duration-200 ${
        isActive ? 'ring-2 ring-blue-500/50' : ''
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '600px',
        maxHeight: '70vh',
        zIndex: isActive ? 50 : 10,
      }}
      onClick={onFocus}
    >
      <div
        className="bg-gray-800/90 px-4 py-3 flex items-center justify-between cursor-move border-b border-gray-700/50"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-2 window-controls">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            />
            <button
              onClick={onMinimize}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
            />
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
          </div>
          <span className="text-sm text-gray-300 ml-3 font-mono">{title}</span>
        </div>
        <div className="flex gap-2 window-controls">
          <button
            onClick={onMinimize}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <Minus size={16} />
          </button>
          <button className="text-gray-400 hover:text-gray-200 transition-colors">
            <Maximize2 size={16} />
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(70vh - 52px)' }}>
        {children}
      </div>
    </div>
  );
}
