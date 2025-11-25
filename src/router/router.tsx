// src/router/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { DayPage } from '../pages/DayPage';
import { HomePage } from '../pages/HomePage';
import { Page5 } from '../pages/Page5';
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
        element: <DayPage />
    },
    {
        path: '/day/8',
        element: <div>Test 8</div>
    },
    {
        path: '/day/5',
        element: <Page5 />
    }
]);
