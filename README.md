# 🎓 FundMyFuture (ScholaVerify)

> **An AI-Powered Scholarship Verification & Opportunity Aggregation Platform**  
> *Automating scholarship discovery, scam detection, and verification using Python, Flask, Playwright, Google Gemini API, and GitHub Actions.*

[![GitHub Upstream](https://img.shields.io/badge/Repository-its--maneeshk%2FFundMyFuture-1E3A8A?style=flat-square&logo=github)](https://github.com/its-maneeshk/FundMyFuture.git)
[![License: MIT](https://img.shields.io/badge/License-MIT-0284C7.style=flat-square)](LICENSE)

---

## 📌 Project Overview

**FundMyFuture** (also brand-named **ScholaVerify**) solves the challenge students face when searching for legitimate financial aid:
* **Information Overload:** Automatically aggregates opportunities from hundreds of verified academic portals.
* **Scam Protection:** Uses Google Gemini API to analyze listings for scam indicators, suspicious fee requests, and invalid domain origins.
* **Zero Manual Maintenance:** Fully automated backend driven by GitHub Actions cron pipelines.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JS | Lightweight, fast initial render, zero build step requirement. |
| **Backend API** | Python 3.9+, Flask | Micro-framework enabling fast REST API routing and simple AI package integration. |
| **AI Verification** | Google Gemini API | Structured JSON outputs for confidence scoring and scam indicator flag parsing. |
| **Scraping Engine** | BeautifulSoup & Playwright | BeautifulSoup for static sites; Playwright for dynamic, JS-rendered portals. |
| **CI/CD Automation** | GitHub Actions | Scheduled daily web scraping, verification pipelines, and database updates. |
| **Hosting** | Render (Backend), Netlify (Frontend) | Free-tier deployment with automated git-push continuous deployment. |

---

## 🏢 Enterprise Multi-Developer Git Workflow

To simulate professional software engineering workflows, all team members operate using **Forking**, **Feature Branching**, and **Pull Requests**.

### 1. Repository Setup & Linkage

```bash
# Member B: Fork the main repo on GitHub, then clone your fork
git clone [https://github.com/YOUR_USERNAME/FundMyFuture.git](https://github.com/YOUR_USERNAME/FundMyFuture.git)
cd FundMyFuture

# Add the primary repository as 'upstream'
git remote add upstream [https://github.com/its-maneeshk/FundMyFuture.git](https://github.com/its-maneeshk/FundMyFuture.git)

# Verify remote configuration
git remote -v
```
### 2. Daily Feature Branch Workflow
Never commit directly to main. Always create dedicated feature branches:

```bash
# 1. Sync local main branch with upstream
git checkout main
git fetch upstream
git merge upstream/main

# 2. Create a isolated feature branch
git checkout -b feature/gemini-verification

# 3. Make changes, stage, and commit
git add .
git commit -m "feat(api): implement gemini prompt verification pipeline"

# 4. Push to your own GitHub fork
git push origin feature/gemini-verification
```
### 3. Conventional Commit Guidelines
All commits must follow the Conventional Commits standard:
```bash
feat(<scope>): A new feature (e.g., feat(api): add deadline filtering endpoint)
fix(<scope>): A bug fix (e.g., fix(scraper): resolve dynamic DOM timeout in playwright)
docs(<scope>): Documentation updates (e.g., docs(readme): add workflow guidelines)
style(<scope>): CSS layout and design updates without business logic changes
refactor(<scope>): Code restructures without feature additions
```

### Role Division & Responsibilities
### Member A (Backend & Infrastructure Lead):
Flask REST API architecture & SQLite ORM database management.
Google Gemini API prompt engineering and trust matrix design.
Web scrapers (BeautifulSoup/Playwright) & GitHub Actions scheduled jobs.
### Member B (Frontend & UX Lead):
Responsive mobile-first interface (HTML/CSS/JS).
Fetch API state management, search/filter controls, dynamic rendering.
Verification trust badges, red-flag list UI, and toast notifications.

### Getting Started Locally
Prerequisites
  Python 3.9+ installed
  Node.js / Playwright dependencies

Setup Steps
```bash
# 1. Clone the repository
git clone [https://github.com/its-maneeshk/FundMyFuture.git](https://github.com/its-maneeshk/FundMyFuture.git)
cd FundMyFuture

# 2. Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt
playwright install

# 4. Set up environment variables (.env)
echo "GEMINI_API_KEY=your_gemini_key_here" > .env
echo "FLASK_ENV=development" >> .env

# 5. Run the development server
python app.py
```


## 8-Week Development Roadmap
[x] Phase 1 (Weeks 1-2): Foundation - Flask API setup, database schema design, base HTML layout.

[ ] Phase 2 (Weeks 3-4): AI & Scraping - Playwright integration, Gemini verification pipeline logic.

[ ] Phase 3 (Weeks 5-6): Automation - Scheduled GitHub Actions daily scraping, error recovery.

[ ] Phase 4 (Weeks 7-8): Polish & Deploy - OWASP security auditing, deployment to Render & Netlify.

### Project Screenshot
![Alternative text for screen readers](https://github.com/its-maneeshk/FundMyFuture/blob/dbe3053b4f592d24841426d0a833a760d7519a7f/frontend/public/ProjectScreenshot/Homepage.png)
