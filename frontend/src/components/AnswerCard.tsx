import ReactMarkdown from "react-markdown";

type Props = {
  question: string;
  answer: string;
  score?: number;
};

const AnswerCard = ({ question, answer, score }: Props) => {
  let color = `rgb(255, 0, 0)`;
  if (score != null) {
    const red = 200 - Math.round(200 * score);
    const green = 0 + Math.round(200 * score);
    color = `rgb(${red}, ${green}, 70)`;
  }

  return (
    <div
      className="card"
      style={{
        backgroundColor: color,
      }}
    >
      <h2>
        <ReactMarkdown>{question}</ReactMarkdown>
      </h2>
      <ReactMarkdown>{answer}</ReactMarkdown>
      {score && <small>Score: {score}</small>}
    </div>
  );
};

export default AnswerCard;
