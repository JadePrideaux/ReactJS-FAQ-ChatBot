type Props = {
  answer: string;
  score?: number;
};

const AnswerCard = ({ answer, score }: Props) => {
  return (
    <div>
      <p>{answer}</p>
      {score && <small>Score: {score}</small>}
    </div>
  );
};

export default AnswerCard;
