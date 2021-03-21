import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {
  return (
    <div className="App" >
    <NavBar />
      <Container className="AppContainer">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
      </Container>
    </div>
  );
}

export default App;
