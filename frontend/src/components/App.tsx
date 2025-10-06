import { useState } from "react";
import "../styles/App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ask = async () => {
    if (!question.trim()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await fetch("/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          top_k: 3,
        }),
      });

      if (!result.ok) {
        throw new Error(`HTTP error: ${result.status}`);
      }

      const data = await result.json();
      setAnswerText(JSON.stringify(data, null, 2));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Ask Something</h1>

      <div>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
        />
        <button onClick={ask} disabled={loading}>
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
