import type { Answer } from "../hooks/useAnswers";
import AnswerCard from "./AnswerCard";

type Props = {
  answers: Answer[];
};

const AnswersContainer = ({ answers }: Props) => {
  return (
    <>
      {answers.length > 0 && (
        <div>
          {answers.map((answer: Answer, i: number) => (
            <AnswerCard key={i} {...answer} />
          ))}
        </div>
      )}
    </>
  );
};

export default AnswersContainer;
