import { useState } from "react";

export const useAnswers = () => {
  // useStates to store the answer strings
  const [answerText, setAnswerText] = useState<string>("");
  // useStates to store loading bool and error message
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAnswers = async (question: string, top_k: number = 3) => {
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
          top_k: top_k,
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
  return { answerText, loading, error, fetchAnswers };
};
