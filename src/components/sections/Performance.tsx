import { Download, FileText, Languages, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function CVSection() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'french' | null>(null);

  const cvFiles = [
    {
      name: 'CV_English.pdf',
      language: 'english',
      label: 'English CV',
      description: 'Latest updated version in English',
      size: '245 KB',
      filePath: 'CV_English.pdf' // Update this path to your actual English CV file
    },
    {
      name: 'CV_Français.pdf',
      language: 'french',
      label: 'French CV',
      description: 'Dernière version mise à jour en Français',
      size: '248 KB',
      filePath: 'CV_Francais.pdf' // Update this path to your actual French CV file
    }
  ];

  const handleCVDownload = (language: 'english' | 'french', filePath: string, fileName: string) => {
    setSelectedLanguage(language);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset selection after a short delay to show feedback
    setTimeout(() => {
      setSelectedLanguage(null);
    }, 1000);
  };

  const openTerminal = () => {
    setIsTerminalOpen(true);
  };

  const closeTerminal = () => {
    setIsTerminalOpen(false);
    setSelectedLanguage(null);
  };

  // Close terminal on Escape key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeTerminal();
    }
  };

  return (
    <div className="text-gray-300 space-y-6 font-mono">
      <div className="flex items-center gap-3 mb-6">
        <FileText size={24} className="text-blue-400" />
        <h2 className="text-2xl font-bold text-blue-400">Curriculum Vitae</h2>
      </div>

      {/* Main CV Card */}
      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Terminal size={32} className="text-green-400" />
            <div>
              <h3 className="text-lg font-semibold text-gray-200">CV Terminal</h3>
              <p className="text-sm text-gray-400">Access downloadable CV versions</p>
            </div>
          </div>
          <button
            onClick={openTerminal}
            className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded text-blue-400 hover:bg-blue-500/30 transition-all duration-200 flex items-center gap-2"
          >
            <Terminal size={16} />
            Open Terminal
          </button>
        </div>

        <div className="bg-black/50 rounded p-4 border border-gray-600/50">
          <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>cv-terminal ready</span>
          </div>
          <p className="text-gray-400 text-sm">
            Execute <span className="text-blue-400">open-terminal</span> to access available CV versions for download.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 text-center">
          <Languages size={24} className="text-blue-400 mx-auto mb-2" />
          <div className="text-lg font-bold text-blue-400">2</div>
          <div className="text-xs text-gray-500 mt-1">Languages</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 text-center">
          <FileText size={24} className="text-green-400 mx-auto mb-2" />
          <div className="text-lg font-bold text-green-400">Latest</div>
          <div className="text-xs text-gray-500 mt-1">Versions</div>
        </div>
      </div>

      {/* Terminal Modal */}
      {isTerminalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="bg-gray-900 border border-gray-700 rounded-lg w-full max-w-2xl font-mono">
            {/* Terminal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800/50 rounded-t-lg">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-green-400" />
                <span className="text-gray-300">cv-download-terminal</span>
              </div>
              <button
                onClick={closeTerminal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-2 text-green-400">
                <span>➜</span>
                <span>~/cv-terminal</span>
                <span className="text-gray-400">$</span>
                <span className="text-blue-400">list-cv-files</span>
              </div>

              <div className="space-y-3">
                {cvFiles.map((file, index) => (
                  <div
                    key={file.language}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded border border-gray-700/50 hover:border-blue-500/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <FileText size={20} className="text-blue-400" />
                      <div>
                        <div className="text-gray-200 font-medium">{file.name}</div>
                        <div className="text-gray-400 text-sm">{file.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">{file.size}</span>
                      <button
                        onClick={() => handleCVDownload(file.language as 'english' | 'french', file.filePath, file.name)}
                        disabled={selectedLanguage !== null}
                        className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded text-green-400 hover:bg-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 text-sm"
                      >
                        {selectedLanguage === file.language ? (
                          <>
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download size={14} />
                            Download
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>➜</span>
                <span>~/cv-terminal</span>
                <span>$</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="p-3 border-t border-gray-700 bg-gray-800/30 text-xs text-gray-500 flex justify-between">
              <span>Press ESC to close</span>
              <span>CV Terminal v1.0</span>
            </div>
          </div>
        </div>
      )}

      {/* Download Status */}
      {selectedLanguage && (
        <div className="fixed bottom-4 right-4 bg-gray-800 border border-green-500/50 rounded-lg p-4 shadow-lg z-40">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm">
              Downloading {selectedLanguage === 'english' ? 'English' : 'French'} CV...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}