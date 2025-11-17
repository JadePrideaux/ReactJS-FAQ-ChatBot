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

- **ML model**: Python, Jupyter Notebook, sentence-transformers (using PyTorch), Kaggle
- **Backend**: Python, Flask API
- **Frontend**: React, Vite
- **Version Control**: Git/GitHub
- **IDEs**: VSCode

## Resources

- Dataset: [ReactJS FAQ Dataset](https://www.kaggle.com/datasets/savanidhruv/reactjs-faq-dataset)
- Model: [SBERT Semantic Search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html)

## Project Structure

```bash
├── backend
│   ├── data - dataset + pregenerated embeddings, (not saved on GitHub)
│   ├── logic - scripts to get the dataset, generate embeddings, retrieve the answers and startup logic.
│   ├── routes - the API route to retrieve answers based on the given question
├── frontend
│   ├── src/
│   │   ├── components - React components for the webpage
│   │   ├── hooks - The custom useAnswers hook that calls the API
├── notebooks
│   ├── model.ipynb - the main testing notebook, running though the model and testing it on the dataset
│   ├── test.py - a script to test the API
├── README.md
└── .gitignore
```

## Screenshots

### Input Form
![Input Form](/docs/screenshots/InputForm.png)

### Query: "What is React?"
![What is React](/docs/screenshots/React.png)

### Query: "Can you describe how to create a custom hook?"
![Custom Hooks](/docs/screenshots/CustomHooks.png)

## Development Methodology and Planning

This project uses an agile development methodology. Working in sprints, starting with testing the model against the dataset, then working on the backend and frontend implementation separately. Once these foundational systems are in place the following sprints will focus on system improvement and deployment.

### Sprint 1: ML Prototype | 17/09/25 – 28/09/25

Created a Jupyter Notebook to test the model's performance against the dataset.

- Selected Sentence-BERT Semantic search model.
- Cleaned and prepared dataset, with a 90/10 evaluation/test split.
- Evaluated the model's performance on unseen questions.

---

### Sprint 2: Backend API | 29/09/25 - Current

Built a simple API using Flask that can be called with a query to retrieve k top answers based on similarity.

- Implemented `/ask` endpoint, returning top k answers based on similarity score, alongside the scores.
- Created Python scripts to download the dataset and generate embeddings.
- Tested API by calling it through separate script to see if JSON is returned in the correct format.
---

### Sprint 3: Frontend | 06/10/25 - 10/10/25

Designed a simple frontend using React to call the API, sending a string and receiving a set of answers. Crafting a simple, usable form for users to send queries.

- Created a form for query submission displayed results in React.
- Separated design into separate React components
- Created a custom React hook to deal with API calls
- Implemented basic UI styling, including a score based gradient on answer components

---

### Sprint 4: Fixing and Polishing | 20/10/25 - 02/11/25

Refactored both the front and backend of the system, reorganising and resolving key problems.

- Adjusted API to send the original questions alongside the answers, displaying them together on the frontend.
- Cleaned up backend code, adding docstrings and ensuring code in inside functions where appropriate.
- Tested API, with missing data to verify error handling.
