import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Services from './components/pages/Services';

function App() {
  return (
    <>
    <Router>

      <Navbar  />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/products' exact component={Products} />
      </Switch>
      
    </Router>
    </>
  );
}

export default App;


// hover not working

//images not displaying on the cards section

//sign up button not viewing on the mobile view