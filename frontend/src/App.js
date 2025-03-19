import React, {useRef} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';


// Import Pages
//import Home from './pages/Home';
import Register from './pages/Admin Auth';
import ReceptionMessageInterface from "./pages/Reception";
import Department from "./pages/Department";


const AnimatedRoutes = () => {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <div className="route-container">
          <Routes location={location}>
              <Route path="/" element={<Register />} />
              <Route path="/reception" element={<ReceptionMessageInterface />} />
              <Route path="/department" element={<Department />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
