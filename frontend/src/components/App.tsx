import { useState } from "react";
import "../styles/App.css";

function App() {
  // useStates to store the question/answer strings
  const [question, setQuestion] = useState<string>("");
  const [answerText, setAnswerText] = useState<string>("");
  // useStates to store loading bool and error message
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const ask = async () => {
    // if the string is just whitespace, return
    if (!question.trim()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // try to fetch the result
      const result = await fetch("/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          top_k: 1,
        }),
      });

      // if result is not okay, throw error
      if (!result.ok) {
        throw new Error(`HTTP error: ${result.status}`);
      }

      // get the data from the result
      const data = await result.json();
      // set the answer as
      setAnswerText(JSON.stringify(data, null, 2));
    } catch (err: unknown) {
      // if something else happens, get the error and set the error message
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      // once everything is done, set loading to false
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
