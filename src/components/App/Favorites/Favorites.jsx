import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FavoriteItem from "./FavoritesItem";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Favorites.css'

const Favorites = () => {
  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
    dispatch({ type: "FETCH_CATEGORIES" });
  }, []);

  const favor = useSelector((store) => store.favoriteList);
  const categoryList = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  const history = useHistory();

  const [filterCategory, setFilterCategory] = useState(0);


  const handleCategoryClick = (categoryId) => {
    setFilterCategory(categoryId);
  };

  const filteredFavorites = filterCategory
    ? favor.filter((fav) => fav.category === filterCategory)
    : favor;



  return (
    <>
      <div>
        <h3>Favorite Images</h3>
        <div className="flex">
        <div className="button-group">
        <nav>
        <ButtonGroup variant="outlined" color="secondary" aria-label="Basic button group">
          {categoryList.map((category) => (
             <Button sx={{height: 25}} key={category.id} onClick={() => handleCategoryClick(category.id)}>{category.name}</Button>
          ))}
          </ButtonGroup>
        </nav>
        </div>
        </div>
        <div className="favorite-container">
          {filteredFavorites.map((fav) => (
            <FavoriteItem key={fav.id} fav={fav}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
