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
cvUrl: '/Machrekar_Sameer-CV.pdf',
}

export const navLinks = [
  { id: 'home', label: 'Home', path: '/', number:'●' },
  { id: 'about', label: 'About', path: '/about', number:'●' },
  { id: 'skills', label: 'Skills', path: '/skills', number:'●' },
  { id: 'projects', label: 'Projects', path: '/projects', number:'●' },
  { id: 'experience', label: 'Experience', path: '/experience', number:'●' },
  { id: 'Certifications', label: 'Certifications', path: '/blog', number:'●'  },
  { id: 'contact', label: 'Contact', path: '/contact', number:'●'  },
]

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/machrekar-samir', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samir-machrekar-a975212b0/', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/machrekar_samir?igsh=MXQyeHNsc3ZsN2lzag%3D%3D&utm_source=qr', icon: 'instagram' },
{ name: 'WhatsApp', url: 'https://wa.me/917796094625', icon: 'whatsapp' },]

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
    { name: 'JavaScript', level: 80, icon: 'js' },
    { name: 'HTML5', level: 100, icon: 'html' },
    { name: 'CSS3', level: 100, icon: 'css' },
    { name: 'Tailwind CSS', level: 100, icon: 'tailwind' },
  ],
  Backend: [
{ name: 'MySQL', level: 75, icon: 'mysql' },
    { name: 'SQLite', level: 60, icon: 'sqlite' },
    { name: 'Supabase', level: 80, icon: 'supabase' },
  ],
  Tools: [
    { name: 'Git', level: 85, icon: 'git' },
    { name: 'Figma', level: 80, icon: 'figma' },
    { name: 'VS Code', level: 92, icon: 'vscode' },
  ],
  Others: [
     { name: 'C', level: 82, icon: 'c' },
  { name: 'C++', level: 85, icon: 'cpp' },
  { name: 'PHP', level: 70, icon: 'php' },
  // { name: 'JAVA', level: 75, icon: 'java' },
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
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    url: 'https://edumartx.netlify.app/',
  },
  {
    id: 2,
    title: 'GGSf College Website',
    description:
      'A responsive college website with academic information, campus details, events, and student resources.',
    category: 'Web Apps',
    image: 'https://media.istockphoto.com/id/1461631542/photo/group-of-happy-students-having-chat-with-talking-each-other-while-sitting-on-college-campus.jpg?s=612x612&w=0&k=20&c=nB1wuPB-JuX3YIdoNSJDRgolfbiqQu2Tjj_kdUor_pE=',
    tags: ['React', 'Supabase', 'Tailwind CSS'],
    url: 'https://ggsf-official-web.netlify.app/',
  },
   {
    id: 4,
    title: 'KhataOne',
    description:
      '**TeaKhata** is a smart credit management app for tracking customers, udhari, payments, and reminders.',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwd2l0aCUyMGNoYXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    url: 'https://khataone.netlify.app/',
  },
 
  {
    id: 6,
    title: 'Codewitzzs Home page Design  ',
    description:
      'A modern e-learning platform featuring tech courses, internships, gamified learning, mentorship, and career resources.',
    category: 'E-learning',
    image: 'https://plus.unsplash.com/premium_photo-1661771564227-1d8484e32c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUtbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D',
    tags: ['HTML', 'JavaScript', ' CSS'],
    url: 'https://codewttz-front-end.netlify.app/',
  },
  // {
  //   id: 2,
  //   title: 'SMS Cinemas',
  //   description:
  //     'Cinema ticket booking platform with seat selection, showtimes, and online payment integration.',
  //   category: 'Web Apps',
  //   image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop',
  //   tags: ['React', 'Firebase', 'Tailwind CSS'],
  //   url: '#',
  // },
  
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A premium personal portfolio with glassmorphism, animations, and responsive design.',
    category: 'Landing Pages',
    image: 'https://plus.unsplash.com/premium_vector-1733931455414-b89a31f15841?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    url: '#',
  },
  {
    id: 5,
    title: 'Calculator',
    description:
      'A simple and responsive calculator for performing basic arithmetic operations with an intuitive user interface.',
    category: 'Web Apps',
    image: 'https://plus.unsplash.com/premium_photo-1661311947753-065ef4af9087?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FsY3VsYXRvcnxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['HTML', 'CSS5', 'JS'],
    url: 'https://samir-calculator.netlify.app/',
  },
  
  {
    id: 7,
    title: 'Apple iPhone Landing Page Design',
    description:
      'A modern and responsive landing page with a clean design, engaging visuals, and user-friendly layout.',
    category: 'Landing Pages',
    image: 'https://images.unsplash.com/photo-1603791239531-1dda55e194a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlJTIwaXBob25lJTIwbGFuZGluZyUyMHBhZ2V8ZW58MHx8MHx8fDA%3D',
    tags: ['HTML', 'CSS', 'JS'],
    url: 'https://samir-landing-page.netlify.app/',
  },
  // {
  //   id: 8,
  //   title: 'LaunchKit',
  //   description:
  //     'A conversion-focused startup landing page built for lead capture, product highlights, and testimonials.',
  //   category: 'Landing Pages',
  //   image: '',
  //   tags: ['React', 'CSS', 'A11y'],
  //   url: '#',
  // },
]

