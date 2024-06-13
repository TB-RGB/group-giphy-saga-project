import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
//might had button to go back to search 
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Favorites = () =>{
        const favor = useSelector(store => store.favoriteList)
        const dispatch = useDispatch()

        const [getCatogory, setCatogory] = useState('ALL')

        const categories = ['ALL', ...new Set(favor.map(fav => fav.categories))]

        const filterFavor = getCatogory === 'ALL'
            ? favor
            : favor.filter(fav => fav.category === getCatogory);

            const handleRemove = (event,id)=>{
                event.preventDefault()
                    dispatch({type: "DROP_FAVORITE", payload: id })
            }

        return(
            <>
             <div>
      <h3>Favorite Images</h3>
      <ul>
        {favor.map((fav, index) => (
           
           
          <li key={index}>
            <img src={fav.url} alt={`Favorite ${index}`} /> <button onClick={(event)=>handleRemove(fav.id)}>remove</button>
                
                 =
                        <select
                        value={getCatogory}
                        onClick = {(e)=>setCatogory(e.target.value)}
                        > Select  </select>
                        {categories.map((category, index)=>{
                            <option key={index} value={category} > {category} </option>
                    })}
                
          </li>
        ))}
      </ul>
    </div>
            </>
        )
}

export default Favorites

