import os

import pandas as pd
import torch
from sentence_transformers import SentenceTransformer

print("Loading model and embeddings...")
# Load model
embedder = SentenceTransformer("all-MiniLM-L6-v2")

# Load the answers and their embeddings from the file
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

answer_embeddings = torch.load(os.path.join(BASE_DIR, "../data/answer_embeddings.pt"))
answers = pd.read_csv(os.path.join(BASE_DIR, "../data/dataset.csv"))["answer"].tolist()
questions = pd.read_csv(os.path.join(BASE_DIR, "../data/dataset.csv"))["question"].tolist()

print("Startup complete")