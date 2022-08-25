import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import { SymptomChecker } from './forms/SymptomChecker';
import { ResultPage } from './results/ResultPage';
import { NotFoundPage } from './pages/NotFoundPage';
const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    switch (process.env.REACT_APP_ENV_NAME) {
      case 'dev':
        console.log('Snowplow is not enabled for dev');
        return;
      case 'test':
        console.log('Snowplow is not enabled for test');
        return;
      case 'prod':
        console.log('Adding Snowplow script');
        script.src = '/analytics/snowplow.js';
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
        <Route
          path='/*'
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
