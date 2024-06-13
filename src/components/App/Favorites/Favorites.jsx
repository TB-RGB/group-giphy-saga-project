import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//might had button to go back to search
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Favorites = () => {
  useEffect(() => {
    dispatch({ type: "FETCH_CATEGORIES" });
  }, []);

  const favor = useSelector((store) => store.favoriteList);
  const categoryList = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  const [getCategory, setCategory] = useState("1");
  const [filterCategory, setFilterCategory] = useState(0);

  const handleRemove = (event, id) => {
    event.preventDefault();
    dispatch({ type: "DROP_FAVORITE", payload: id });
  };
  const sendCategory = (catId, favId) => {
    dispatch({
      type: "SET_CATEGORY",
      payload: { id: favId, categoryId: Number(catId) },
    });
  };
  return (
    <>
      <div>
        <h3>Favorite Images</h3>
        <nav>
          <button onClick={() => setFilterCategory(categoryList[0].id)}>
            {categoryList[0].name}
          </button>
          <button onClick={() => setFilterCategory(categoryList[1].id)}>
            {categoryList[1].name}
          </button>
          <button onClick={() => setFilterCategory(categoryList[2].id)}>
            {categoryList[2].name}
          </button>
          <button onClick={() => setFilterCategory(categoryList[3].id)}>
            {categoryList[3].name}
          </button>
          <button onClick={() => setFilterCategory(categoryList[4].id)}>
            {categoryList[4].name}
          </button>
        </nav>
        <ul>
          {favor.map((fav) => (
            <li key={fav.id}>
              <img src={fav.url} alt={`Favorite ${fav.id}`} />{" "}
              <button onClick={(event) => handleRemove(event, fav.id)}>
                remove
              </button>
              {/* <select
                value={getCatogory}

                onChange={(e) => setCatogory(e.target.value)}
              > {categoryList.map((category, index) => {
                <option key={index} value={category}> {category} </option>
              })} </select>
             */}
              <select
                id="rating"
                value={getCategory}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="1">Wild</option>
                <option value="2">Uproarious</option>
                <option value="3">Poignant</option>
                <option value="4">Felicitous</option>
                <option value="5">Whimsical</option>
              </select>
              <button onClick={() => sendCategory(getCategory, fav.id)}>
                Set Category
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Favorites;
