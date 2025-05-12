from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from typing import Dict, Any

db = SQLAlchemy()

class Report(db.Model):
    """Model for reports submitted by users."""
    __tablename__ = 'reports'

    id = db.Column(db.Integer, primary_key=True)
    tracking_id = db.Column(db.String(20), unique=True, nullable=False, index=True)
    phone_number = db.Column(db.String(20), nullable=False)
    issue_type = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    location = db.Column(db.String(200), nullable=False)
    status = db.Column(db.String(50), default='Received')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self) -> str:
        return f"Report('{self.tracking_id}', '{self.issue_type}', '{self.status}')"

    def to_dict(self) -> Dict[str, Any]:
        """Convert report to dictionary."""
        return {
            'id': self.id,
            'tracking_id': self.tracking_id,
            'phone_number': self.phone_number,
            'issue_type': self.issue_type,
            'description': self.description,
            'location': self.location,
            'status': self.status,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }

class Session(db.Model):
    """Model for user sessions."""
    __tablename__ = 'sessions'

    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.String(100), unique=True, nullable=False, index=True)
    phone_number = db.Column(db.String(20), nullable=False)
    step = db.Column(db.Integer, default=0)
    issue_type = db.Column(db.String(100), nullable=True)
    description = db.Column(db.String(500), nullable=True)
    location = db.Column(db.String(200), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self) -> str:
        return f"Session('{self.session_id}', '{self.phone_number}', '{self.step}')"