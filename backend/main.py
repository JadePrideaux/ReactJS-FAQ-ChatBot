from flask import Flask
from routes.ask import ask_bp

app = Flask(__name__)

# Register the ask route
app.register_blueprint(ask_bp)

if __name__ == "__main__":
  app.run(debug=True, ports=5000)