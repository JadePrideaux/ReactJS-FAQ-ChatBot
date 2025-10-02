from flask import Blueprint, jsonify, request
from logic.get_answers import get_answers

ask_bp = Blueprint("ask", __name__)

@ask_bp.route("/ask", methods=["POST"])
def ask():
  # Get the request data
  data = request.get_json()
  # Get the question and the top_k from the request
  question = data.get("question", "")
  top_k = int(data.get("top_k"))
  # Get the answer based on the given question
  answers = get_answers(question, top_k)
  # Return a json object with the answer
  return jsonify({"answers": answers})