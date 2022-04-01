import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ExamplesPage from './components/pages/ExamplesPage';
import HomePage from './components/pages/HomePage';
import './App.scss';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <div className="App--content">
        <Header />
        <main>
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="examples" element={<ExamplesPage />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
