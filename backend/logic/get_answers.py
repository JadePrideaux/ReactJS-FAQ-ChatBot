# Script to get the answers based on the input string

import torch
from logic.startup import answer_embeddings, answers, embedder, questions


def get_answers(question: str, top_k: int = 3):
  # Generate embedding for question
  question_embedding = embedder.encode_query(question, convert_to_tensor=True)

  # Find answers with closest similarity to questions
  similarity_scores = embedder.similarity(question_embedding, answer_embeddings)[0]
  scores, indices = torch.topk(similarity_scores, k=top_k)

  # Return top answers alongside their corresponding question and score
  results = []
  for score, idx in zip(scores, indices):
    results.append({
      "question": questions[idx],
      "answer": answers[idx],
      "score": float(score)
    })

  return results