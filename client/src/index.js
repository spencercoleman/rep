import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { WorkoutsProvider } from './context/WorkoutsContext';
import { ExercisesProvider } from './context/ExercisesContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <WorkoutsProvider>
        <ExercisesProvider>
          <App />
        </ExercisesProvider>
      </WorkoutsProvider>
    </AuthProvider>
  </React.StrictMode>
);