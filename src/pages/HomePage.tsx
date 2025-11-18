import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
    const [counter, setCounter] = useState(0);

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Coucou');
        navigate('/test');
    };

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="home-page" style={{ textAlign: 'center' }}>
            <h1>Hello World !</h1>
            <button onClick={handleClick}>Click me</button>
            <p>{counter}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};
