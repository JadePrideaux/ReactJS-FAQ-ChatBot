# Script to generate all the embeddings of the answers and store them locally.

import os

import pandas as pd
import torch
from sentence_transformers import SentenceTransformer


def generate_embeddings() -> None:
  """Generates and saves the answer embeddings"""
  # Get the dataset
  df = pd.read_json("backend/data/React_dataset.json")
  answers = df["answer"].dropna().tolist()

  # Load model
  embedder = SentenceTransformer("all-MiniLM-L6-v2")

  # Generate embeddings
  answer_embeddings = embedder.encode_document(answers, convert_to_tensor=True, show_progress_bar=True)

  # Save embeddings, answers and questions
  torch.save(answer_embeddings, "backend/data/answer_embeddings.pt")
  df[["question", "answer"]].to_csv("backend/data/dataset.csv", index=False)

if __name__ == "__main__":
  generate_embeddings()