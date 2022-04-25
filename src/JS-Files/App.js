import '../CSS-Files/App.css';
import NavBar from './Components/NavBar';
import { Route, Routes , BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className='App'>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Contact' exact component={Contact} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
