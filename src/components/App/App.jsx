import SearchForm from "../SearchForm/SearchForm";
import SearchList from "../SearchList/SearchList";
import Favorites from "./Favorites/Favorites"

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchForm />
      <Favorites />
      <SearchList />
    </div>
  );
}

export default App;
