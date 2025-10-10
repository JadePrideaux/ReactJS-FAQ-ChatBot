type Props = {
  answer: string;
  score?: number;
};

const AnswerCard = ({ answer, score }: Props) => {
  let color = `rgb(255, 0, 0)`;
  if (score != null) {
    const red = 255 - Math.round(255 * score);
    const green = 0 + Math.round(255 * score);
    color = `rgb(${red}, ${green}, 100)`;
  }

  return (
    <div
      className="card"
      style={{
        backgroundColor: color,
        transition: "background-color 0.3s ease",
      }}
    >
      <p>{answer}</p>
      {score && <small>Score: {score}</small>}
    </div>
  );
};

export default AnswerCard;
