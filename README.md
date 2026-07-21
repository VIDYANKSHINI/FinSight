# FinSightAI

AI-Powered Financial Intelligence for Rural Micro-Enterprises.

![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-Active-success)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

---

## Overview

A brief explanation of:
- **What the project solves:** Overcomes the lack of formal credit histories for rural micro-enterprises by leveraging digital transaction proxies.
- **Why it exists:** To generate reliable cash flow forecasts and risk profiles, connecting grant-based interventions with institutional finance.
- **Who it is for:** Rural micro-enterprises (SHGs, FPOs) and field officers/financial institutions.

---

## Features

- AI Cash Flow Prediction (30, 60, and 90-day horizons)
- Explainable AI (transparent reasoning for predictions)
- Intelligent Risk Flagging & Financial Health Score (0-100)
- AI Recommendation & Intervention Engine

---

## Demo

Live Website:
https://fin-sight-gules-one.vercel.app

Video Demo:
(Link to be added)

Screenshots:

<p align="center">
  <img src="public/dashboard-screenshot.png" width="800">
</p>

---

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS

### Backend
- Node.js
- NextAuth.js

### AI / ML
- Python
- Scikit-learn
- FastAPI

### Cloud
- Vercel
- GitHub

---

## Project Structure

```
FinSight/
│
├── app/                  
├── components/           
├── lib/                  
├── public/               
├── styles/               
├── README.md
└── package.json
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/VIDYANKSHINI/FinSight.git
```

### Navigate

```bash
cd FinSight
```

### Install Dependencies

```bash
pnpm install
```

### Run

```bash
npm run dev
```

---

## Usage

1. Sign in securely using Google OAuth.
2. Select your user type (Micro-Enterprise or Field Officer).
3. Connect your financial data sources.
4. View real-time cash flow predictions and financial health scores on the dashboard.
5. Review AI-generated recommendations and risk alerts.

---

## Workflow

```
User
   │
   ▼
Next.js Frontend
   │
   ▼
NextAuth (Google Login)
   │
   ▼
Dashboard (Data Aggregation)
   │
   ▼
AI Risk & Prediction Engine
   │
   ▼
Actionable Insights Displayed
```

---

## Screenshots

Home

<img src="public/hero-landscape.png" width="600">

Dashboard

<img src="public/dashboard-screenshot.png" width="600">

---

## Performance

- Response Time: <300ms
- Designed for low-network conditions (Offline capabilities planned)

---

## Future Improvements

- Full Mobile App Integration
- Multi-language Support for rural areas
- Deeper Climate & Market Risk Integration
- Direct Bank/Lender API Integration

---

## Contributing

1. Fork Repository
2. Create Feature Branch

```bash
git checkout -b feature/new-feature
```

3. Commit Changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature/new-feature
```

5. Open Pull Request

---

## Authors

**VIDYANKSHINI**

GitHub:
https://github.com/VIDYANKSHINI

---

## License

MIT License

---

## Acknowledgements

- NABARD Hackathon @ GFF 2026
- Next.js
- Tailwind CSS
- Vercel