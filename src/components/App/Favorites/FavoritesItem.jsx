import { useDispatch, useSelector } from "react-redux"
import { Button } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const FavoriteItem =({ fav })=>{
    const dispatch = useDispatch()

    const categoryList = useSelector(store => store.categories)
 

    
    const sendCategory = (catId, favId) => {
        dispatch({
          type: "SET_CATEGORY",
          payload: { id: favId, categoryId: Number(catId) },
        });
      };

    const handleCategoryChange = (event, favId) => {
        const newCategoryId = event.target.value;
        sendCategory(newCategoryId, favId);
      };

      const handleRemove = (event, id) => {
        event.preventDefault();
        dispatch({ type: "DROP_FAVORITE", payload: id });
      };
      const categoryValue = fav.category || "";
    return(
        <div className="favorite-item" key={fav.id}>
            <div className="image-container">
        <img src={fav.url} alt={`Favorite ${fav.id}`} className="image"/>{" "}
       
        </div>
        <div>
       
        <FormControl >
        
        <Select
          id={`category-${fav.id}`}
          value={categoryValue}
          variant="outlined"
          onChange={(event) => handleCategoryChange(event, fav.id)}
          sx={{height: 25, color:'primary.main'}}
          
        >
          {categoryList.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <Button sx={{height: 25}} variant="outlined"size="small" color='error' onClick={(event) => handleRemove(event, fav.id)}>
          <DeleteForeverIcon />
        </Button>
        </div>
      </div>
    )
}

export default FavoriteItem