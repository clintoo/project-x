export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Let's make something magical — one idea, one coffee, and one conversation at a time.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "From sunrise to midnight snacks, I'm always up for that chat.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I'm constantly trying to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Mixing bits, bytes, and a dash of magic to build cool stuff.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on an AI Digital Library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Got an idea? Let's make some magic together",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sensei AI SaaS Platform",
    des: "An all-in-one AI platform offering chat, image generation, and more, built with Next.js, Tailwind CSS, and TypeScript.",
    img: "/sensei.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/kc-clintone/Sensei-ai_saas",
  },
  {
    id: 2,
    title: "Movies Search/Suggestion App",
    des: "A dynamic movie search and suggestion app built with Next.js, Tailwind CSS, and TypeScript, featuring a sleek UI and responsive design.",
    img: "/movies.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.io/kc-clintone/movies-search-app",
  },
  {
    id: 3,
    title: "Audio Scribe - AI Audio Transcription",
    des: "An AI-powered audio transcription app that converts speech to text, built with React, Tailwind CSS, and TypeScript.",
    img: "/audio.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://kc-clintone.github.io/video-to-transcript/",
  },
  {
    id: 4,
    title: "Premium Hotel Booking Website",
    des: "A premium hotel booking website showcasing modern design and functionality, built with Next.js and Tailwind CSS.",
    img: "/gh.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://kc-clintone.github.io/grand_hotel_site/",
  },
];

export const testimonials = [
  {
    quote:
      "Clinton is a phenomenal colleague whose technical expertise is matched only by his collaborative spirit. During our time working together, he consistently delivered high-quality code while also fostering a positive team environment. His ability to break down complex problems and communicate solutions clearly made him an invaluable asset to our projects.",
    name: "Amon Ochuka",
    title: "Fullstack Developer at zone01Kisumu",
    img: "/avatar.jpg",
  },
  {
    quote:
      "Working with Clinton was an absolute pleasure. His dedication to writing clean, efficient code and his proactive approach to problem-solving significantly elevated our development process. He has a keen eye for detail and a deep understanding of best practices, which he applies thoughtfully to every project. Beyond his technical skills, Clinton's positive attitude and willingness to support his teammates made him a standout member of our team.",
    name: "Japheth Omanyu",
    title: "Backend Engineer at Zynamis",
    img: "/avatar.jpg",
  },
  {
    quote:
      "Clinton's impact on our development team was profound. His expertise in frontend technologies and his commitment to excellence were evident in every project he undertook. He consistently went above and beyond to ensure that our applications were not only functional but also user-friendly and visually appealing. Clinton's collaborative nature and eagerness to share knowledge made him a respected and valued team member.",
    name: "Brian Kagiri",
    title: "Program manager at Zynamis",
    img: "/avatar.jpg",
  },
  {
    quote:
      "I'm happy with the work Clinton did on our project. He was professional, communicative, and delivered high-quality results on time. His expertise in web development helped bring our vision to life, and I would gladly work with him again in the future.",
    name: "Florence Ndinda",
    title: "Happy client",
    img: "/avatar.jpg",
  },
  {
    quote:
      "Clinton's insightful approach to UI/UX design and development significantly enhanced our application's user experience. His ability to blend creativity with technical proficiency resulted in a product that was both visually stunning and highly functional.",
    name: "Mitchell Njeri",
    title: "UI/UX Engineer at Elle-Designs",
    img: "/avatar.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer - Zynamis",
    desc: "Developed and maintained React-based web apps, improving user experience and interface responsiveness.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer - Emobilis",
    desc: "Designed and developed web apps using Django, focusing on robust and user-friendly interfaces.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Fullstack engineer - Zone01Kisumu",
    desc: "Engaged in intensive, project-driven training on full-stack development, problem-solving, and collaborative software engineering.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Volunteer Mentor",
    desc: "I constantly contribute to the developer community by mentoring learners, reviewing code, and fostering a growth-focused environment.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/kc-clintone",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/@kc_clintone",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/clinton-otieno",
  },
];
