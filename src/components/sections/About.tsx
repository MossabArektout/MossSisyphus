import { Cpu, HardDrive, Zap, Code, Instagram, Linkedin, Github } from 'lucide-react';


export default function About() {
  return (
    <div className="text-gray-300 space-y-4 sm:space-y-6 font-mono">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">About Me</h2>
        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
          I'm a third-year Software Engineering student fascinated by the dance between system design, architecture, and AI. I thrive in the space where complex systems meet elegant solutions, and I'm constantly exploring how to turn ideas into software that not only works—but inspires.
          <br></br>
          <br></br>
          But I don't just live in code. I'm equally drawn to the world of business, trading, and creating value. Merging tech with entrepreneurial thinking fuels me: building software that solves problems and understands the market. My journey is about connecting logic with vision, code with commerce, and curiosity with impact.
        </p>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50 space-y-2 sm:space-y-3">
        <h3 className="text-base sm:text-lg text-green-400 mb-2 sm:mb-3">System Information</h3>

        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <Cpu size={16} className="text-blue-400 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
          <span className="text-gray-500 flex-shrink-0">CPU:</span>
          <span className="text-gray-300">Creative Mind v2.0</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <HardDrive size={16} className="text-purple-400 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
          <span className="text-gray-500 flex-shrink-0">OS:</span>
          <span className="text-gray-300">Software Engineer</span>
        </div>

        <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
          <Zap size={16} className="text-yellow-400 flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px]" />
          <span className="text-gray-500 flex-shrink-0">Storage:</span>
          <span className="text-gray-300">Filled with Ideas, Code, and a Touch of Ambition</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <Code size={16} className="text-green-400 flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
          <span className="text-gray-500 flex-shrink-0">Version:</span>
          <span className="text-gray-300">Student</span>
        </div>
      </div>

    <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50 space-y-2 sm:space-y-3">
    <h3 className="text-base sm:text-lg text-green-400 mb-2 sm:mb-3">Social Media</h3>
      <div className="flex gap-3 sm:gap-4 pt-2">
        <a
          href="https://www.instagram.com/mossabarektout/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 transition-colors"
        >
          <Instagram size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/mossab-arektout/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Linkedin size={20} className="sm:w-6 sm:h-6" />
        </a>
        <a
          href="https://github.com/MossabArektout"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github size={20} className="sm:w-6 sm:h-6" />
        </a>
      </div>
      </div>

      {/* <div className="space-y-3">
        <h3 className="text-lg text-green-400">Core Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {['Python', 'Java', 'React', 'Laravel', 'Flask', 'TensorFlow', 'MySQL', 'TypeScript'].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 text-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div> */}
    </div>
  );
}
