# Script to download the dataset locally

import os
import shutil

import kagglehub

# Download to KaggleHub cache
path = kagglehub.dataset_download("savanidhruv/reactjs-faq-dataset")

# File inside the dataset
src = os.path.join(path, "React_dataset.json")

# Relative path to dataset
dataset = "backend/data/React_dataset.json"

# Make sure the folder exists
os.makedirs(os.path.dirname(dataset), exist_ok=True)

# Copy the file over
shutil.copy(src, dataset)

print(f"Copied dataset to {dataset}")