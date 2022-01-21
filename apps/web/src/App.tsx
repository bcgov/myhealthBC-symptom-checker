import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './Layout';
import { Home } from './components/Home';
import { SymptomChecker } from './forms/SymptomChecker';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/checker'
          element={
            <Layout>
              <SymptomChecker />
            </Layout>
          }
        ></Route>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
