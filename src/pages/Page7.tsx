import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DayPage.css';

export const Page7 = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const dayId = location.pathname.split('/')[2];
    const [answer, setAnswer] = useState('');
    const [condition, setCondition] = useState(false);
    const [firstSubmit, setFirstSubmit] = useState(false);

    const handleChangeAnswer = (event) => {
        const value = event.target.value;
        setAnswer(value);
        console.log(firstSubmit);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFirstSubmit(true);
        const value = event.target.value;
        setAnswer(value);
        console.log(answer);

        if (answer === 'source' || answer === 'Source') {
            setCondition(true);
        } else {
            setCondition(false);
        }
    };

    const handleRetour = () => {
        navigate('/');
    };
    const handleSuivant = () => {
        navigate('/day/7/bis');
    };

    console.log(dayId);
    return (
        <div className="day-page">
            <div className="wrapper">
                <header style={{ textAlign: 'center', fontSize: '24px' }}>
                    <h1> Jour {dayId}</h1>
                </header>
                <p className="text"> Entrez votre réponse </p>
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="form-container">
                        <input type="text" className="text" onChange={handleChangeAnswer} />
                        <button type="submit" className="buttonCheck">
                            Valider
                        </button>
                    </form>
                </div>

                {condition && firstSubmit ? (
                    <>
                        <p className="bravo">Bravo !!</p>
                        <p className="text">
                            Vous avez trouvé la bonne réponse
                            <br /> Vous pouvez ouvrir la boite magique :
                        </p>
                        <p className="box_code"> V3G7 </p>
                        <button onClick={handleSuivant}>Suivant</button>
                    </>
                ) : firstSubmit ? (
                    <p className="text">Oups, ce n'est pas la bonne réponse!</p>
                ) : null}
                <button onClick={handleRetour}>Retour</button>
            </div>
        </div>
    );
};
