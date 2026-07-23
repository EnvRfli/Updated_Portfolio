import type { Profile } from '../models/profile.types';
import type { Experience } from '../models/experience.types';


export const mockProfile: Record<'en' | 'id', Profile> = {
  en: {
    name: "M. Rafli Agusta Rizalfa",
    role: "Software Engineer (Mobile & Frontend)",
    bio: "Adaptable Software Engineer with over 3 years of experience specializing in building scalable mobile and web applications. Proven track record of bridging the gap between full-stack web development (Laravel, React.js, TypeScript) and cross-platform mobile engineering (Flutter). Recognized for architectural problem-solving, rapid project onboarding, and delivering core enterprise systems from end to end.",
    email: "mrafliagusta@gmail.com",
    phone: "+62 85764278342",
    location: "Bandar Lampung, Lampung, Indonesia",
    socials: {
      linkedin: "https://www.linkedin.com/in/rafli-rizalfa",
      portfolio: "https://portfolio.example.com"
    }
  },
  id: {
    name: "M. Rafli Agusta Rizalfa",
    role: "Software Engineer (Mobile & Frontend)",
    bio: "Software Engineer yang adaptif dengan pengalaman lebih dari 3 tahun berspesialisasi dalam membangun aplikasi seluler dan web yang scalable. Rekam jejak terbukti dalam menjembatani kesenjangan antara pengembangan web full-stack (Laravel, React.js, TypeScript) dan rekayasa seluler lintas platform (Flutter). Dikenal atas pemecahan masalah arsitektural, orientasi proyek yang cepat, dan penyampaian sistem perusahaan inti dari awal hingga akhir.",
    email: "mrafliagusta@gmail.com",
    phone: "+62 85764278342",
    location: "Bandar Lampung, Lampung, Indonesia",
    socials: {
      linkedin: "https://www.linkedin.com/in/rafli-rizalfa",
      portfolio: "https://portfolio.example.com"
    }
  }
};

