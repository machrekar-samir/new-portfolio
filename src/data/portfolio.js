export const personalInfo = {
  firstName: 'Samir',
  lastName: 'Machrekar',
  title: 'Front-end Developer',
  tagline:
    'I craft immersive, pixel-perfect web experiences with React and modern design systems — turning ideas into elegant digital products.',
  bio: 'Passionate front-end developer specializing in React.js, responsive UI design, and smooth animations. I love building products that feel premium and perform flawlessly.',
  aboutExtended:
    "I'm a front-end developer with a keen eye for design and a passion for creating beautiful, functional web applications. From responsive layouts to micro-interactions, I focus on every detail that elevates the user experience.",
  location: 'Sangamner , Maharashtra, India',
  email: 'samirmacharekar@gmail.com',
  phone: '+91 7796094625',
  availability: 'Open to Work',
  cvUrl: '#',
}

export const navLinks = [
  { id: 'home', label: 'Home', path: '/', number:'●' },
  { id: 'about', label: 'About', path: '/about', number:'●' },
  { id: 'skills', label: 'Skills', path: '/skills', number:'●' },
  { id: 'projects', label: 'Projects', path: '/projects', number:'●' },
  { id: 'experience', label: 'Experience', path: '/experience', number:'●' },
  { id: 'blog', label: 'Blog', path: '/blog', number:'●'  },
  { id: 'contact', label: 'Contact', path: '/contact', number:'●'  },
]

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
]

export const stats = [
  { label: 'Projects Completed', value: '15+' },
  { label: 'Technologies Mastered', value: '10+' },
  { label: 'Happy Clients', value: '5+' },
  { label: 'Years of Experience', value: '1+' },
]

export const skillCategories = ['Frontend', 'Backend', 'Tools', 'Others']

export const skillsByCategory = {
  Frontend: [
    { name: 'React.js', level: 90, icon: 'react' },
    { name: 'JavaScript', level: 85, icon: 'js' },
    { name: 'HTML5', level: 95, icon: 'html' },
    { name: 'CSS3', level: 90, icon: 'css' },
    { name: 'Tailwind CSS', level: 88, icon: 'tailwind' },
  ],
  Backend: [
    { name: 'Node.js', level: 75, icon: 'node' },
    { name: 'Express.js', level: 70, icon: 'express' },
    { name: 'MongoDB', level: 65, icon: 'mongo' },
  ],
  Tools: [
    { name: 'Git', level: 85, icon: 'git' },
    { name: 'Figma', level: 80, icon: 'figma' },
    { name: 'VS Code', level: 92, icon: 'vscode' },
  ],
  Others: [
    { name: 'Framer Motion', level: 82, icon: 'motion' },
    { name: 'REST APIs', level: 78, icon: 'api' },
  ],
}

export const projectCategories = ['All', 'Web Apps', 'E-commerce', 'Landing Pages']

export const featuredProject = {
  title: 'EduMartX',
  description:
    'A modern e-learning marketplace platform with course browsing, cart functionality, and seamless checkout experience.',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=400&fit=crop',
  tags: ['React', 'Tailwind CSS', 'Node.js'],
  url: '#',
}

export const projects = [
  {
    id: 1,
    title: 'EduMartX',
    description:
      'A modern e-learning marketplace with course browsing, cart, and seamless checkout.',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    url: '#',
  },
  {
    id: 2,
    title: 'SMS Cinemas',
    description:
      'Cinema ticket booking platform with seat selection, showtimes, and online payment integration.',
    category: 'Web Apps',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    url: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A premium personal portfolio with glassmorphism, animations, and responsive design.',
    category: 'Landing Pages',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    url: '#',
  },
  {
    id: 4,
    title: 'Tea House',
    description:
      'E-commerce landing page for a premium tea brand with product showcase and ordering.',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&h=400&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Stripe'],
    url: '#',
  },
]

export const experience = [
  {
    id: 1,
    role: 'Front-end Developer (Intern)',
    company: 'TechNova Solutions',
    period: '2024 - Present',
    description:
      'Building responsive web applications using React.js and Tailwind CSS. Collaborating with designers to implement pixel-perfect UI components and smooth animations.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: 2,
    role: 'Web Developer (Freelance)',
    company: 'Self Employed',
    period: '2023 - 2024',
    description:
      'Developed custom websites and landing pages for small businesses. Managed full project lifecycle from design to deployment.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    role: 'Front-end Developer (Intern)',
    company: 'Digital Craft Studio',
    period: '2023',
    description:
      'Assisted in building client-facing web applications. Learned modern front-end workflows and version control with Git.',
    tags: ['React', 'CSS3', 'Git'],
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt:
      'A comprehensive guide to useState, useEffect, and custom hooks for modern React development.',
    date: 'Jul 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=340&fit=crop',
    category: 'React',
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS in 2026',
    excerpt:
      'Tips and tricks for building beautiful, responsive UIs faster with Tailwind CSS utility classes.',
    date: 'Jun 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop',
    category: 'CSS',
  },
  {
    id: 3,
    title: 'Building Accessible Web Apps',
    excerpt: 'Best practices for creating inclusive web experiences that work for everyone.',
    date: 'Jun 10, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=340&fit=crop',
    category: 'A11y',
  },
]
