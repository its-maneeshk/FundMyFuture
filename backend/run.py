from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enables cross-origin requests from React

MOCK_SCHOLARSHIPS = [
    {
        "id": "1",
        "title": "Global Data Science & AI Excellence Grant",
        "category": "Data Science with AI",
        "amount": "$10,000",
        "deadline": "November 25, 2026",
        "trust_score": 96,
        "status": "Verified",
        "description": "Funding for undergraduate and graduate students pursuing machine learning research.",
        "provider": "Tech Education Foundation"
    },
    {
        "id": "2",
        "title": "CyberSecurity Women in Tech Fellowship",
        "category": "CyberSecurity with AI",
        "amount": "$7,500",
        "deadline": "December 10, 2026",
        "trust_score": 89,
        "status": "Verified",
        "description": "Financial support for students in cybersecurity, network defense, and AI safety programs.",
        "provider": "SecureFuture Alliance"
    },
    {
        "id": "3",
        "title": "Cloud & DevOps Innovation Award",
        "category": "DevOps with AI",
        "amount": "$5,000",
        "deadline": "January 15, 2027",
        "trust_score": 92,
        "status": "Verified",
        "description": "Awarded to students demonstrating practical infrastructure automation projects.",
        "provider": "Cloud Native Platform"
    }
]

@app.route('/api/v1/scholarships', methods=['GET'])
def get_scholarships():
    return jsonify({
        "success": True,
        "count": len(MOCK_SCHOLARSHIPS),
        "data": MOCK_SCHOLARSHIPS
    })

if __name__ == '__main__':
    app.run(port=5000, debug=True)