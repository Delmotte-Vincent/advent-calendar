// src/router/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { ChallengePage } from '../pages/ChallengePage';
import { HomePage } from '../pages/HomePage';
import { TestPage } from '../pages/TestPage';

export const router = createBrowserRouter([
    {
        index: true,
        element: <HomePage />
    },
    {
        path: '/test',
        element: <TestPage />
    },
    {
        path: '/day/:id',
        element: <ChallengePage />
    }
]);
