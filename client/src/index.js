import React from 'react';
import ReactDOM from 'react-dom/client';
import { WorkoutsProvider } from './context/WorkoutsContext';
import { ExercisesProvider } from './context/ExercisesContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsProvider>
      <ExercisesProvider>
        <App />
      </ExercisesProvider>
    </WorkoutsProvider>
  </React.StrictMode>
);