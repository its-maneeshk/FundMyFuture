import requests
from bs4 import BeautifulSoup
from app.models import db, Scholarship
from app.ai.verifier import verify_scholarship_with_gemini

def scrape_and_store_scholarships(app):
    """
    Scrapes scholarship data from a target portal, verifies listings with Gemini AI, 
    and inserts non-duplicate records into the database.
    """
    # Sample educational opportunity feed / mock portal URL
    url = "https://raw.githubusercontent.com/its-maneeshk/FundMyFuture/main/sample_feed.html"
    
    try:
        response = requests.get(url, timeout=10)
        if response.status_code != 200:
            print(f"[Scraper]: Failed to fetch page. Status code: {response.status_code}")
            return False

        soup = BeautifulSoup(response.text, 'html.parser')
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
                    trust_score=ai_result.get('trust_score', 75),
                    status=ai_result.get('status', 'Verified'),
                    description=description,
                    provider=provider
                )
                db.session.add(new_scholarship)
                added_count += 1

            db.session.commit()
            print(f"[Scraper]: Successfully scraped and added {added_count} new listings.")
            return True

    except Exception as e:
        print(f"[Scraper Error]: {e}")
        return False