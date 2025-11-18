import { useLocation } from 'react-router-dom';

export const ChallengePage = () => {
    const location = useLocation();

    const dayId = location.pathname.split('/')[2];

    console.log(dayId);
    return <div>toto</div>;
};
