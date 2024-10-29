import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.png",
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "Assya Vet Care",
    icon: "/assets/company/assyavet.png",
    iconBg: "#E6DEDD",
    date: "Juli 2024 - Present",
    points: [
      "Melakukan analisis mendalam tentang kebutuhan pengguna dan klien untuk memahami fitur yang harus disediakan oleh website klinik hewan, seperti booking janji temu dan layanan online.",
      "Merancang tata letak yang responsif dan ramah pengguna, memastikan navigasi yang mudah diakses pada perangkat desktop dan mobile.",
      "Menggunakan HTML, CSS, dan JavaScript untuk membangun halaman-halaman interaktif dan responsif, memastikan tampilan website optimal di berbagai perangkat.",
      "Mengimplementasikan sistem manajemen konten (CMS) yang memudahkan tim klinik untuk memperbarui informasi layanan, dokter, dan kontak.",
      "Melakukan optimasi SEO untuk meningkatkan visibilitas website di mesin pencari, termasuk menggunakan praktik terbaik seperti meta tags, struktur URL, dan optimalisasi kecepatan loading.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Politeknik Negeri Jember",
    icon: "/assets/company/logo_polije.png",
    iconBg: "#E6DEDD",
    date: "Agustus 2022 - Juni 2023",
    points: [
      "Melakukan riset terhadap kebutuhan pengguna untuk mengidentifikasi fitur-fitur yang diperlukan oleh pengelola P3M, mahasiswa, dan dosen dalam akses informasi.",
      "Menerapkan sistem manajemen konten untuk memudahkan pengelola dalam memperbarui konten secara mandiri tanpa memerlukan keahlian teknis.",
      "Melakukan pengujian fungsionalitas dan kompatibilitas lintas browser untuk memastikan performa optimal pada berbagai perangkat.",
      "Memberikan dukungan pemeliharaan untuk memastikan website tetap up-to-date dengan teknologi terbaru dan bebas dari bug atau masalah teknis.",
    ],
  },
  {
    title: "Pengembang Front-End Web dan Back-End ",
    company_name: "Dicoding Indonesia",
    icon: "/assets/company/dicoding_logo.jpg",
    iconBg: "#E6DEDD",
    date: "February 2022 - July 2023",
    points: [
      "Penyelesaian Pelatihan Front-End dan Back-End Web: Berhasil menyelesaikan pelatihan intensif dalam pengembangan web, mencakup keterampilan front-end dan back-end, dengan fokus pada teknologi terbaru dan best practice industri.",
      "Penerapan Konsep Full-Stack Development: Mengembangkan kemampuan full-stack dengan menggabungkan penguasaan front-end dan back-end untuk membangun aplikasi web yang fungsional dan efisien.",
      "Proyek Pengembangan Aplikasi Web: Terlibat dalam proyek praktis, mulai dari perancangan hingga implementasi, dalam pembuatan aplikasi web yang berfokus pada kebutuhan pengguna dan optimalisasi performa.",
      "Pengembangan Soft Skills: Selain keterampilan teknis, program ini juga memberikan kesempatan untuk mengasah soft skills seperti manajemen waktu, problem solving, dan leadership melalui pelatihan dan aktivitas kolaboratif.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Assya Vet Care",
    description:
      "Assyavet Clinic Website adalah platform digital yang dirancang untuk menghadirkan pengalaman pengguna yang optimal dalam mencari dan mendapatkan layanan kesehatan hewan. Website ini dibangun dengan antarmuka yang intuitif dan responsif, memungkinkan pengguna untuk dengan mudah menjelajahi informasi layanan klinik, mengakses fitur konsultasi online, serta memesan layanan kesehatan hewan secara praktis.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "laravelbladetemplate",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "orange-text-gradient",
      },
      {
        name: "php",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/assyavet.svg",
    // source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
    deployed_link: "https://assyavetclinic.com/",
  },
  {
    name: "Website P3M ( Pusat Penelitian dan Pengabdian Masyarakat )",
    description:
      "Website P3M Politeknik Negeri Jember dirancang sebagai platform informasi yang dinamis dan interaktif untuk mendukung kegiatan penelitian, pengabdian kepada masyarakat, dan pengembangan inovasi di lingkungan Politeknik Negeri Jember. Dibangun dengan teknologi modern, website ini bertujuan untuk memberikan akses yang cepat dan mudah bagi dosen, mahasiswa, serta masyarakat umum dalam mendapatkan informasi terkait program dan kegiatan Pusat Penelitian dan Pengabdian kepada Masyarakat (P3M).",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "phpFramework",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/company/p3m.jpg",
    source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
    deployed_link: "https://p3m.polije.ac.id/",
  },
  {
    name: "Sahabat Radio ",
    description:
      "Website SahabatRadio yang memungkinkan pengguna menikmati berbagai saluran radio secara real-time. Website ini memiliki antarmuka intuitif dengan tampilan yang menarik dan navigasi mudah, sehingga pengguna dapat langsung memilih saluran radio dari halaman utama. Setiap saluran dilengkapi tombol 'Lihat Selengkapnya' untuk memberikan informasi tambahan seperti lokasi dan detail lain yang relevan. Desain situs ini responsif, menyesuaikan tampilannya di berbagai perangkat untuk memastikan kenyamanan pengguna dalam menikmati radio kapan saja dan di mana saja. Bagian footer juga dilengkapi dengan ikon media sosial untuk memperkuat keterhubungan antara platform dan pendengar. Platform ini dikembangkan menggunakan teknologi front-end dan back-end, seperti HTML, CSS, JavaScript, serta menggunakan shoutcast, untuk memastikan performa optimal serta pengalaman pengguna yang maksimal.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "shoutcase",
        color: "orange-text-gradient",
      },
      {
        name: "api",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/sahabat-radio.png",
    source_code_link:
      "https://sahabatradio.online/",
    deployed_link:
      "#",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Tegaralam",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/tegaralam/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "#",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "#",
  },
];

const heroTexts = [
  "Frontend Web Developer",
  500,
  "Freelancer",
  500,
  "Full-Stack Developer",
  500,
  "Backend Developer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
