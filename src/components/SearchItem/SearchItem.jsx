import { useDispatch } from "react-redux"
import { Button } from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
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
                    <ImageList >
                        <ImageListItem key={giphy.images.original.url}> 
                        <img src={giphy.images.original.url} alt="" className="image"/>
                        <ImageListItemBar
            
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}

              >
                <InfoIcon />
              </IconButton>
            }
          />


                        </ImageListItem>
                
                    
                
                </ImageList>
                </div>
                
                <Button onClick={()=>addFavorite()}>Add Favorite</Button>
                
            </div>
            
        </div>
        </>
    )
}

export default SearchItem