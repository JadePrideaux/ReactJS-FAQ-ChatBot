from flask import Blueprint, jsonify, request

from backend.logic.get_answers import get_answer

ask_bp = Blueprint("ask", __name__)

@ask_bp.route("/ask", methods=["POST"])
def ask():
  # Get the request data
  data = request.get_json()
  # Get the question from the request
  question = data.get("question", "")
  # Get the answer based on the given question
  answer = get_answer(question)
  # Return a json object with the answer
  return jsonify({"answer": answer})