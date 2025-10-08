import { useAnswers } from "../hooks/useAnswers";
import "../styles/App.css";
import AnswersContainer from "./AnswersContainer";
import Error from "./Error";
import QuestionBox from "./QuestionBox";
import Title from "./Title";

function App() {
  const { answerText, loading, error, fetchAnswers } = useAnswers();

  return (
    <>
      <Title />
      <QuestionBox onAsk={fetchAnswers} loading={loading} />
      <Error error={error} />
      <AnswersContainer answerText={answerText} />
    </>
  );
}

export default App;
