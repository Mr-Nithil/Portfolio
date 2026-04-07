const projectData = [
  {
    id: "flutter-fullstack-blog",
    year: 2026,
    title: "Flutter Full Stack Blog App",
    description:
      "A scalable blog platform built with Flutter and Clean Architecture, with real-time data handling and offline capabilities.",
    fullDescription:
      "Developed as an individual project using Clean Architecture with Presentation, Domain, and Data layers to ensure maintainability and testability. Implemented authentication, blog creation, image uploads, and real-time data synchronization using Supabase. Applied Bloc for state management and GetIt for dependency injection to achieve a modular architecture. Integrated offline capabilities using Hive and optimized data synchronization with network state handling. Designed reusable Material and Cupertino UI components ensuring pixel-perfect rendering and a consistent user experience across screens.",
    techStack: ["Flutter", "Dart", "Supabase", "Bloc/Cubit", "get_it", "Hive"],
    images: [
      "projects/fuelback-1.svg",
      "projects/fuelback-2.svg",
      "projects/fuelback-3.svg",
    ],
    github: "https://github.com/Mr-Nithil/blog_app",
    demo: "",
  },
  {
    id: "task-manager-fullstack",
    year: 2026,
    title: "Task Manager Full Stack Application",
    description:
      "An ongoing full-stack task management system with Flutter mobile and React web clients backed by clean REST APIs.",
    fullDescription:
      "Designed and implemented a full-stack task management system with both Flutter mobile and React web clients. Built scalable RESTful APIs using Clean Architecture with Repository and Service patterns. Implemented JWT-based authentication and role-based authorization for Admin and User roles. Integrated PostgreSQL with Entity Framework Core including DTO mapping and validation. Developed Flutter UI components and integrated APIs for a seamless task management experience. Containerized all services using Docker and Docker Compose for consistent deployment.",
    techStack: [
      "Flutter",
      "React",
      "C#",
      ".NET Core",
      "EF Core",
      "PostgreSQL",
      "AutoMapper",
      "Docker",
      "JWT",
    ],
    images: [
      "projects/qrpay-1.svg",
      "projects/qrpay-2.svg",
      "projects/qrpay-3.svg",
    ],
    github: "https://github.com/Mr-Nithil/Task-Manager-WebApp",
    demo: "",
  },
  {
    id: "railway-ticket-verification",
    year: 2025,
    title: "Railway Ticket Verification with Fraud Detection",
    description:
      "A field-ready ticket verification app enabling real-time QR scanning, fraud alerts, and full verification traceability.",
    fullDescription:
      "Developed a Flutter mobile application enabling railway inspectors to perform real-time ticket verification through QR code scanning. Implemented a backend integration workflow with PostgreSQL and Firebase services to validate bookings instantly, trigger fraud alerts, and update ticket verification status in the field. Designed a reliable verification flow with robust error handling, permission management, and a responsive UI to support fast, accurate inspector decisions. Added approval and rejection actions, checker remarks, and verification history to ensure end-to-end traceability and audit readiness. Research from this project contributed to an IEEE LATINCOM 2025 conference paper on explainable anomaly detection using LLMs.",
    techStack: [
      "Flutter",
      "Dart",
      "PostgreSQL",
      "Firebase",
      "Cloud Firestore",
      "QR Scanner",
    ],
    images: [
      "projects/fuelback-2.svg",
      "projects/qrpay-2.svg",
      "projects/ble-2.svg",
    ],
    github:
      "https://github.com/Mr-Nithil/ruh_fyp_railway_ticket_verification_app",
    demo: "https://www.linkedin.com/posts/nithil-sheshan-4a3945210_flutter-dart-firebase-activity-7442473107270868992-gKJN/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWIVHsBQyvJg7MFpZpjndpUXN6v4s4fnlE",
  },
  {
    id: "safety-companion-app",
    year: 2025,
    title: "Safety Companion Mobile App",
    description:
      "A personal safety app with SOS-focused features, live location sharing, and emergency discovery capabilities.",
    fullDescription:
      "Built as an individual project featuring Firebase Authentication and Cloud Firestore for secure user data management. Developed 4 core features: live location sharing, emergency calling, safety tips and educational content, and nearby emergency place discovery. Designed responsive UIs using Material components, translating feature requirements into functional and user-friendly screens.",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Core",
    ],
    images: ["projects/ble-1.svg", "projects/ble-2.svg", "projects/ble-3.svg"],
    github: "https://github.com/Mr-Nithil/safety_companion",
    demo: "",
  },
  {
    id: "stall-reservation-system",
    year: 2024,
    title: "Stall Reservation Management System",
    description:
      "A multi-tenant stall reservation platform for the Colombo International Book Fair, built on a microservices architecture.",
    fullDescription:
      "Designed and built as a group project for the Colombo International Book Fair. Architected a microservices system with an API Gateway and four independent services: Auth, Reservation, Stall, and Notification. Implemented JWT-based authentication and role-based authorization across services. Developed scalable backend services with strong separation of concerns and containerized all services using Docker Compose for orchestration.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
      "Docker",
      "Docker Compose",
    ],
    images: [
      "projects/fuelback-1.svg",
      "projects/fuelback-2.svg",
      "projects/fuelback-3.svg",
    ],
    github: "https://github.com/lasith54/Bookfair-Stall-Management-System",
    demo: "",
  },
  {
    id: "erp-academic-portal",
    year: 2024,
    title: "ERP System – Academic Portal",
    description:
      "The Academic Portal module of a faculty-wide ERP system, managing academic tasks and student-teacher workflows.",
    fullDescription:
      "Developed the Academic Portal as part of a larger group project building a 5-portal Faculty ERP system. Implemented the Request Management service with RESTful API endpoints handling student-teacher communication, batch management, and staff coordination workflows. Architected the data access layer using Repository and Unit of Work patterns with Entity Framework Core, implementing 6 domain repositories (Student, Teacher, Batch, StudentRequest, TeacherRequest, StaffRequest) to ensure separation of concerns and testability.",
    techStack: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQLite",
      "AutoMapper",
      "xUnit",
      "Blazor",
      "Swagger",
    ],
    images: [
      "projects/qrpay-1.svg",
      "projects/ble-1.svg",
      "projects/fuelback-3.svg",
    ],
    github: "https://github.com/PereraKRD/ERPProject",
    demo: "",
  },
];

export const projects = [...projectData].sort((a, b) => b.year - a.year);
