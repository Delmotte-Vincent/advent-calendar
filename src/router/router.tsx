import { createBrowserRouter } from 'react-router-dom';
import { DayPage } from '../pages/DayPage';
import { HomePage } from '../pages/HomePage';
import { Page10 } from '../pages/Page10';
import { Page7 } from '../pages/Page7';
import { Page7bis } from '../pages/Page7bis';

export const router = createBrowserRouter([
    {
        index: true,
        element: <HomePage />
    },
    {
        path: '/day/7/bis',
        element: <Page7bis />
    },
    {
        path: '/day/7',
        element: <Page7 />
    },
    {
        path: '/day/:id',
        element: <DayPage />
    },
    {
        path: '/day/10',
        element: <Page10 />
    }
]);
