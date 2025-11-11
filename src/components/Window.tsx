import { X, Minus, Maximize2 } from 'lucide-react';
import { useState, useEffect } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Center windows on mobile, use initialPosition on desktop
  const defaultPosition = isMobile
    ? { x: window.innerWidth < 640 ? 10 : 20, y: 80 }
    : initialPosition;

  const [position, setPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Update position when switching between mobile/desktop
  useEffect(() => {
    if (isMobile) {
      setPosition({ x: window.innerWidth < 640 ? 10 : 20, y: 80 });
    }
  }, [isMobile]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    if (isMobile) return; // Disable dragging on mobile
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
      className={`fixed bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-700/50 overflow-hidden transition-all duration-200 w-[95vw] sm:w-[85vw] md:w-[600px] ${
        isActive ? 'ring-2 ring-blue-500/50' : ''
      }`}
      style={{
        left: isMobile ? (window.innerWidth < 640 ? '2.5vw' : '7.5vw') : (position.x < 10 ? '10px' : `${position.x}px`),
        top: position.y < 10 ? '10px' : `${position.y}px`,
        maxHeight: isMobile ? '80vh' : '70vh',
        zIndex: isActive ? 50 : 10,
      }}
      onClick={onFocus}
    >
      <div
        className={`bg-gray-800/90 px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-gray-700/50 ${
          isMobile ? 'cursor-default' : 'cursor-move'
        }`}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
          <div className="flex gap-1 sm:gap-2 window-controls">
            <button
              onClick={onClose}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            />
            <button
              onClick={onMinimize}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
            />
            <button className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
          </div>
          <span className="text-xs sm:text-sm text-gray-300 ml-1 sm:ml-3 font-mono truncate">{title}</span>
        </div>
        <div className="hidden sm:flex gap-2 window-controls">
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
      <div
        className="p-3 sm:p-4 md:p-6 overflow-y-auto text-sm sm:text-base"
        style={{ maxHeight: isMobile ? 'calc(80vh - 52px)' : 'calc(70vh - 52px)' }}
      >
        {children}
      </div>
    </div>
  );
}
