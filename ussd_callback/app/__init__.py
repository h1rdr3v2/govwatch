import os
import logging
from logging.handlers import RotatingFileHandler
from flask import Flask
from app.config import config
from app.models import db

def create_app(config_name=None):
    """Create Flask application."""
    if config_name is None:
        config_name = os.environ.get('FLASK_ENV', 'default')

    app = Flask(__name__)
    app.config.from_object(config[config_name])

    # Configure logging
    if not app.debug:
        if not os.path.exists('logs'):
            os.mkdir('logs')
        file_handler = RotatingFileHandler(
            'logs/govwatch.log',
            maxBytes=10240,
            backupCount=5
        )
        file_handler.setFormatter(logging.Formatter(
            '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
        ))
        file_handler.setLevel(logging.INFO)
        app.logger.addHandler(file_handler)

        app.logger.setLevel(logging.INFO)
        app.logger.info('GovWatch startup')

    # Initialize extensions
    db.init_app(app)

    # Register blueprints
    from app.routes import main as main_blueprint
    app.register_blueprint(main_blueprint)

    # Create database tables
    with app.app_context():
        db.create_all()

    return app