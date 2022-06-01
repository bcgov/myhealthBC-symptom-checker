import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import { SymptomChecker } from './forms/SymptomChecker';
import { ResultPage } from './results/ResultPage';
const App = () => {
  useEffect(() => {
    if (process.env.REACT_APP_ENV_NAME === 'dev') {
      console.log('Adding Snowplow script');
      const script = document.createElement('script');
      script.src = '/analytics/snowplow.dev.js';
      script.async = true;

      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    } else {
      console.log('Snowplow not enabled for this env');
    }
  }, []);
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
        />
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/result'
          element={
            <Layout result>
              <ResultPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
