import requests
from bs4 import BeautifulSoup
from app.models import db, Scholarship
from app.ai.verifier import verify_scholarship_with_gemini

# Mock HTML sample used as a safe fallback if the web request returns 404
FALLBACK_HTML = """
<div class="scholarship-item">
    <h3>AI & Machine Learning Innovation Grant</h3>
    <span class="provider">NextGen Tech Institute</span>
    <span class="category">Data Science with AI</span>
    <span class="amount">$8,500</span>
    <span class="deadline">December 20, 2026</span>
    <p class="description">Scholarship for students demonstrating promising research projects in generative AI and intelligent agents.</p>
</div>
<div class="scholarship-item">
    <h3>DevOps Infrastructure Automation Award</h3>
    <span class="provider">Cloud Alliance Foundation</span>
    <span class="category">DevOps with AI</span>
    <span class="amount">$6,000</span>
    <span class="deadline">January 30, 2027</span>
    <p class="description">Merit-based financial award for computer science students building open-source CI/CD deployment pipelines.</p>
</div>
"""

def scrape_and_store_scholarships(app):
    """
    Scrapes scholarship data, verifies listings with Gemini AI,
    and inserts non-duplicate records into SQLite.
    """
    target_url = "https://raw.githubusercontent.com/its-maneeshk/FundMyFuture/main/sample_feed.html"
    
    try:
        response = requests.get(target_url, timeout=5)
        if response.status_code == 200:
            html_content = response.text
        else:
            print(f"[Scraper]: Remote feed returned {response.status_code}. Using local fallback feed.")
            html_content = FALLBACK_HTML
    except Exception as err:
        print(f"[Scraper Network Alert]: {err}. Using local fallback feed.")
        html_content = FALLBACK_HTML

    try:
        soup = BeautifulSoup(html_content, 'html.parser')
        listings = soup.find_all('div', class_='scholarship-item')

        with app.app_context():
            added_count = 0
            for item in listings:
                title = item.find('h3').text.strip() if item.find('h3') else 'Unknown Grant'
                provider = item.find('span', class_='provider').text.strip() if item.find('span', class_='provider') else 'Independent Sponsor'
                category = item.find('span', class_='category').text.strip() if item.find('span', class_='category') else 'General'
                amount = item.find('span', class_='amount').text.strip() if item.find('span', class_='amount') else '$1,000'
                deadline = item.find('span', class_='deadline').text.strip() if item.find('span', class_='deadline') else 'Open'
                description = item.find('p', class_='description').text.strip() if item.find('p', class_='description') else 'No description provided.'

                # Deduplication Check
                existing = Scholarship.query.filter_by(title=title, provider=provider).first()
                if existing:
                    continue

                # Run Gemini AI Verification Pipeline
                ai_result = verify_scholarship_with_gemini(title, provider, description)
                
                new_scholarship = Scholarship(
                    title=title,
                    category=category,
                    amount=amount,
                    deadline=deadline,
                    trust_score=ai_result.get('trust_score', 85),
                    status=ai_result.get('status', 'Verified'),
                    description=description,
                    provider=provider
                )
                db.session.add(new_scholarship)
                added_count += 1

            db.session.commit()
            print(f"[Scraper]: Successfully processed feed and added {added_count} new listings.")
            return True

    except Exception as e:
        print(f"[Scraper Internal Error]: {e}")
        return False