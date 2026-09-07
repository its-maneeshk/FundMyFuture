### Project Stracture Design for frontend.
```bash
FundMyFuture/
│
├── backend/
│   ├── run.py                     # Entry point (Flask API server)
│   └── requirements.txt           # Python dependencies
│
└── frontend/
    ├── public/
    │   └── favicon.ico
    ├── src/
    │   ├── components/            # Layout Components
    │   │   └── layout/
    │   │       ├── MainLayout.jsx # App wrapper (Navbar + Page + Footer)
    │   │       ├── Navbar.jsx     # Top Header Navigation
    │   │       └── Footer.jsx     # Bottom Contact Footer
    │   │
    │   ├── features/              # Feature Modules
    │   │   └── dashboard/
    │   │       ├── components/
    │   │       │   ├── HeroBanner.jsx    # Top Banner Component
    │   │       │   ├── CategoryHub.jsx   # Interactive Category Cards
    │   │       │   └── ScholarshipCard.jsx # Scholarship Listing Card
    │   │       └── pages/
    │   │           └── DashboardPage.jsx # Main Page View
    │   │
    │   ├── services/              # API Communication
    │   │   ├── api.js             # Axios base configuration
    │   │   └── scholarshipService.js # API call functions
    │   │
    │   ├── App.jsx                # Root router container
    │   ├── main.jsx               # Entry point
    │   └── index.css              # Tailwind CSS styles
    │
    ├── package.json
    └── vite.config.js
```