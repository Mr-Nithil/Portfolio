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
    overview:
      "A scalable Flutter blog platform built with Clean Architecture, focused on maintainability, offline readiness, and real-time content synchronization.",
    keyFeatures: [
      "Secure authentication and session-aware blog workflows.",
      "Create, edit, and publish blog posts with image upload support.",
      "Real-time data synchronization with responsive feed refresh behavior.",
      "Offline-friendly user experience with local persistence fallback.",
      "Reusable UI components with consistent Material and Cupertino styling.",
    ],
    techStackDetails: [
      "Flutter and Dart for cross-platform mobile UI and interaction layers.",
      "Supabase for authentication, storage, and real-time data operations.",
      "Bloc/Cubit for predictable state management and UI state transitions.",
      "get_it for dependency injection and modular service wiring.",
      "Hive for local caching, draft persistence, and offline access patterns.",
    ],
    architecturePoints: [
      "Organized into Presentation, Domain, and Data layers using Clean Architecture.",
      "Feature modules communicate via use-cases and repository contracts.",
      "Service abstractions keep state, storage, and network responsibilities isolated.",
    ],
    additionalInfoPoints: [
      "Built as an individual project to practice scalable Flutter architecture patterns.",
      "Prioritized testability and long-term maintainability for future feature growth.",
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
    overview:
      "A full-stack task management platform with Flutter mobile and React web clients, backed by secure and scalable REST APIs.",
    keyFeatures: [
      "Role-based access control supporting Admin and User workflows.",
      "Task lifecycle management with assignment, tracking, and status updates.",
      "Cross-client consistency between mobile and web user flows.",
      "JWT-based authentication for secure API access.",
      "Containerized development and deployment setup with Docker.",
    ],
    techStackDetails: [
      "Flutter for mobile task workflows and on-the-go productivity.",
      "React for browser-based dashboard and management views.",
      "C# and .NET Core for backend APIs and business logic layers.",
      "Entity Framework Core with PostgreSQL for relational persistence.",
      "AutoMapper for DTO and domain mapping consistency.",
      "Docker for reproducible environments across services.",
    ],
    architecturePoints: [
      "Backend follows layered architecture with service and repository abstractions.",
      "Shared API contracts align behavior across Flutter and React clients.",
      "Security, validation, and data access are separated for maintainability.",
    ],
    additionalInfoPoints: [
      "Project is actively evolving with planned feature expansions.",
      "Designed to scale to multi-role team collaboration use cases.",
    ],
    github: "https://github.com/Mr-Nithil/Task-Manager-WebApp",
    demo: "",
  },
  {
    id: "railway-ticket-verification",
    year: 2025,
    title: "Railway Ticket Verification System with Fraud Detection",
    description:
      "A production-oriented mobile system enabling railway inspectors to verify tickets via QR scanning with real-time validation, fraud detection, and full audit traceability.",
    fullDescription:
      "Developed a robust Flutter-based mobile application designed for railway inspectors to streamline ticket verification workflows in real-world operational environments. The system enables fast and reliable QR-based ticket validation with both real-time backend verification and offline-friendly capabilities.\n\nIntegrated Firebase Authentication and Cloud Firestore for secure checker identity management, while leveraging PostgreSQL for handling large-scale booking, passenger, and schedule datasets. Implemented a fraud detection layer that evaluates ticket validity against schedule mismatches, duplicate usage, and abnormal verification patterns, presenting clear status indicators (Valid, Rejected, Fraud, Pending) for quick decision-making.\n\nEngineered a complete verification lifecycle including approval/rejection actions, checker remarks, timestamps, and persistent verification history to ensure accountability and audit readiness. Special focus was given to error handling, permission management, and responsive UI design to support field conditions with limited connectivity.\n\nThe project was developed as part of final year research and contributed to an IEEE LATINCOM 2025 publication on explainable anomaly detection using LLMs.",
    techStack: [
      "Flutter",
      "Dart",
      "Cloud Firestore",
      "PostgreSQL",
      "Provider",
      "Mobile Scanner",
      "SharedPreferences",
      "Firebase Authentication",
    ],
    images: [
      "projects/fuelback-2.svg",
      "projects/qrpay-2.svg",
      "projects/ble-2.svg",
    ],
    overview:
      "A field-ready railway ticket verification mobile application built for inspectors, combining QR-based validation, intelligent fraud detection, and accountability-driven workflows with both online and offline support.",
    keyFeatures: [
      "Secure checker authentication and session management using Firebase Authentication.",
      "Pre-verification train schedule selection to contextualize ticket validation.",
      "High-performance QR-based ticket scanning with runtime permission handling.",
      "Real-time ticket validation against booking, passenger, and schedule data.",
      "Fraud detection indicators with clear UI states (Valid, Rejected, Fraud, Pending).",
      "Approval and rejection workflow with checker remarks and timestamp tracking.",
      "Comprehensive ticket module displaying passenger, journey, and payment details.",
      "Verification history module ensuring traceability and audit compliance.",
      "Offline-friendly data persistence for improved reliability in low-connectivity environments.",
    ],
    techStackDetails: [
      "Flutter & Dart for building a high-performance, cross-platform mobile application with responsive UI.",
      "Provider (ChangeNotifier) for lightweight and scalable state management.",
      "Firebase Authentication for secure login, session handling, and role-based access.",
      "Cloud Firestore for managing checker profiles and lightweight operational data.",
      "PostgreSQL as the core relational database for bookings, schedules, passenger records, and verification logs.",
      "Mobile Scanner for efficient QR code detection and decoding in real-time.",
      "Permission Handler for managing camera and runtime permissions gracefully.",
      "SharedPreferences for local persistence of selected schedules and contextual data.",
    ],
    architecturePoints: [
      "Feature-first modular architecture enabling independent scaling of verification, authentication, and history modules.",
      "Layered architecture: Presentation (UI) → Controller Layer (State & Business Logic) → Repository Layer (Data Abstraction) → Service Layer (External Systems).",
      "Repository pattern used to abstract data sources (Firebase, PostgreSQL, Local Storage) for clean separation of concerns.",
      "Service layer encapsulates integrations with Firebase services, database APIs, and device capabilities (camera, storage, permissions).",
      "Designed for maintainability, testability, and extensibility with clear separation between UI and business logic.",
    ],
    additionalInfoPoints: [
      "Developed as a Final Year Project focusing on real-world railway inspection workflows.",
      "Designed to operate reliably in field environments with intermittent connectivity.",
      "Emphasis on usability, speed, and decision clarity for inspectors under time constraints.",
      "Research insights from this system contributed to IEEE LATINCOM 2025 publication on explainable anomaly detection.",
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
    overview:
      "A personal safety companion app focused on emergency support, live location sharing, and awareness-driven safety features.",
    keyFeatures: [
      "Secure user authentication and profile-aware safety workflows.",
      "Live location sharing for emergency context and trusted contacts.",
      "Quick access emergency calling features.",
      "Nearby emergency place discovery support.",
      "Safety tips and educational content modules for prevention awareness.",
    ],
    techStackDetails: [
      "Flutter and Dart for a smooth mobile-first UI and interaction layer.",
      "Firebase Authentication for secure login and identity management.",
      "Cloud Firestore for user and safety-related operational data.",
      "Firebase Core for app-level backend service integration.",
    ],
    architecturePoints: [
      "Feature modules separate emergency flows, location handling, and education content.",
      "Service-based Firebase integration keeps data concerns isolated from UI.",
      "Reusable UI components maintain consistency across core safety features.",
    ],
    additionalInfoPoints: [
      "Built as an individual mobile project with practical safety-use focus.",
      "Designed for extension with notifications and enhanced incident workflows.",
    ],
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
    overview:
      "A multi-tenant stall reservation platform for the Colombo International Book Fair, implemented with a microservices architecture.",
    keyFeatures: [
      "Service-based reservation workflow with clear domain boundaries.",
      "API gateway routing and centralized access entry point.",
      "JWT authentication and role-aware authorization flows.",
      "Dedicated notification capabilities for reservation status events.",
      "Containerized local setup for predictable service orchestration.",
    ],
    techStackDetails: [
      "Node.js and Express.js for backend service implementation.",
      "MongoDB and Mongoose for document-based data storage and modeling.",
      "JWT for session and route-level access protection.",
      "Nodemailer for service-driven email communications.",
      "Docker and Docker Compose for multi-service environment management.",
    ],
    architecturePoints: [
      "API Gateway fronts four independent services: Auth, Reservation, Stall, Notification.",
      "Each service owns its business rules and data responsibilities.",
      "Containerized orchestration enables isolated development and deployment.",
    ],
    additionalInfoPoints: [
      "Implemented as a group project for a real event management use case.",
      "Designed with scalability in mind for high-traffic reservation windows.",
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
    overview:
      "An Academic Portal module within a faculty ERP ecosystem, focused on request workflows and coordinated communication between students, teachers, and staff.",
    keyFeatures: [
      "Request management for student-teacher and staff coordination.",
      "Workflow-aware endpoints for academic process handling.",
      "Domain-specific repositories for clear data access boundaries.",
      "Separation of concerns for maintainable and testable backend modules.",
      "Support for structured coordination across batch and user contexts.",
    ],
    techStackDetails: [
      "C# and ASP.NET Core for API and service implementation.",
      "Entity Framework Core with SQLite for persistence and data access.",
      "AutoMapper for controlled transformation between DTO and domain models.",
      "xUnit for module-level validation and quality checks.",
      "Blazor and Swagger for integration touchpoints and API documentation.",
    ],
    architecturePoints: [
      "Repository and Unit of Work patterns structure the data access layer.",
      "Separate repositories for Student, Teacher, Batch, and Request entities.",
      "Service boundaries keep academic workflows consistent and maintainable.",
    ],
    additionalInfoPoints: [
      "Developed as part of a broader 5-portal faculty ERP group project.",
      "Built to support future portal integrations without major refactors.",
    ],
    github: "https://github.com/PereraKRD/ERPProject",
    demo: "",
  },
];

export const projects = [...projectData].sort((a, b) => b.year - a.year);
