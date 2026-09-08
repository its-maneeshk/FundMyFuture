from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from app.models import db, Scholarship
from app.ai.verifier import verify_scholarship_with_gemini

app = Flask(__name__)
CORS(app)

# Database Configuration
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'fundmyfuture.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

# Seed initial database
def seed_database():
    if Scholarship.query.count() == 0:
        initial_data = [
            Scholarship(
                title="Global Data Science & AI Excellence Grant",
                category="Data Science with AI",
                amount="$10,000",
                deadline="November 25, 2026",
                trust_score=96,
                status="Verified",
                description="Funding for undergraduate and graduate students pursuing machine learning research.",
                provider="Tech Education Foundation"
            ),
            Scholarship(
                title="CyberSecurity Women in Tech Fellowship",
                category="CyberSecurity with AI",
                amount="$7,500",
                deadline="December 10, 2026",
                trust_score=89,
                status="Verified",
                description="Financial support for students in cybersecurity, network defense, and AI safety programs.",
                provider="SecureFuture Alliance"
            ),
            Scholarship(
                title="Cloud & DevOps Innovation Award",
                category="DevOps with AI",
                amount="$5,000",
                deadline="January 15, 2027",
                trust_score=92,
                status="Verified",
                description="Awarded to students demonstrating practical infrastructure automation projects.",
                provider="Cloud Native Platform"
            )
        ]
        db.session.bulk_save_objects(initial_data)
        db.session.commit()

@app.route('/api/v1/scholarships', methods=['GET'])
def get_scholarships():
    scholarships = Scholarship.query.all()
    return jsonify({
        "success": True,
        "count": len(scholarships),
        "data": [s.to_dict() for s in scholarships]
    })

@app.route('/api/v1/verify', methods=['POST'])
def verify_listing():
    data = request.get_json() or {}
    title = data.get('title', '')
    provider = data.get('provider', '')
    description = data.get('description', '')

    if not title or not description:
        return jsonify({"success": False, "message": "Title and description are required"}), 400

    analysis = verify_scholarship_with_gemini(title, provider, description)
    return jsonify({
        "success": True,
        "analysis": analysis
    })

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        seed_database()
    app.run(port=5000, debug=True)