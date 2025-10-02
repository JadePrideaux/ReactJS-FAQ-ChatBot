import pandas as pd
import torch
from sentence_transformers import SentenceTransformer

print("Loading model and embeddings...")
# Load model
embedder = SentenceTransformer("all-MiniLM-L6-v2")

# Load the answers and their embeddings from the file
answer_embeddings = torch.load("backend/data/answer_embeddings.pt")
answers = pd.read_csv("backend/data/answers.csv")["answer"].tolist()

print("Startup complete")