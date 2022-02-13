import PageWrapper from './components/PageWrapper';
import Services from './components/common/Services';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <PageWrapper>
            <Routes>
              <Route path="/home" element={<Home/>}/>

              <Route path="/" element={<Home/>}/>

              <Route path="/about" element={<About/>}/>
              <Route path="/services" element={<Services/>}/>

              <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
