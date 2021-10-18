// import logo from './logo.svg';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading';
import Services from './components/Services/Services';
import ShowDetails from './components/ShowDetails/ShowDetails';
// import img from '../../health-care/src/resources/images/teeth.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Heading></Heading>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path="/show_details">
            <ShowDetails></ShowDetails>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
