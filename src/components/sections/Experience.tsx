import { Calendar, MapPin, Briefcase } from 'lucide-react';
import type { Experience } from '../../types';

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: 'Software Engineer Intern',
      company: 'Oracle',
      period: 'June 2025 - September 2025',
      description: [
      'Collaborated with an international team on the development of the GitHub Compliance Audit Service (GCAS), a cloud-native tool ensuring compliance of Oracle’s open-source repositories.',
      'Worked directly with the backend team to design and integrate new features.',
      'Developed RESTful APIs for GCAS backend using DropWizard, improving compliance checks across 500+ repositories.',
      'Analyzed and resolved DevOps pipeline issues, increasing system reliability'
      ],
    },
    {
      title: 'AI Software Engineer Intern',
      company: 'CBI',
      period: 'June 2024 - August 2024',
      description: [
        'Developed an invoice recognition interface using Python and React',
        'Implemented PDF to image conversion and text extraction using OCR',
        'Utilized Named Entity Recognition (NER) with spaCy for data processing',
        'Collaborated with team to integrate interface into existing banking systems'
      ],
    },
  ];

  return (
    <div className="text-gray-300 space-y-4 sm:space-y-6 font-mono">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">Experience</h2>
      <div className="space-y-4 sm:space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 pb-4 sm:pb-6 border-l-2 border-gray-700/50 last:pb-0">
            <div className="absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 border-2 sm:border-4 border-gray-900" />
            <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200 group">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start gap-2 flex-1 min-w-0">
                  <Briefcase size={16} className="text-blue-400 flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px]" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors leading-tight">
                    {exp.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                <div className="flex items-center gap-1">
                  <MapPin size={12} className="text-purple-400 flex-shrink-0 sm:w-[14px] sm:h-[14px]" />
                  <span className="font-semibold text-purple-300 bg-purple-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-purple-500/30 text-[10px] sm:text-sm">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-green-400 flex-shrink-0 sm:w-[14px] sm:h-[14px]" />
                  <span className="text-green-300 text-[10px] sm:text-sm">{exp.period}</span>
                </div>
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">
                {Array.isArray(exp.description) ? (
                  <ul className="list-disc list-inside space-y-0.5 sm:space-y-1">
                    {exp.description.map((point, index) => (
                      <li key={index} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}