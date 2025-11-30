import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const days_row1 = ['1', '2', '3', '4', '5', '6', '7', '8'];
const days_row2 = ['9', '10', '11', '12', '13', '14', '15', '16'];
const days_row3 = ['17', '18', '19', '20', '21', '22', '23'];

export const HomePage = () => {
    const navigate = useNavigate();

    const handleClick = (day) => {
        console.log(`Day ${day}`);
        navigate(`/day/${day}`);
    };

    return (
        <div className="home-page">
            <header className="header">
                <h1>Bienvenue dans la connexion magique de la valise du ministère !</h1>
            </header>
            <div className="valise">
                <div className="background-section">
                    <div className="button-grid">
                        <div className="button-row">
                            {days_row1.map((day) => (
                                <button
                                    key={day}
                                    className="button-day"
                                    onClick={() => handleClick(day)}
                                >
                                    Jour {day}
                                </button>
                            ))}
                        </div>
                        <div className="button-row">
                            {days_row2.map((day) => (
                                <button
                                    key={day}
                                    className="button-day"
                                    onClick={() => handleClick(day)}
                                >
                                    Jour {day}
                                </button>
                            ))}
                        </div>
                        <div className="button-row">
                            {days_row3.map((day) => (
                                <button
                                    key={day}
                                    className="button-day"
                                    onClick={() => handleClick(day)}
                                >
                                    Jour {day}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <p>
                    Condition d'utilisation : Toute information, document, graphique ou charme
                    présenté sur cette connexion magique est la propriété exclusive du Ministère de
                    la Magie et est protégé par le Code de Confidentialité Magique, Section 712.
                </p>
            </div>
        </div>
    );
};
