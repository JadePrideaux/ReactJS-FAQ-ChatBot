from http import HTTPStatus

from flask import Blueprint, Response, jsonify, request
from logic.get_answers import get_answers

ask_bp: Blueprint = Blueprint("ask", __name__)

@ask_bp.route("/ask", methods=["POST"])
def ask() -> tuple[Response, int]:
  """
  Handle a post request to fetch answers for a given question.

  Expects:
    JSON payload containing:
      - "question" (str): The input question
      - "top_k" (int): The number of results of results to return.

  Returns:
    flask.Response: JSON object containing the k top question/answer pairs and their similarity score, or an error.
  """
  # Get the request data
  data = request.get_json()
  if not isinstance(data, dict):
    return jsonify(error = "Payload must be a JSON object"), HTTPStatus.BAD_REQUEST
  
  # Get the question and the top_k from the request
  question = data.get("question")
  if not isinstance(question, str) or not question.strip():
    return jsonify(error = "Field 'question' must be a non-empty string"), HTTPStatus.BAD_REQUEST
  
  try:
    top_k = int(data.get("top_k", 3))
  except (TypeError, ValueError):
    return jsonify(error = "Field 'top_k' must be an integer"), HTTPStatus.BAD_REQUEST
  
  # Get the answer based on the given question
  try:
    answers = get_answers(question, top_k)
  except Exception as exc:
    # Log this in real code, dont expose details to the client
    return jsonify(error = "Internal server error"), HTTPStatus.INTERNAL_SERVER_ERROR
  
  # Return a json object with the answer
  return jsonify(answers = answers) , HTTPStatus.ACCEPTED