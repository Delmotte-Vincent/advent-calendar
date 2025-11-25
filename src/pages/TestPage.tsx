import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { answers } from '../answers';
import './TestPage.css';

const days = ['1', '2', '3', '4', '5'];

export const TestPage = () => {
    const [counter, setCounter] = useState(0);
    const [answer, setAnswer] = useState('');
    const [condition, setCondition] = useState(false);

    const navigate = useNavigate();

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleChangeAnswer = (event) => {
        const value = event.target.value;
        setAnswer(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (answer === answers.day1) {
            console.log('Youpi');
            setCondition(true);
        } else {
            setCondition(false);
        }
    };

    const handleClick = (day) => {
        console.log(`Day ${day}`);
        navigate(`/day/${day}`);
    };

    return (
        <div
            className={condition ? 'test-page' : 'toto'}
            style={{ textAlign: 'center', backgroundColor: condition ? 'lightblue' : 'red' }}
        >
            <h1>Je suis la page test !</h1>
            <p>{counter}</p>
            <button onClick={handleIncrement}>Increment</button>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChangeAnswer}></input>
                <button type="submit">Submit</button>
                {condition && <p>Youpi</p>}

                <div className="flex-example">
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                    <div className="item">5</div>
                    <div className="item">6</div>
                </div>

                <div className="flex-example">
                    {days.map((day) => (
                        <button key={day} className="item" onClick={() => handleClick(day)}>
                            Jour {day}
                        </button>
                    ))}
                </div>
            </form>
        </div>
    );
};
