# Script to get the answers based on the input string

import json

import pandas as pd
import torch
from sentence_transformers import SentenceTransformer


def get_answers(question: str, top_k: int = 3):
  # Load the answers and their embeddings from the file - move to separate startup method
  answer_embeddings = torch.load("backend/data/answer_embeddings.pt")
  answers = pd.read_csv("backend/data/answers.csv")["answer"].tolist()
  
  # Generate embedding for question
  embedder = SentenceTransformer("all-MiniLM-L6-v2")
  question_embedding = embedder.encode_query(question, convert_to_tensor=True)

  # Find answers with closest similarity to questions
  similarity_scores = embedder.similarity(question_embedding, answer_embeddings)[0]
  scores, indices = torch.topk(similarity_scores, k=top_k)

  # Return top answers
  results = []
  for score, idx in zip(scores, indices):
    results.append({
      "answer": answers[idx]
    })

  return results