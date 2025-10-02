# ReactJS FAQ ChatBot

## Project Overview

A simple FAQ chatbot that uses asymmetric semantic search to retrieve the top 3 closest answers from a dataset based on user questions. This project demonstrates applying NLP embeddings, Python backend APIs and a React frontend in a structured, iterative development process.

## Motivation

I have studied machine learning and have been developing my full-stack skills since graduating. Creating a project that ties the two together felt like the next logical step. With previous work focusing on user experience, my interest in machine learning and artificial intelligence has always been about how they can support the user. This project is the perfect first step towards applying a user-centred approach to machine learning by creating a practical tool.

## Goals

- Provide relevant answers to user questions from a pre-defined FAQ dataset.
- Use semantic search to handle phrasing differences.
- Build a frontend, backend and a notebook for testing the model.
- Follow an agile development methodology for development.

## Tech Stack

- **ML model**: Python, Jupyter Notebook, sentence-transformers (using PyTorch)
- **Backend**: Python, Flask API
- **Frontend**: React, Vite
- **Version Control**: Git/GitHub
- **IDEs**: VSCode

## Resources

- Dataset: [ReactJS FAQ Dataset](https://www.kaggle.com/datasets/savanidhruv/reactjs-faq-dataset)
- Model: [SBERT Semantic Search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html)

## Project Structure

ReactJS-FAQ-ChatBot

- backend/
- frontend/
- notebooks/
- README.md
- .gitignore

## Development Methodology and Planning

### Sprint 1: ML Prototype | 17/09/25 – 28/09/25

**Plan:**

- Define project scope ✅
- Decide tech stack ✅
- Outline approach: sentence embedding + cosine similarity retrieval ✅
- Decide on development methodology ✅
- Gather resources: dataset and pre-trained model ✅
- Create README and sprint structure ✅
- Plan notebook sections ✅

**Design:**

- Setup project, imports and notebook enviroment ✅
- Define preprocessing steps ✅
- Select simularity metric: cosine (standard) ✅

**Develop:**

- Load dataset from Kaggle ✅
- Create clean Q and A pairs ✅
- Split dataset ✅
- Generate embeddings ✅
- Semantic Search retrieval ✅

**Test:**

- Compare test sets question and answer similarity ✅
- Compare similarity of top 3 answers with new questions ✅
- Compare similarity score between chosen answers and correct answers ✅

**Deploy:**

- Notebook prototype runnable locally ✅

**Review:**

- Analyses similarity scores ✅

---

### Sprint 2: Backend API | 29/09/25 - Current

**Plan:**

- Understand how flask works and how to build the backend of this system ✅

**Design:**

- Create folder structure ✅

**Develop:**

- Create ask api route ✅
- Create main.py with blueprint reference to api ✅
- Create scripts to get data and generate embeddings for answers ✅
- Implement get_answers method to retrieve top-k answers and similarity scores ✅
- Separate data and model loading to run on startup ✅

**Test:**

- Create placeholder get_answer method and test api ✅
- Verify correct JSON output ✅

**Deploy:**

- Backend server runs locally and responds to /ask ✅

**Review:**

- Confirm api fully functional
- JSON response includes both answer text and similarity scores ✅

---

### Sprint 3: Frontend | Start Goal: 06/10/25

- Build React form to input questions
- Display answers
- Add error handling and UI polish

---

### Sprint 4+: Integration and Deployment | Start Goal: 13/10/25

- Integrate end-to-end system
- Consider deployment options

## Challenges, Actions and Results

- **Challenge**: Understood how to implement a FAQ chatbot that accurately retrieves relevant answers to questions.
- **Action**: Learned about semantic search and explored the concept of mapping questions to answers in the same vector space.
- **Result**: Gained understanding of the approach and developed a foundation to start building a ML prototype.

- **Challenge**: Issues with Python Virtual machine - consider using UV in future
