import SearchList from "../SearchList/SearchList";
import Favorites from "./Favorites/Favorites";
import Header from "./Header/Header";
import {
  HashRouter as Router,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <SearchList />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </Router>
  );
}

export default App;
