"""Flask Backend application entry point."""

from flask import Flask
from flask_cors import CORS
from routes.ask import ask_bp


def create_app() -> Flask:
  """
  Create and configure the Flask application.

  Returns:
    Flask: A Flask application instance.
  
  """

  app = Flask(__name__)
  CORS(app)

  # Register the ask route
  app.register_blueprint(ask_bp)

  return app

# Create Flask app instance
app: Flask = create_app()

if __name__ == "__main__":
  app.run(debug=True, port=5000)