export const mockExperiences: Record<'en' | 'id', Experience[]> = {
  en: [
    {
      id: "1",
      company: "FAN Integrasi Teknologi",
      role: "Software Engineer",
      startDate: "Feb 2025",
      endDate: "Jul 2026",
      description: [
        "Engineered 'ROSCHA,' a core national train maintenance and operational application for PT Kereta Api Indonesia (KAI).",
        "Architected the Flutter mobile application, implementing state management via Provider, push notifications via FCM, and direct application deep linking.",
        "Developed and maintained the ROSCHA Web CMS utilizing React and TypeScript.",
        "Assisted colleagues in understanding and implementing complex frontend logic, fostering collaboration with DevOps teams to integrate automated versioning."
      ],
      techStack: ["Flutter", "React.js", "TypeScript", "Laravel", "PostgreSQL", "Tailwind"]
    },
    {
      id: "2",
      company: "StafBook (YC W22)",
      role: "Software Engineer",
      startDate: "Jul 2024",
      endDate: "Dec 2024",
      description: [
        "Successfully onboarded and accelerated the development of an existing legacy codebase, delivering critical features and stabilizing the platform within a strict 5-month timeline.",
        "Led the digital transformation of over 30 complex inspection and certification document forms into dynamic, responsive web interfaces.",
        "Streamlined certification workflows by optimizing backend-to-frontend logic, reducing manual data input errors."
      ],
      techStack: ["Laravel", "MySQL", "Bootstrap"]
    },
    {
      id: "3",
      company: "Sumatera Institute of Technology (ITERA)",
      role: "Lecturer Assistant - IT Projects",
      startDate: "Aug 2023",
      endDate: "Dec 2023",
      description: [
        "Mentored students in client-facing IT project development, guiding them from requirement gathering to final deployment.",
        "Facilitated training sessions on SDLC and SSDLC methodologies, implementing Agile/Scrum sprints.",
        "Managed stakeholder communications to ensure project deliverables strictly aligned with client expectations."
      ],
      techStack: ["HTML", "CSS", "JS", "PHP", "MySQL"]
    },
    {
      id: "4",
      company: "PT Andalas Media Group",
      role: "Full Stack Website Developer",
      startDate: "Dec 2022",
      endDate: "Jul 2023",
      description: [
        "Developed and deployed an end-to-end online news media portal for the Tulang Bawang Barat region.",
        "Implemented crucial SEO and image optimization strategies, successfully ranking the 'andalasnet' platform at the top of Google Search results.",
        "Integrated content management features utilizing the CKEditor Rich Editor API."
      ],
      techStack: ["Laravel", "Bootstrap", "MySQL"]
    },
    {
      id: "5",
      company: "PT Binokular Media Utama",
      role: "Front End Web Developer and Data Analyst - Intern",
      startDate: "Jul 2022",
      endDate: "Aug 2022",
      description: [
        "Engineered a microservices architecture by setting up RabbitMQ message queues to establish reliable asynchronous communication.",
        "Analyzed large datasets using Python, storing processed information efficiently into SQL databases.",
        "Visualized complex analytical data into interactive dashboards using Chart.js."
      ],
      techStack: ["Laravel", "RabbitMQ", "Python"]
    }
  ],
  id: [
    {
      id: "1",
      company: "FAN Integrasi Teknologi",
      role: "Software Engineer",
      startDate: "Feb 2025",
      endDate: "Jul 2026",
      description: [
        "Membangun 'ROSCHA', aplikasi inti pemeliharaan dan operasional kereta api nasional untuk PT Kereta Api Indonesia (KAI).",
        "Merancang arsitektur aplikasi seluler Flutter, mengimplementasikan manajemen state via Provider, push notification via FCM, dan deep linking aplikasi secara langsung.",
        "Mengembangkan dan memelihara CMS Web ROSCHA menggunakan React dan TypeScript.",
        "Membantu rekan kerja dalam memahami dan mengimplementasikan logika frontend yang kompleks, mendorong kolaborasi dengan tim DevOps untuk mengintegrasikan versioning otomatis."
      ],
      techStack: ["Flutter", "React.js", "TypeScript", "Laravel", "PostgreSQL", "Tailwind"]
    },
    {
      id: "2",
      company: "StafBook (YC W22)",
      role: "Software Engineer",
      startDate: "Jul 2024",
      endDate: "Des 2024",
      description: [
        "Berhasil melakukan onboarding dan mempercepat pengembangan codebase legacy yang sudah ada, menghadirkan fitur-fitur kritis dan menstabilkan platform dalam waktu 5 bulan yang ketat.",
        "Memimpin transformasi digital atas lebih dari 30 form dokumen inspeksi dan sertifikasi kompleks menjadi antarmuka web dinamis yang responsif.",
        "Merampingkan alur kerja sertifikasi dengan mengoptimalkan logika backend-ke-frontend, mengurangi kesalahan input data manual."
      ],
      techStack: ["Laravel", "MySQL", "Bootstrap"]
    },
    {
      id: "3",
      company: "Institut Teknologi Sumatera (ITERA)",
      role: "Asisten Dosen - Proyek IT",
      startDate: "Agt 2023",
      endDate: "Des 2023",
      description: [
        "Membimbing mahasiswa dalam pengembangan proyek IT yang berhadapan langsung dengan klien, mulai dari pengumpulan kebutuhan hingga deployment akhir.",
        "Memfasilitasi sesi pelatihan metodologi SDLC dan SSDLC, mengimplementasikan sprint Agile/Scrum.",
        "Mengelola komunikasi dengan pemangku kepentingan untuk memastikan hasil proyek selaras dengan harapan klien."
      ],
      techStack: ["HTML", "CSS", "JS", "PHP", "MySQL"]
    },
    {
      id: "4",
      company: "PT Andalas Media Group",
      role: "Full Stack Website Developer",
      startDate: "Des 2022",
      endDate: "Jul 2023",
      description: [
        "Mengembangkan dan melakukan deployment portal media berita online end-to-end untuk wilayah Tulang Bawang Barat.",
        "Mengimplementasikan strategi SEO dan optimasi gambar yang krusial, berhasil memeringkatkan platform 'andalasnet' di posisi teratas hasil Google Search.",
        "Mengintegrasikan fitur manajemen konten menggunakan CKEditor Rich Editor API."
      ],
      techStack: ["Laravel", "Bootstrap", "MySQL"]
    },
    {
      id: "5",
      company: "PT Binokular Media Utama",
      role: "Front End Web Developer & Data Analyst - Intern",
      startDate: "Jul 2022",
      endDate: "Agt 2022",
      description: [
        "Merancang arsitektur microservices dengan menyiapkan antrean pesan RabbitMQ untuk membangun komunikasi asinkron yang andal.",
        "Menganalisis dataset besar menggunakan Python, menyimpan informasi yang telah diproses secara efisien ke dalam database SQL.",
        "Memvisualisasikan data analitik yang kompleks ke dalam dasbor interaktif menggunakan Chart.js."
      ],
      techStack: ["Laravel", "RabbitMQ", "Python"]
    }
  ]
};


export const technicalSkills = {
  mobile: ["Flutter", "React Native", "Provider", "FCM", "Deep Linking"],
  frontend: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Vite"],
  backend: ["Laravel", "Golang", "Python", "MySQL", "PostgreSQL", "REST API"],
  tools: ["Microservices", "RabbitMQ", "Git", "Agile", "Figma", "Arduino IDE / IoT"]
};
