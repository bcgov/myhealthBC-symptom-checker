import { Layout } from './Layout';
import { Home } from './components/Home';
import { SymptomChecker } from './forms/SymptomChecker';
import { ResultPage } from './results/ResultPage';

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
          path='/result/:result'
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
