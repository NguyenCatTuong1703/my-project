import "App.scss";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import HomePage from "components/HomePage/HomePage";
import NhaTrang from "components/NhaTrang/NhaTrang";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/du-lich-nha-trang">
            <NhaTrang />
          </Route>
          <Redirect exact to="/" />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
