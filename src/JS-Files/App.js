import '../CSS-Files/App.css';
import NavBar from './Components/NavBar';
import { Route, Routes , BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Blog from './Pages/Blog';

function App() {
  return (
    <div>
    <Router>
      <br/>
      <br/>
    <NavBar />
      <Routes>
        <Route path='/Home' exact component={Home} />
        <Route path='/Contact' exact component={Contact} />
        <Route path='/Project' exact component={Project} />
        <Route path='/Blog' exact component={Blog} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
