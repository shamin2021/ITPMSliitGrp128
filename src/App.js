import logo from './logo.svg';
import './App.css';
import Menus from './Components/Menus';
import Menu2 from './Components/Menu2';
import EventsChallengePg from './Pages/EventsChallengePg';
import CreateEvents from './Pages/CreateEvents';
import AddEvents from './Pages/AddEvents';
import {BrowserRouter as Router, Switch, Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <div>
              <Routes>
                  <Route path="/EventsChallengePg" element={<EventsChallengePg />} />
                  <Route path="/Create" element={<CreateEvents />} />
                  <Route path="/Add" element={<AddEvents />} />
              </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
