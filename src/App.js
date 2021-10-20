// import logo from './logo.svg';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import ChooseUs from './components/ChhoseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading';
import Information from './components/Information/Information';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Treatments from './components/Treatments/Treatments';
import AuthProvider from './context/AuthProvider';
// import img from '../../health-care/src/resources/images/teeth.png'
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Heading></Heading>
            <Information></Information>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Heading></Heading>
            <Information></Information>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
          </Route>
          <Route path="/treatments">
            <Treatments></Treatments>
            <Footer></Footer>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/show_details/:detailId">
            <ShowDetails></ShowDetails>
            <Footer></Footer>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
