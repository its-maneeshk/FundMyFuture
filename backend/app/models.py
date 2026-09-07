from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Scholarship(db.Model):
    __tablename__ = 'scholarships'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.String(50), nullable=False)
    deadline = db.Column(db.String(50), nullable=False)
    trust_score = db.Column(db.Integer, default=100)
    status = db.Column(db.String(50), default="Verified")
    description = db.Column(db.Text, nullable=False)
    provider = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "category": self.category,
            "amount": self.amount,
            "deadline": self.deadline,
            "trust_score": self.trust_score,
            "status": self.status,
            "description": self.description,
            "provider": self.provider
        }