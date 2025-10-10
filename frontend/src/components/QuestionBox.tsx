import { useState } from "react";

type Props = {
  onAsk: (question: string, top_k: number) => void;
  loading: boolean;
};

const QuestionBox = ({ onAsk, loading }: Props) => {
  const [question, setQuestion] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything..."
      />
      <button onClick={() => onAsk(question, 10)} disabled={loading}>
        {loading ? "Loading..." : "Send"}
      </button>
    </div>
  );
};

export default QuestionBox;
