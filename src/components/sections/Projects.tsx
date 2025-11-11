import { ExternalLink, Github, Folder } from 'lucide-react';
import type { Project } from '../../types';

export default function Projects() {
  const projects: Project[] = [
    {
      name: 'Observability Project – Large-Scale Microservice Monitoring',
      description: [
        'Designed complete observability stack for distributed microservices using Prometheus, Loki, Tempo, OpenTelemetry, and Grafana',
        'Containerized 6 Spring Boot microservices with Docker for scalable deployments',
        'Implemented complete visibility into metrics, logs, and traces across distributed system',
        'Strengthened DevOps skills and monitoring for cloud-native distributed systems'
      ],
      techStack: ['Prometheus', 'DevOps', 'Loki', 'OpenTelemetry', 'Microservices', 'Grafana', 'Spring Boot', 'Docker', 'Java'],
      github: 'https://github.com/Abderrahimself/microservices-journey',
    },
    {
      name: 'Optimizing DevOps Log Persistence in NoSQL Databases',
      description: [
        'Compared PostgreSQL, MongoDB, and Elasticsearch for optimal database in scalable log management',
        'Focused on insertion speed, query performance, and resource efficiency (CPU, memory, storage)',
        'Built Python-based task manager and custom log generator to simulate high-load environments',
        'Dockerized database environments and automated CI/CD pipelines using Jenkins',
        'Designed real-time Kibana dashboard for log analytics and performance monitoring'
      ],
      techStack: ['Elasticsearch', 'NoSQL', 'MongoDB', 'Kibana', 'Docker', 'Python', 'PostgreSQL', 'Jenkins'],
      github: '#',
    },
    {
      name: 'Smart Waste Management System',
      description: [
        'Modernized urban waste management by integrating IoT and AI technologies',
        'Developed automated waste sorting system for real-time monitoring and efficient collection',
        'Implemented AI model to classify waste into paper, metal, and plastic categories',
        'Built smart bin system with IoT sensors to monitor fill levels and send real-time data',
        'Developed mobile application for real-time monitoring and waste collection tracking'
      ],
      techStack: ['Deep Learning', 'Machine Learning', 'Python', 'IoT', 'Mobile Development', 'AI'],
      github: 'https://github.com/MossabArektout/S4-Proejct-Waste-Classifier-Iot-AI-',
    },
    {
      name: 'Invoice Recognition System',
      description: [
        'Developed interface for recognizing and processing invoices using Python and React',
        'Implemented PDF to image conversion and text extraction using OCR technology',
        'Utilized Named Entity Recognition (NER) with spaCy for data extraction',
        'Collaborated with team to integrate interface into existing systems',
        'Optimized system performance for production deployment'
      ],
      techStack: ['Python', 'Machine Learning', 'OpenCV', 'TensorFlow', 'OCR', 'NER', 'React'],
      github: '#',
    },
    {
      name: 'ShopNow - Ecommerce Platform',
      description: [
        'Designed and implemented scalable multi-vendor e-commerce platform using Java EE',
        'Focused on modular backend architecture and secure API development',
        'Implemented user authentication and role-based access control for admins, vendors, and customers',
        'Built intuitive product management dashboard for vendors to track inventory and sales',
        'Optimized database schema with MySQL to improve query performance and scalability'
      ],
      techStack: ['Jakarta EE', 'Java', 'MySQL', 'E-commerce'],
      github: '#',
    },
    {
      name: 'Hotel Room Booking Web App',
      description: [
        'Developed comprehensive hotel management application with online booking system',
        'Built back-end with Laravel and front-end with HTML/CSS',
        'Integrated Dompdf for automated receipt generation',
        'Implemented room management and billing features',
        'Used MySQL for robust database management'
      ],
      techStack: ['PHP', 'Laravel', 'MySQL', 'XAMPP', 'MVC Architecture', 'Stripe'],
      github: 'https://github.com/MossabArektout/PFA-HotelRoomBokingApp',
    },
    {
      name: 'Word Island: Gamified Serious Game for Dyslexic Children',
      description: [
        'Gamified serious game for dyslexic children (6-12 years) addressing language challenges',
        'Leveraged AI agent to streamline Game Design Document (GDD) creation',
        'Generated modular task plans for each island (Vowel, Consonant, Combination, Word)',
        'Reduced design time by 30% using AI-assisted planning',
        'Integrated rewards, progress tracking, and mistake-friendly environment to boost confidence'
      ],
      techStack: ['Python', 'AI Agent', 'Game Development', 'Team Work'],
      github: '#',
    },
    {
      name: 'Fiftyville: SQL Mystery - Database Query & Analysis',
      description: [
        'Solved complex SQL mystery challenge from Harvard\'s CS50 course',
        'Analyzed relational database to identify thief, escape destination, and accomplice',
        'Used only SQL queries for data analysis and investigation',
        'Demonstrated advanced database querying and analytical skills'
      ],
      techStack: ['SQL', 'SQLite', 'Database Management', 'Data Analysis'],
      github: 'https://github.com/MossabArektout/CS50_fiftyville',
    },
  ];

  return (
    <div className="text-gray-300 space-y-3 sm:space-y-4 font-mono">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">Projects</h2>
      <div className="space-y-3 sm:space-y-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 gap-2">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <Folder size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors leading-tight">
                  {project.name}
                </h3>
              </div>
              <div className="flex gap-2 sm:flex-shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                )}
              </div>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 space-y-1">
              {Array.isArray(project.description) ? (
                <ul className="list-disc list-inside space-y-0.5 sm:space-y-1">
                  {project.description.map((point, index) => (
                    <li key={index} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{project.description}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-[10px] sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}