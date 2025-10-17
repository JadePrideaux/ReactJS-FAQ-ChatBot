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

## Development Methodology and Planning

This project uses an agile development methodology. Working in sprints, starting with testing the model against the dataset, then working on the backend and frontend implementation separately. Once these foundational systems are in place the following sprints will focus on system improvement and deployment.

### Sprint 1: ML Prototype | 17/09/25 – 28/09/25

Create a Jupyter Notebook to test the model's performance against the dataset.

**Plan:**

- Define project scope ✅
- Decide tech stack ✅
- Outline approach: sentence embedding + cosine similarity retrieval ✅
- Decide on development methodology ✅
- Gather resources: dataset and pre-trained model ✅
- Create README and sprint structure ✅
- Plan notebook sections ✅

**Design:**

- Setup project, imports and notebook environment ✅
- Define preprocessing steps ✅
- Select similarity metric: cosine (standard) ✅

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

Create a simple API using Flask that can be called with a query to retrieve k top answers based on similarity.

**Plan:**

- Understand how flask works and how to build the backend of this system ✅

**Design:**

- Create folder structure ✅

**Develop:**

- Create ask api route ✅
- Create `main.py` with blueprint reference to api ✅
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

### Sprint 3: Frontend | 06/10/25 - 10/10/25

Create a simple frontend using React to call the API, sending a string and receiving a set of answers. Crafting a simple, usable form for users to send queries.

**Plan:**

- Setup React-TS and Vite ✅

**Design:**

- Consider how to fetch api data and how the information should be displayed ✅

**Develop:**

- Create API fetch ✅
- Create simple text input for questions ✅
- Show stringified response on frontend ✅
- Move API fetch logic into a custom hook ✅
- Create separate components ✅
- Adjust CSS, to customize layout and colors ✅
- Change answer background color based on score ✅
- Implement react-markup to polish text ✅

**Test:**

- Start by getting the API and displaying of results working and then polish ✅
- Check formatting with different types of responses (probably could use more thorough testing to check edge cases etc) ✅

**Deploy:**

- System is functional across the stack ✅

**Review:**

- Some minor usability issues may need to be solved + more testing
- Need to adjust API to include original question, since some of the answers require context
- Need to check formatting of large answers, possibly hiding everything and only displaying the full answer on click
- Need to consider mobile devices

---

### Sprint 4: Fixing and Polishing | 20/10/25 -

- Fix main issues and general polish of project, including commenting code and documentation.
- Consider deployment options (vercel, hugging face spaces).
