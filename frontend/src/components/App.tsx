import { useState } from "react";
import { useAnswers } from "../hooks/useAnswers";
import "../styles/App.css";

function App() {
  const { answerText, loading, error, fetchAnswers } = useAnswers();
  const [question, setQuestion] = useState<string>("");

  return (
    <div>
      <h1>React FAQ Search</h1>

      <div>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
        />
        <button onClick={() => fetchAnswers(question, 3)} disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {answerText !== null && (
        <div>
          <strong>Answer:</strong>
          <p>{answerText}</p>
        </div>
      )}
    </div>
  );
}

export default App;
