import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import { SymptomChecker } from './forms/SymptomChecker';
import { ResultPage } from './results/ResultPage';
const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    switch (process.env.REACT_APP_ENV_NAME) {
      case 'dev':
      case 'test':
        console.log('Adding Snowplow script');
        script.src = '/analytics/snowplow.dev.js';
        script.async = true;
        break;
      default:
        return;
    }
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
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
            <Layout>
              <ResultPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