export const experience = [
  {
    id: 1,
    role: 'Front-end Developer ',
    company: 'Codewitzz',
    period: '1+ Year',
    description:
      'Building responsive web applications using React.js and Tailwind CSS. Collaborating with designers to implement pixel-perfect UI components and smooth animations.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: 2,
    role: 'Full Stack  Developer (Intern)',
    company: 'TechnoGrowth Software Solutions',
    period: '2023 - 2024',
    description:
      ' I have completed the full stack Java Development internship and gather handful of experience from it. Now I am able to build the full stack application using Spring Boot and Angular .',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    role: 'Web Developer (Intern)',
    company: 'CodeSoft Technologies',
    period: '2024',
    description:
      'Successfully completed a 4-week virtual Web Development internship at CodSoft, gaining practical experience through real-world tasks and projects.',
    tags: ['HTML', 'CSS3', 'JavaScript'],
  },
]

// export const blogPosts = [
//   {
//     id: 1,
//     title: 'Getting Started with React Hooks',
//     excerpt:
//       'A comprehensive guide to useState, useEffect, and custom hooks for modern React development.',
//     date: 'Jul 15, 2026',
//     readTime: '5 min read',
//     image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=340&fit=crop',
//     category: 'React',
//   },
//   {
//     id: 2,
//     title: 'Mastering Tailwind CSS in 2026',
//     excerpt:
//       'Tips and tricks for building beautiful, responsive UIs faster with Tailwind CSS utility classes.',
//     date: 'Jun 28, 2026',
//     readTime: '7 min read',
//     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop',
//     category: 'CSS',
//   },
//   {
//     id: 3,
//     title: 'Building Accessible Web Apps',
//     excerpt: 'Best practices for creating inclusive web experiences that work for everyone.',
//     date: 'Jun 10, 2026',
//     readTime: '6 min read',
//     image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=340&fit=crop',
//     category: 'A11y',
//   },
// ]

export const certificates = [
  {
    id: 1,
    title: 'React Developer Certification',
    issuer: 'Codewitzz',
    date: ' July 2026',
    image: 'https://img-c.udemycdn.com/course/240x135/7204447_8891.jpg',
    category: 'Frontend',
    url: '/certificates/codewittz.pdf',
  },
  {
    id: 2,
    title: 'Web Developer Certification',
    issuer: 'Codesoft Technologies',
    date: 'March 2024',
    image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/web_developer_certificationsb.jpg',
    category: 'Design Webpages',
    url: '/certificates/Codesoft.pdf',
  },
  {
    id: 3,
    title: 'Full Stack Development Certification',
    issuer: 'TechnoGrowth Software Solutions',
    date: 'June 2024',
    image: 'https://miro.medium.com/0*A2s5TI5LrD6UPRQt.jpg',
    category: 'Full Stack',
    url: '/certificates/TechnoGrowth.pdf',
  },
  {
    id: 4,
    title: 'Genrative AI for Executives',
    issuer: 'Amezon',
    date: 'January 2024',
    image: 'https://img-c.udemycdn.com/course/480x270/6595497_64d5.jpg?w=3840&q=75',
    category: 'AI',
    url: '/certificates/aws.pdf',
  },
   {
    id: 5,
    title: 'Beginner HTML and CSS: Build your own personal blog',
    issuer: 'Infosys',
    date: 'January 2024',
    image: 'https://img-c.udemycdn.com/course/480x270/3339492_8fe4.jpg',
    category: 'Web Development',
    url: '/certificates/infosys.pdf',
  },
  {
    id: 5,
    title: 'Java Programming',
    issuer: 'Great Learning',
    date: 'January 2024',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQEj_skZvxBLHg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697271137370?e=2147483647&v=beta&t=i67kZ1f9MKbxtAfTLlThSa2AQGhAkEASNQbBP_RTtLc',
    category: 'Web Development',
    url: '/certificates/java.pdf',
  },
]
