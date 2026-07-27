# 💸 Smart Cash AI

> Next-generation AI-powered financial dashboard and cash flow management platform.

![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)

Smart Cash AI revolutionizes personal and business finance management by leveraging advanced Artificial Intelligence to analyze, predict, and optimize your cash flow in real-time.

---

## 📑 Table of Contents
- [About the Project](#about-the-project)
- [Core Features](#core-features)
- [Application Flow](#application-flow)
- [Tech Stack Deep Dive](#tech-stack-deep-dive)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About the Project
Traditional financial dashboards show you what happened yesterday. **Smart Cash AI** shows you what will happen tomorrow. By securely connecting to your financial institutions, our platform uses machine learning to categorize transactions, identify spending anomalies, and forecast future cash balances, allowing you to make proactive financial decisions.

> [!NOTE]
> Smart Cash AI is currently in active development. Features are being added rapidly, and the AI models are continuously being optimized for better accuracy.

---

## ✨ Core Features
- **Intelligent Onboarding**: A seamless setup process (`/onboarding`) that securely connects your accounts and instantly begins analyzing your historical data.
- **AI Cash Flow Analysis**: Automated anomaly detection and future balance predictions using powerful AI models.
- **Interactive Financial Dashboard**: Beautiful, real-time charts and metrics powered by **Recharts** and **Framer Motion** for a premium user experience.
- **Enterprise-Grade Security**: Robust authentication powered by **NextAuth.js**, ensuring your financial data is encrypted and securely accessed.
- **Responsive & Accessible UI**: Meticulously crafted components using **Radix UI** and **Tailwind CSS v4**, guaranteeing a flawless experience across desktop, tablet, and mobile.

---

## 🔄 Application Flow
1. **Authentication**: Users begin at the secure login/registration portal.
2. **Onboarding Pipeline**: 
   - **Account Creation**: Registering user profile.
   - **Connection Phase** (`/onboarding/connect`): Linking bank feeds and financial data sources.
   - **Analyzing Phase** (`/onboarding/analyzing`): AI processes historical data to generate initial insights.
3. **The Dashboard**: The main hub featuring the sidebar navigation, real-time charts, transaction feeds, and personalized AI recommendations.

---

## 🛠 Tech Stack Deep Dive

### Frontend Architecture
- **Next.js (App Router)**: Utilizes Server Components for reduced client-side JavaScript, improved SEO, and blazing-fast page loads.
- **React 19**: Leveraging the latest React compiler and hooks for optimal rendering performance.
- **Tailwind CSS (v4)**: Utility-first CSS framework for rapid, consistent, and highly customizable UI design.
- **Radix UI & Shadcn**: Unstyled, accessible component primitives that serve as the foundation for our bespoke design system.
- **Framer Motion**: Delivers fluid micro-interactions and page transitions to make the application feel alive and premium.
- **Recharts & D3**: Composable charting libraries for rendering complex financial data beautifully.

### Backend & Authentication
- **NextAuth.js**: Handles complex authentication flows (OAuth, Credentials) seamlessly within the Next.js ecosystem.
- **Server Actions**: Next.js native server actions to securely handle form submissions (like login/register) without exposing API endpoints.

---

## 🏗 System Architecture

```mermaid
graph TD
    %% Define Styles
    classDef client fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff,rx:8px,ry:8px;
    classDef frontend fill:#14b8a6,stroke:#0d9488,stroke-width:2px,color:#fff,rx:8px,ry:8px;
    classDef backend fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff,rx:8px,ry:8px;
    classDef database fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff,rx:8px,ry:8px;
    classDef ai fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff,rx:8px,ry:8px;

    %% Nodes
    subgraph ClientLayer ["Client Layer"]
        User["User (Browser / Mobile)"]:::client
    end

    subgraph FrontendLayer ["Next.js Frontend (App Router)"]
        UI["UI Components (Radix, Tailwind)"]:::frontend
        Viz["Data Visualization (Recharts)"]:::frontend
        State["Client State (React Hooks)"]:::frontend
    end

    subgraph BackendLayer ["Backend Layer (Next.js Server)"]
        Auth["Authentication (NextAuth.js)"]:::backend
        ServerActions["Server Actions / API Routes"]:::backend
    end

    subgraph DataLayer ["Data & Intelligence Layer"]
        DB[("PostgreSQL Database")]:::database
        ML["AI Analysis Engine (OpenAI/Custom)"]:::ai
    end

    %% Connections
    User -- "Interacts with" --> UI
    UI -- "Renders" --> Viz
    UI -- "Manages" --> State
    
    UI -- "Requests Data / Actions" --> ServerActions
    State -- "Validates Session" --> Auth
    
    ServerActions -- "Queries / Mutates" --> DB
    ServerActions -- "Sends Data for Analysis" --> ML
    ML -- "Returns Insights" --> ServerActions
```

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

> [!IMPORTANT]
> We strongly recommend using Node.js v22+ to ensure maximum compatibility with the latest Next.js App Router and React 19 features.

- Node.js (v18.17.0 or higher, v22+ recommended)
- npm, pnpm, or yarn

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/username/smart-cash-ai-2.git
   cd smart-cash-ai-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

### Environment Variables

> [!WARNING]
> Never commit your `.env.local` file to version control. It contains sensitive API keys and secrets that must be kept private.

Create a `.env.local` file in the root directory. You can use the provided `.env.example` as a template.

```env
# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate_a_strong_random_secret_here"

# Database Connection
DATABASE_URL="postgresql://user:password@localhost:5432/smartcash?schema=public"

# AI Service Keys (If applicable)
OPENAI_API_KEY="sk-..."
```

---

## 📂 Project Structure

```text
smart-cash-ai-2/
├── app/                      # Next.js App Router root
│   ├── layout.tsx            # Global HTML layout and providers
│   ├── page.tsx              # Landing page
│   ├── login/                # Authentication routes
│   └── onboarding/           # Multi-step user onboarding flow
│       ├── register/         
│       ├── connect/          # Bank/Data connection step
│       └── analyzing/        # AI loading/processing screen
├── components/               # React Components
│   ├── dashboard/            # Dashboard specific (Sidebar, Widgets)
│   ├── onboarding/           # Onboarding specific (Shell, Forms)
│   └── ui/                   # Reusable base UI components (Buttons, Inputs)
├── lib/                      # Utility functions and shared logic
│   └── auth.ts               # NextAuth configuration
├── public/                   # Static assets (Images, Fonts, Icons)
├── package.json              # Project dependencies and metadata
├── next.config.js            # Next.js compiler configuration
└── tailwind.config.ts        # Tailwind CSS theme configuration
```

---

## 💻 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode (`localhost:3000`).
- `npm run build`: Builds the app for production to the `.next` folder.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to catch and fix code issues.

---

## 🗺 Roadmap
- [x] Initial setup and Next.js App Router architecture
- [x] Implement secure authentication with NextAuth
- [x] Build multi-step onboarding flow (`/register`, `/connect`, `/analyzing`)
- [ ] Integrate Plaid / Stripe API for live financial data fetching
- [ ] Train and deploy custom ML models for anomaly detection
- [ ] Add exportable financial reports (PDF, Excel, CSV)
- [ ] Push notifications for large transactions or low balance warnings

---

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.