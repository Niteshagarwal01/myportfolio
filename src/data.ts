import { BtnListType, ProjectListType } from "./types";

export const projectsData: ProjectListType[] = [
  {
    id: 1,
    name: "Jarvis Assistant",
    subHeading: "Smart Voice Assistant",
    description:
      "A fully functional smart assistant developed in Python that uses speech recognition, text-to-speech, and automation APIs. Jarvis can perform tasks like opening applications, web browsing, answering questions, telling jokes, setting reminders, sending emails, and managing files through voice commands, offering an early glimpse into personal AI development.",
    demoLink: "",
    sourceLink: "https://github.com/Niteshagarwal01/jarvis",
    techStack: [
      "Python",
      "Speech Recognition",
      "NLP",
      "APIs",
      "Automation",
      "AI",
      "Text-to-Speech",
    ],
  },
  {
    id: 2,
    name: "Finding Myself in the Lies",
    subHeading: "Creative Writing & Published Book",
    description:
      "A personal creative project and published book that explores the journey of self-awareness, emotions, and inner conflict through compelling storytelling. The work combines creative writing, emotional intelligence, and introspection to inspire readers to question illusions and find their true selves.",
    demoLink: "https://finding-myself-in-the-lies.netlify.app/",
    sourceLink: "https://github.com/Niteshagarwal01/Finding_myself-in-the-lies",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
  },
  {
    id: 3,
    name: "Delta_Front",
    subHeading: "Futuristic Web Interface",
    description:
      "A futuristic web front-end project showcasing clean UI/UX principles, animations, and responsive layouts. Delta_Front emphasizes minimalistic design combined with cutting-edge frontend technologies, providing a modern user experience inspired by sci-fi aesthetics.",
    demoLink: "https://delta-front-clothing-store.netlify.app/",
    sourceLink: "https://github.com/Niteshagarwal01/Delta_front",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    id: 4,
    name: "ARYA - AI Mental Health Platform [In Development]",
    subHeading: "AI & Web3 Mental Health Solution",
    description:
      "An AI-powered mental health solution integrating Web3 elements. Features include an intelligent chatbot (Arya) for emotional support, mood tracking, emergency SOS systems, smart appointment booking, and therapeutic games. ARYA promotes mental well-being through personalized, adaptive AI responses and blockchain-secured data handling.",
    demoLink: "",
    sourceLink: "",
    techStack: [
      "AI",
      "Web3",
      "Blockchain", 
      "React",
      "Node.js",
      "TensorFlow",
      "Natural Language Processing",
      "Smart Contracts",
    ],
  },
  {
    id: 5,
    name: "PsycheCare - AI Mental Health Platform",
    subHeading: "Comprehensive Digital Mental Health Ecosystem",
    description:
      "A comprehensive digital mental health ecosystem powered by AI. Core features include 24/7 emotional support via Arya (chatbot), emergency SOS functionality, personalized mental health treatment plans, therapy appointment booking, medication management tools, and AI-driven insights for tracking mental wellness. PsycheCare aims to provide stigma-free, accessible, and personalized mental healthcare for all.",
    demoLink: "https://pyschecare.netlify.app/",
    sourceLink: "https://github.com/Niteshagarwal01/PYSCHECARE",
    techStack: [
      "AI",
      "Machine Learning",
      "HTML",
      "CSS", 
      "JavaScript", 
      "Node.js",
      "Python",
      "Natural Language Processing",
    ],
  },
  {
    id: 6,
    name: "Constitution Made Easy",
    subHeading: "Educational Platform for Indian Constitution",
    description:
      "An educational platform designed to simplify the Indian Constitution. It uses AI-driven summaries, interactive infographics, and quizzes to make complex legal concepts understandable and accessible for students, exam aspirants, and lifelong learners aiming to deepen their civic knowledge.",
    demoLink: "https://constitution-made-easy.netlify.app/",
    sourceLink: "https://github.com/Niteshagarwal01/Constitution_made_easy",
    techStack: [
      "React", 
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "AI Content Generation",
      "MongoDB",
      "Interactive Learning Tools",
    ],
  },
  {
    id: 7,
    name: "VANET - Vehicular Ad-hoc Networks Simulation",
    subHeading: "Vehicle-to-Vehicle Communication Research",
    description:
      "A simulation and research project focused on exploring vehicle-to-vehicle communication (V2V) in dynamic mobile environments. This work models real-world traffic networks, tests AI algorithms for collision prevention, and analyzes the efficiency of VANET protocols in smart cities.",
    demoLink: "https://impact-woad.vercel.app/#home",
    sourceLink: "https://github.com/Niteshagarwal01/IMPACT",
    techStack: [
      "Python",
      "Simulation Tools",
      "Network Protocols",
      "AI Algorithms",
      "Data Analysis",
      "Smart City Technologies",
      "Research Methodologies",
    ],
  },
  {
    id: 8,
    name: "Website Projects",
    subHeading: "Frontend Design & Development Collection",
    description:
      "A curated collection of mini-website projects and UI/UX experiments created while exploring modern frontend development. Projects range from landing pages, portfolios, and e-commerce layouts to interactive animations and component libraries, demonstrating strong frontend design skills.",
    demoLink: "",
    sourceLink: "https://github.com/Niteshagarwal01",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vue.js",
      "SASS",
      "Figma",
      "UI/UX Design",
      "Responsive Web Design",
    ],
  },
  {
    id: 9,
    name: "Python Practice Projects",
    subHeading: "Automation & Utility Scripts Collection",
    description:
      "A diverse set of Python scripts and mini-projects aimed at automation, daily utilities, data handling, and problem-solving exercises. Includes tasks like file organizers, web scrapers, automation bots, data visualization scripts, and beginner-level AI experiments.",
    demoLink: "",
    sourceLink: "https://github.com/Niteshagarwal01",
    techStack: [
      "Python",
      "Data Science",
      "Web Scraping",
      "Automation",
      "File Handling",
      "Data Visualization",
      "Machine Learning",
    ],
  },

  {
    id: 10,
    name: "AirPiano - Virtual Musical Instrument",
    subHeading: "Gesture-Based Music Creation",
    description:
      "A creative tech project that uses hand gestures to play musical notes without any physical contact. Built using Python, OpenCV, and MediaPipe, AirPiano detects finger positions through a webcam and maps them to musical tones in real-time. This project combines computer vision, sound synthesis, and user interaction to create a touchless, futuristic musical experience.",
    demoLink: "",
    sourceLink: "https://github.com/Niteshagarwal01/AIRPIANO",
    techStack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Computer Vision",
      "Sound Synthesis",
      "Real-time Processing",
      "UI/UX Design",
    ],
  },
];

export const BtnList: BtnListType[] = [
  {
    label: "Book",
    link: "https://finding-myself-in-the-lies.netlify.app/",
    icon: "book",
    newTab: true,
  },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Niteshagarwal01",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/nitesh-agarwal-9a1313317/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/cosmic_nitesh_/",
    icon: "instagram",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
