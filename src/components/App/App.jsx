import SearchForm from "../SearchForm/SearchForm";
import SearchList from "../SearchList/SearchList";
import Favorites from "./Favorites/Favorites";
import {
  HashRouter as Router,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div>
        <h1>Giphy Search!</h1>
        <header>
          <Link to='/favorites'>
            Favorites
          </Link>
          <br />
          <Link to='/'>
            Home
          </Link>
        </header>
        <Route exact path="/">
          <SearchForm />
          <SearchList />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </div>
    </Router>
  );
}

export default App;
