import pandas as pd

# Get the dataset
df = pd.read_json("backend/data/React_dataset.json")
print(df)

def get_answer(question: str) -> str:
  return f"You asked: {question}. Placeholder answer."