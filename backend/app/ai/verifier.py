import os
import json
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()

def verify_scholarship_with_gemini(title, provider, description):
    """
    Analyzes a scholarship listing using Google Gemini API to evaluate authenticity and assign a trust score.
    """
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("[AI Verifier]: Missing GEMINI_API_KEY. Defaulting to fallback score.")
        return {"trust_score": 75, "status": "Unverified", "flags": ["API key missing"]}

    try:
        client = genai.Client(api_key=api_key)
        
        prompt = f"""
        Analyze the following scholarship listing for potential scams, fraud indicators, or legitimacy issues.
        
        Scholarship Title: {title}
        Provider: {provider}
        Description: {description}
        
        Return your response ONLY in valid JSON format with the following keys:
        - "trust_score": Integer between 0 and 100 (100 = completely legitimate, <50 = high risk/scam)
        - "status": String ("Verified" if trust_score >= 80, otherwise "Flagged")
        - "flags": List of string red flags found (empty list [] if clean)
        """

        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json"
            )
        )

        return json.loads(response.text)

    except Exception as e:
        print(f"[AI Verifier Error]: {e}")
        return {"trust_score": 70, "status": "Error", "flags": ["AI verification failed"]}