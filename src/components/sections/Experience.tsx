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
    <div className="text-gray-300 space-y-6 font-mono">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-700/50 last:pb-0">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900" />
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200 group">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-blue-400" />
                  <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-purple-400" />
                  <span className="font-semibold text-purple-300 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/30">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-green-400" />
                  <span className="text-green-300">{exp.period}</span>
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                {Array.isArray(exp.description) ? (
                  <ul className="list-disc list-inside space-y-1">
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