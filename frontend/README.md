### Project Stracture Design for frontend.
```bash
frontend/src/
├── assets/                  # Logos, badges, and static graphics
├── components/              # Shared global UI components
│   ├── common/              # Buttons, Loaders, Badges, Modals
│   │   ├── TrustBadge.jsx   # AI Score Badge (Green/Yellow/Red)
│   │   └── LoadingSpinner.jsx
│   └── layout/              # Structural wrappers
│       ├── MainLayout.jsx   # Contains persistent Navbar, Footer, <Outlet />
│       ├── Navbar.jsx       # Header navigation bar
│       └── Footer.jsx       # Footer section
├── context/                 # Global state providers
│   └── ScholarshipContext.jsx # Search query, filters, and global listings state
├── features/                # Domain-driven modular features
│   ├── dashboard/           # Main listings grid & filter views
│   │   ├── components/      # ScholarshipCard.jsx, FilterSidebar.jsx
│   │   └── pages/           # DashboardPage.jsx
│   ├── scholarship-detail/  # Single scholarship view + AI breakdown
│   │   └── pages/           # DetailPage.jsx
│   └── error/               # Fallback UI
│       └── pages/           # NotFoundPage.jsx, ErrorBoundaryPage.jsx
├── routes/                  # Centralized Router Configuration
│   └── appRouter.jsx        # Data router definitions using createBrowserRouter
├── services/                # Backend API communication
│   ├── api.js               # Axios instance with base URL & interceptors
│   └── scholarshipService.js# Methods: getScholarships(), getScholarshipById()
├── App.jsx                  # Root App context provider wrapper
├── index.css                # Tailwind import directive (@import "tailwindcss";)
└── main.jsx                 # Entry point with RouterProvider
```