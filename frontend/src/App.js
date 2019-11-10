import React, { useReducer } from 'react';
import Progress from './components/Progress';
import Question from './components/Question';
import Answers from './components/Answers';
import SubmitForm from './components/SubmitForm';
import QuizContext from './context/QuizContext';
import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
  RESET_QUIZ,
  SUBMIT_FORM,
} from './reducers/types.js';
import quizReducer from './reducers/QuizReducer';
import './App.css';
function App() {
  const questions = [
    // {
    //   id: 1,
    //   question: 'What is Sumatra?',
    //   answer_a: 'A country in Africa.',
    //   answer_b: 'A type of Tibetan yoga.',
    //   answer_c: 'An island south of Malaysia.',
    //   answer_d: 'A city in India',
    //   correct_answer: 'c'
    // },
    // {
    //   id: 2,
    //   question: 'Do rhinos have one or two horns?',
    //   answer_a: '1',
    //   answer_b: '2',
    //   answer_c: '3',
    //   answer_d: 'a & b (depends on the species!)',
    //   correct_answer: 'd'
    // },
    // {
    //   id: 3,
    //   question: 'On average, how much does a Sumatran rhino weigh?',
    //   answer_a: '1000-2000 lbs. (smallest rhino in the world!)',
    //   answer_b: '2000-3000 lbs.',
    //   answer_c: '3000-4000 lbs. (they are HUGE!)',
    //   answer_d: 'About the size of a rhino.',
    //   correct_answer: 'a'
    // },
    // {
    //   id: 4,
    //   question: 'A Sumatran rhino\'s hide is...',
    //   answer_a: 'tough and gray',
    //   answer_b: 'dark green and scaly',
    //   answer_c: 'red-brown with patches of hair',
    //   answer_d: 'purple and shiny',
    //   correct_answer: 'c'
    // },
    // {
    //   id: 5,
    //   question: 'How many Sumatran rhinos are in the world?',
    //   answer_a: 'None- they\'re extinct!',
    //   answer_b: 'Fewer than 100.',
    //   answer_c: 'Between 100-200',
    //   answer_d: '10 jabillion.',
    //   correct_answer: 'b'
    // },
    // {
    //   id: 6,
    //   question: 'Why do Sumatran rhinos like mud so much?',
    //   answer_a: 'It exfoliates their pores, preventing acne.',
    //   answer_b: 'It keeps their hide cool!',
    //   answer_c: 'It protects them from insects.',
    //   answer_d: 'Both b & c',
    //   correct_answer: 'd'
    // },
    // {
    //   id: 7,
    //   question: 'What does a Sumatran rhino eat?',
    //   answer_a: 'Klondike bars.',
    //   answer_b: 'Human flesh. They are blood-thirsty maneaters.',
    //   answer_c: 'Twigs and berries, with a love for mangos and figs!',
    //   answer_d: 'Omnivorous- they\'ll eat whatever comes their way.',
    //   correct_answer: 'c'
    // },
    {
      id: 8,
      question: 'How fast is a Sumatran rhino?',
      answer_a: '5-10 mph',
      answer_b: '25 mph- a bit faster than a human.',
      answer_c: '30-35mph- faster than Usain Bolt!',
      answer_d: '767 mph- the speed of sound.',
      correct_answer: 'b'
    },
  ];
  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    showResults: false,
    error: '',
    score: 0,
    isSubmitting: false
  };
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentQuestion, currentAnswer, answers, showResults, error, isSubmitting } = state;
  const question = questions[currentQuestion];
  const renderError = () => {
    if (!error) {
      return;
    }
    return <div className="error">{error}</div>;
  };
  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      state.score++;
      return <span className="correct">Correct</span>;
    }
    return <span className="failed">Incorrect</span>;
  };
  const renderResultsData = () => {
    return answers.map(answer => {
      const question = questions.find(
        question => question.id === answer.questionId
      );
      return (
        <div key={question.id}>
          {question.question} - {renderResultMark(question, answer)}
        </div>
      );
    });
  };
  const restart = () => {
    state.score = 0;
    dispatch({ type: RESET_QUIZ });
  };
  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer };
    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: 'Please select an option' });
      return;
    }
    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' });
    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: SET_CURRENT_QUESTION,
        currentQuestion: currentQuestion + 1,
      });
      return;
    }
    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };
  const submitForm = () => {
    state.score -= state.score;
    dispatch({ type: SUBMIT_FORM, isSubmitting: true });
    return;
  };
  if (showResults) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul>{renderResultsData()}</ul>
        <h3>Score: {state.score}</h3>
        <button className='sloppy btn' onClick={submitForm}>Submit Score</button>
        {isSubmitting ? <SubmitForm userscore={state.score} /> : null}
        <button className="btn btn-go" onClick={restart}>
          Restart
                </button>
        <img className='' src={require("./image/cloud_PNG.png")} alt='hello' />
      </div>
    );
  } else {
    return (
      <QuizContext.Provider value={{ state, dispatch }}>
        <div className="container">
          <Progress
            total={questions.length}
            current={currentQuestion + 1}
          />
          <Question />
          {renderError()}
          <Answers />
          <div className='confirm-button'>
          <button className="btn btn-stop" onClick={next}>
            Confirm and Continue
                    </button>
                    </div>
                    <div className='bubble-container'>
          <img className='hello' src={require("./image/textBubble.png")} alt='hello' />
          </div>
          <div className='rhino-container'>
            <img className='grassy' src={require("./image/grass.png")} alt='hello' />
          <img className='goodbye' src={require("./image/rhino.png")} alt='hello' />
            </div>
        </div>
      </QuizContext.Provider>
    );
  }
}

export default App;