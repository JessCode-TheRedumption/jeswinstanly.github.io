export const profile = {
  name: 'Jeswin Stanly A',
  roles: [
    'Techno-Functional Consultant Trainee',
    'Business Central | AL Developer',
    'Microsoft Dynamics 365 Learner',
    'Python Backend Engineer',
    'Full-Stack Developer',
  ],
  location: 'Thrissur, Kerala, India',
  email: 'jeswinstanly5@gmail.com',
  phone: '+91 9400523599',
  summary:
    "Techno-Functional Consultant Trainee at Woxro Technology Solutions, learning Microsoft Dynamics 365 Business Central and AL development from the ground up, backed by a solid Python engineering foundation across Django, FastAPI, and data-driven systems. A 160+ day LeetCode streak and a top-27% global Kaggle finish sit alongside professional communication certified by the University of Cambridge — building enterprise skills that will hold up under real business load.",
  links: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    leetcode: 'https://leetcode.com/',
    kaggle: 'https://kaggle.com/',
    huggingface: 'https://huggingface.co/',
  },
}

export const skillModules = [
  {
    id: 'M1',
    title: 'ERP & Business Central',
    icon: '⚡',
    items: ['Business Central', 'AL Language', 'Techno-Functional Consulting', 'REST APIs', 'SQL'],
  },
  {
    id: 'M2',
    title: 'Backend & Data',
    icon: '🔧',
    items: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'JWT', 'Pandas / NumPy', 'Scikit-learn'],
  },
  {
    id: 'M3',
    title: 'DevOps & Platform',
    icon: '🚀',
    items: ['Docker', 'Kubernetes', 'Git / GitHub', 'Linux CLI', 'Firebase Firestore', 'React'],
  },
]

export const projects = [
  {
    code: 'DOC-04',
    title: 'Business Central Extensions',
    period: 'In progress',
    status: 'In Process',
    stack: ['AL', 'Business Central', 'SQL'],
    description:
      'AL-based extensions built on the Business Central platform as part of ongoing techno-functional consulting work at Woxro.',
    gradient: 'from-amber-500/20 to-orange-600/10',
    accentColor: '#E3A83B',
  },
  {
    code: 'DOC-03',
    title: 'Insightful.AI',
    period: '2026 — Present',
    status: 'In Process',
    stack: ['Django', 'React', 'Gemini API', 'WebSockets', 'Celery'],
    description:
      'A career-preparation platform built module by module: IELTS and BEC listening pipelines with checkpointed audio generation, an AI mock-interview flow on the Gemini Live API, a coding arena, and a proctored assessment engine with anti-cheat auditing.',
    gradient: 'from-purple-500/20 to-violet-600/10',
    accentColor: '#8B5CF6',
  },
  {
    code: 'DOC-02',
    title: 'SkillForgeX',
    period: 'Feb 2026 — Present',
    status: 'Posted',
    stack: ['Django', 'REST API', 'Redis', 'Docker'],
    description:
      'A full-stack EdTech platform for student learning workflows — interview management, grading, and team formation, with Redis caching cutting response times by 40% and a containerized deployment for stable uptime under traffic.',
    gradient: 'from-cyan-500/20 to-teal-600/10',
    accentColor: '#4FD1C5',
  },
  {
    code: 'DOC-01',
    title: 'CleanZone — Smart Waste Management',
    period: 'Sep 2025 — Dec 2025',
    status: 'Posted',
    stack: ['Python', 'Firebase', 'NoSQL'],
    description:
      'A real-time community reporting platform for waste management, architected around data security and ease of use, with automated processing on a Firebase backend.',
    gradient: 'from-green-500/20 to-emerald-600/10',
    accentColor: '#10B981',
  },
]

// status: Posted = complete, In Process = active, Open = queued
export const certifications = [
  { title: 'Cambridge English Certification — Advanced Proficiency', issuer: 'University of Cambridge', status: 'Posted' },
  { title: 'Python Project for Data Science — 93.3%', issuer: 'Coursera', status: 'Posted' },
  { title: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services', status: 'Posted' },
  { title: 'Foundations of Cybersecurity', issuer: 'Google', status: 'Posted' },
  { title: 'GitHub Student Developer', issuer: 'GitHub', status: 'Posted' },
  { title: 'MB-800: Business Central Functional Consultant', issuer: 'Microsoft', status: 'In Process' },
  { title: 'AWS Solutions Architect — Associate', issuer: 'Amazon Web Services', status: 'Open' },
  { title: 'Microsoft Certified: Dynamics 365 Business Central', issuer: 'Microsoft', status: 'Open' },
]

export const experience = [
  {
    company: 'Woxro Technology Solutions',
    role: 'Techno-Functional Consultant Trainee',
    period: 'July 2026 — Present',
    location: 'Thrissur, Kerala, India',
    type: 'Full Time',
    description: 'Undergoing intensive training as a Techno-Functional Consultant specializing in Microsoft Dynamics 365 Business Central. Responsibilities span both technical development and business process alignment, working directly with senior consultants on enterprise-grade ERP deployments.',
    highlights: [
      'Learning AL (Application Language) extension development for custom ERP solutions',
      'Configuring core Business Central functional modules (Finance, Sales, Purchasing)',
      'Assisting in requirement gathering and mapping business processes to technical workflows',
      'Integrating external systems with Business Central via REST APIs and Web Services'
    ],
    logo: '🏢',
    color: '#E3A83B',
  },
  {
    company: 'Aptivora Global Solutions',
    role: 'Software Developer Trainee',
    period: 'Jun 2026 — Jul 2026',
    location: 'Remote',
    type: '2-Month Internship',
    description: 'Served as a software developer trainee focusing on full-stack development. Spearheaded the integration of machine learning capabilities into modern web applications using cutting-edge tools and frameworks.',
    highlights: [
      'Developed and shipped full-stack projects from scratch to deployment',
      'Integrated Machine Learning models into applications using the Gemini SDK',
      'Containerized applications using Docker for consistent cross-environment deployments',
      'Gained practical experience in modern software architecture and agile workflows'
    ],
    logo: '🌐',
    color: '#4FD1C5',
  },
]

export const timeline = [
  { year: '2021–2024', label: 'B.Sc. Physics', detail: 'Sahrdaya College of Advanced Studies — First Class' },
  { year: '2024', label: 'MCA begins', detail: 'University of Calicut' },
  { year: '2026', label: 'MCA completed', detail: 'First Class with Distinction' },
  { year: 'Jun 2026', label: 'Joined Aptivora', detail: 'Software Consultant Intern — 2-month engagement' },
  { year: 'Jul 2026', label: 'Joined Woxro', detail: 'Techno-Functional Consultant Trainee' },
  { year: '2026', label: 'Learning Business Central', detail: 'AL development track' },
  { year: 'In progress', label: 'MB-800', detail: 'Business Central Functional Consultant exam' },
  { year: 'Ahead', label: 'Microsoft Certified', detail: 'Dynamics 365 Business Central' },
]

export const stats = [
  { value: '160+', label: 'day LeetCode streak', icon: '🔥' },
  { value: 'Top 27%', label: 'Kaggle — March ML Mania 2026', icon: '🏆' },
  { value: 'OWASP BLT', label: 'Frontend & Backend Contributor', icon: '⚙️' },
]
