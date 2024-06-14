import { useDispatch } from "react-redux"
import { Button } from "@mui/material"

const SearchItem =({ giphy })=>{
    const dispatch = useDispatch()

    const addFavorite = ()=>{
        dispatch({type: 'SEND_FAVORITE', payload: { url: giphy.images.original.url}})
    }


    return(
        <>
        <div>
            <div className="search-item">
                <div className="image-container">
                <img src={giphy.images.original.url} alt="" className="image"/>
                </div>
                <Button onClick={()=>addFavorite()}>Add Favorite</Button>
            </div>
            
        </div>
        </>
    )
}

export default SearchItem