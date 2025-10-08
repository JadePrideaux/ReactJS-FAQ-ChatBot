type Props = {
  answerText: string;
};

const AnswersContainer = ({ answerText }: Props) => {
  return (
    <>
      {answerText !== null && (
        <div>
          <strong>Answer:</strong>
          <p>{answerText}</p>
        </div>
      )}
    </>
  );
};

export default AnswersContainer;
