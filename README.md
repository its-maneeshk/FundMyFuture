# FundMyFuture (ScholaVerify)

An AI-Powered Scholarship Verification & Opportunity Aggregation Platform  
*Automating scholarship discovery, scam detection, and verification using Python, Flask, Playwright, Google Gemini API, and GitHub Actions.*

[![GitHub Upstream](https://img.shields.io/badge/Repository-its--maneeshk%2FFundMyFuture-1E3A8A?style=flat-square&logo=github)](https://github.com/its-maneeshk/FundMyFuture.git)
[![License: MIT](https://img.shields.io/badge/License-MIT-0284C7.style=flat-square)](LICENSE)

---

## Project Overview

**FundMyFuture** (branded as **ScholaVerify**) optimizes the process of identifying legitimate student financial aid opportunities by addressing three systematic challenges:

* **Information Overload:** Automatically aggregates listings from vetted academic and institutional portals.
* **Scam Proliferation:** Evaluates data vectors using the Google Gemini API to flag fraudulent listings, predatory application fee mandates, and unverified domain registrations.
* **Operational Overhead:** Eliminates manual updates via automated data synchronization workflows executed by GitHub Actions cron pipelines.

---

## Tech Stack & Architecture

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS | High performance, modular state management, and an enterprise-grade UI theme. |
| **Backend API** | Python 3.9+, Flask, SQLAlchemy | Lightweight micro-framework optimizing RESTful routing, ORM execution, and AI package bindings. |
| **AI Verification Engine** | Google Gemini API (`gemini-2.5-flash`) | Strict JSON structured outputs providing deterministic trust scores and risk flags. |
| **Scraping Infrastructure** | BeautifulSoup & Playwright | BeautifulSoup for declarative static markup; Playwright for dynamic, client-side rendered Single Page Applications (SPAs). |
| **CI/CD & Automation** | GitHub Actions | Orchestrates scheduled daily pipeline ingestion, model routing, and persistent storage updates. |
| **Deployment Infrastructure** | Render (API Backend), Netlify (Static UI Frontend) | Automated git-triggered continuous deployment (CD) architecture. |

---

## System Architecture & Data Flow

```text
[ Data Sources / Web Scrapers ]
               │
               ▼
[ SQLite Database (SQLAlchemy ORM) ]
               │
               ▼
  [ Google Gemini AI Pipeline ]  ◄── (Scam Detection & Trust Scoring)
               │
               ▼
   [ Flask REST API Gateway ]
               │
               ▼
  [ React + Tailwind Frontend ]
```

### Core Architecture Layers

* **Data Ingestion Layer:** Scrapers extract raw scholarship listings (title, provider, eligibility, deadline, amount) from web sources.
* **Storage Layer:** Listings are stored in a SQLite database using SQLAlchemy models, ensuring data persists across application restarts.
* **AI Analysis Engine:** When new listings are processed or manually flagged, the backend passes title and description payloads to the Google Gemini API (`gemini-2.5-flash`) using strict JSON structured outputs to evaluate fraud risk and assign a `trust_score` (0–100%).
* **Presentation Layer:** A feature-based React application fetches data from Flask via Axios and renders it using an enterprise-grade UI theme.

---

## Enterprise Multi-Developer Git Workflow

Development follows a strict multi-developer framework utilizing forking, feature branching, structural verification, and pull requests.

### 1. Repository Synchronization & Setup

```bash
# Clone the isolated fork locally
git clone https://github.com/YOUR_USERNAME/FundMyFuture.git
cd FundMyFuture

# Establish connection to the primary single source of truth (SSOT)
git remote add upstream https://github.com/its-maneeshk/FundMyFuture.git

# Verify configured remotes
git remote -v
```

### 2. Feature Branching Pipeline
Commits must never be executed directly against the main branch. Local workspaces must pull the latest upstream revisions before initializing features:

```bash
# Pull upstream main changes to local tracking branch
git checkout main
git fetch upstream
git merge upstream/main

# Initialize an isolated, purpose-driven feature branch
git checkout -b feature/gemini-verification

# Stage changes, record progress, and commit
git add .
git commit -m "feat(api): implement gemini prompt verification pipeline"

# Push the localized branch to the origin remote fork
git push origin feature/gemini-verification
```

### 3. Conventional Commit Standards
All branch commits must adhere strictly to the Angular Commit Message Format specification:

```text
feat(<scope>):   A new application feature (e.g., feat(api): add deadline filtering endpoint)
fix(<scope>):    A runtime or logic bug fix (e.g., fix(scraper): resolve dynamic DOM timeout in playwright)
docs(<scope>):   Documentation updates (e.g., docs(readme): add workflow guidelines)
style(<scope>):  Formatting, structural layout, or visual design changes devoid of operational logic
refactor(<scope>): Code architectural optimizations missing explicit feature additions or bug resolutions
```

---

## Role Matrix & Operational Responsibilities

### Member A: Backend & Infrastructure Lead
* Architectural development of the Flask REST API and SQLite/SQLAlchemy schema bindings.
* Prompt engineering optimization and structured JSON payload handling for the Google Gemini API trust matrix.
* Constructing scalable data ingestion engines (BeautifulSoup/Playwright) and scheduling cron-based GitHub Actions workflows.

### Member B: Frontend & UX Lead
* Interface construction utilizing a responsive component approach via React and Tailwind CSS.
* State synchronization, HTTP communication layers (Axios), data filtering matrices, and dynamic DOM rendering.
* User interface feedback indicators including trust tiering badges, threat matrices, and notification modules.

---

## Getting Started

### Prerequisites
* Python 3.9+ Runtime Environment
* Node.js Engine & Playwright Platform Binaries

### Local Initialization

```bash
# 1. Clone project files locally
git clone https://github.com/its-maneeshk/FundMyFuture.git
cd FundMyFuture

# 2. Configure isolated python environment
python -m venv venv
source venv/bin/activate  # Windows Environments: venv\Scripts\activate

# 3. Resolve system-wide library dependencies
pip install -r requirements.txt
playwright install

# 4. Generate local runtime configuration (.env)
echo "GEMINI_API_KEY=your_gemini_key_here" > .env
echo "FLASK_ENV=development" >> .env

# 5. Boot the integrated Flask local development server
python app.py
```

---

## System Overview

![FundMyFuture Application Dashboard](https://github.com/its-maneeshk/FundMyFuture/blob/dbe3053b4f592d24841426d0a833a760d7519a7f/frontend/public/ProjectScreenshot/Homepage.png)
