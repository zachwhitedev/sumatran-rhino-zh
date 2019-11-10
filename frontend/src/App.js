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
        {
            id: 1,
            question: 'Which of these is Not a Rhino?',
            answer_a:
                'white rhino',
            answer_b: 'sumatran rhino',
            answer_c:
                "black rhino",
            answer_d: 'vanilla rhino',
            correct_answer: 'd',
        },
        {
            id: 2,
            question: 'What continent do rhinos live on?',
            answer_a: 'North America',
            answer_b: 'Antarctica',
            answer_c: 'Mexico City',
            answer_d: 'Africa and Asia',
            correct_answer: 'd',
        },
        {
            id: 3,
            question: 'How much does a rhino weigh?',
            answer_a: '80 lbs.',
            answer_b: 'Your mom.',
            answer_c: '3000 lbs.',
            answer_d: '5000 lbs.',
            correct_answer: 'd',
        },
        {
            id: 4,
            question: 'How much does a rhino weigh bitch?',
            answer_a: '80 lbs.',
            answer_b: 'Your mom.',
            answer_c: '3000 lbs.',
            answer_d: '5000 lbs.',
            correct_answer: 'd',
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
    const {currentQuestion, currentAnswer, answers, showResults, error, isSubmitting} = state;

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
        dispatch({type: RESET_QUIZ});
    };

    const next = () => {
        const answer = {questionId: question.id, answer: currentAnswer};

        if (!currentAnswer) {
            dispatch({type: SET_ERROR, error: 'Please select an option'});
            return;
        }

        answers.push(answer);
        dispatch({type: SET_ANSWERS, answers});
        dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''});

        if (currentQuestion + 1 < questions.length) {
            dispatch({
                type: SET_CURRENT_QUESTION,
                currentQuestion: currentQuestion + 1,
            });
            return;
        }

        dispatch({type: SET_SHOW_RESULTS, showResults: true});
    };

    const submitForm =() => {
      state.score -= state.score;
      dispatch({type: SUBMIT_FORM, isSubmitting: true});
      return;
    };

    if (showResults) {
        return (
            <div className="container results">
                <h2>Results</h2>
                <ul>{renderResultsData()}</ul>
                <h3>Score: {state.score} </h3>
                <button className="btn btn-primary" onClick={restart}>
                    Restart
                </button>
                <button onClick={submitForm}>
                  Submit Score!
                </button>
                {isSubmitting ? <SubmitForm userscore={state.score}/> : null}
            </div>
        );
    } else {
        return (
            <QuizContext.Provider value={{state, dispatch}}>
                <div className="container">
                    <Progress
                        total={questions.length}
                        current={currentQuestion + 1}
                    />
                    <Question />
                    {renderError()}
                    <Answers />
                    <button className="btn btn-primary" onClick={next}>
                        Submit
                    </button>
                    <img className='hello' src = {require("./image/textBubble.png")} />
                    <img className='goodbye' src = {require("./image/rhino.png")} />
        </div>
      </QuizContext.Provider>
    );
  }
}

export default App;