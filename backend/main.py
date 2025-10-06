from flask import Flask
from flask_cors import CORS
from routes.ask import ask_bp

app = Flask(__name__)
CORS(app)

# Register the ask route
app.register_blueprint(ask_bp)

if __name__ == "__main__":
  app.run(debug=True, port=5000)