import React from 'react';
import { RouterProvider } from 'react-router';
import routes from './routes/routes';
import './App.css'


function App() {
  return (
    <div className="App">
   <RouterProvider router={routes} />
    </div>
  );
}

export default App;
